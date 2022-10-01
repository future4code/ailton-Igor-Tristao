import {
  ILoginInputDTO,
  ILoginOutputDTO,
  ISignupOutputDTO,
  ITokenPayload,
  IUserDB,
  User,
} from "./../models/User";
import { UserDatabase } from "../database/UserDatabase";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { UnprocessableError } from "../errors/UnprocessableError";
import { ISignupInputDTO, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationError } from "../errors/AuthenticationError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const { name, email, password, role } = input;

    // regras de negócios
    if (role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN && role) {
      throw new UnprocessableError(
        "Parâmetro 'role' inválido, só é aceito NORMAL ou ADMIN."
      );
    }

    if (!name || !email || !password) {
      throw new ParamsError(
        "Necessário insirir um nome, email e password para efetuar o cadastro."
      );
    }

    if (typeof name !== "string") {
      throw new UnprocessableError(
        "Parâmetro 'name' precisa ser do tipo string."
      );
    }

    if (name.length < 3) {
      throw new UnprocessableError(
        "Parâmetro 'name' precisa ter no mínimo 3 caracteres."
      );
    }

    if (typeof email !== "string") {
      throw new UnprocessableError("Parâmetro 'email' inválido.");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new UnprocessableError("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new UnprocessableError(
        "Parâmetro 'password' precisa ser do tipo string."
      );
    }

    if (password.length < 6) {
      throw new UnprocessableError(
        "Parâmetro 'password' precisa ter no mínimo 6 caracteres."
      );
    }

    const emailExists = await this.userDatabase.findByEmail(email);

    if (emailExists) {
      throw new ConflictError("Email já existe.");
    }

    const id = this.idGenerator.generate();

    const hashedPassword = await this.hashManager.hash(password);

    let roleToCreateUser = USER_ROLES.NORMAL;

    if (role) {
      roleToCreateUser = role;
    }

    const user = new User(id, name, email, hashedPassword, roleToCreateUser);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Usuário cadastrado com sucesso",
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new ParamsError(
        "Necessário insirir um email e um password para efetuar o login."
      );
    }

    if (typeof email !== "string") {
      throw new UnprocessableError("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new UnprocessableError("Parâmetro 'password' inválido");
    }

    if (password.length < 6) {
      throw new UnprocessableError(
        "Parâmetro 'password' precisa ter no mínimo 6 caracteres."
      );
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new UnprocessableError("Parâmetro 'email' inválido");
    }

    // Verificação se existe um usuário com este email
    const userExists = await this.userDatabase.findByEmail(email);

    if (!userExists) {
      throw new AuthenticationError("Email não cadastrado.");
    }

    const user = new User(
      userExists.id,
      userExists.name,
      userExists.email,
      userExists.password,
      userExists.role
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new AuthenticationError("Password incorrect");
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response: ILoginOutputDTO = {
      message: "Login realizado com sucesso",
      token,
    };

    return response;
  };
}

