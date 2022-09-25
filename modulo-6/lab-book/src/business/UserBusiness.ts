import { ConflictError } from "../errors/ConflictError";
import { UserDatabase } from "../database/UserDatabase";
import { UnprocessableError } from "../errors/UnprocessableError";
import {
  ILoginInputDTO,
  ISignupInputDTO,
  ITokenPayload,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { ParamsError } from "../errors/ParamsError";
import { AuthenticationError } from "../errors/AuthenticationError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  async userCreator(input: ISignupInputDTO) {
    const { name, email, password, role }: ISignupInputDTO = input;

    // Verificações dos dados recebidos
    if(role !== 'NORMAL' && role !== 'ADMIN' && role) {
      throw new UnprocessableError("Parâmetro 'role' inválido, só é aceito NORMAL ou ADMIN.")
    }

    if (!name || !email || !password) {
      throw new ParamsError(
        "Necessário insirir um nome, email e password para efetuar o cadastro."
      );
    }

    if (typeof name !== "string" || name.length < 3) {
      throw new UnprocessableError("Parâmetro 'name' invalido.");
    }

    if (typeof email !== "string") {
      throw new UnprocessableError("Parâmetro 'email' inválido.");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new UnprocessableError("Parâmetro 'password' invalido.");
    }

    // Verificação se já existe uma conta com este email
    const emailExist = await this.userDatabase.getUserByEmail(email);

    if (emailExist) {
      throw new ConflictError("Email já existe.");
    }

    const id = this.idGenerator.generate();

    const hashPassword = await this.hashManager.hash(password);

    // Caso não seja inserido um ROLE, automaticamente será um usuário normal.
    let roleToCreateUser = USER_ROLES.NORMAL;

    // Caso seja inserido um ROLE, será o valor utilizado, capacitando assim a criação de um usuário ADMIN.
    if (role) {
      roleToCreateUser = role;
    }

    const user = new User(id, name, email, hashPassword, roleToCreateUser);

    await this.userDatabase.insertUser(user);

    const payload: ITokenPayload = {
      id,
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Cadastro realizado com sucesso",
      token,
    };

    return response;
  }

  async userLogin(input: ILoginInputDTO) {
    const { email, password }: ILoginInputDTO = input;

    // Verificações dos dados recebidos
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
        "Parâmetro 'password' deve possuir no mínimo 6 caracteres"
      );
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    // Verificação se existe um usuário com este email
    const userExists = await this.userDatabase.getUserByEmail(email);

    if (!userExists) {
      throw new AuthenticationError("Email não cadastrado.");
    }

    // Verificação se a senha esta correta
    const hashCompare = await this.hashManager.compare(
      password,
      userExists.getPassword()
    );

    if (!hashCompare) {
      throw new AuthenticationError("Password incorrect");
    }

    const payload: ITokenPayload = {
      id: userExists.getId(),
      role: userExists.getRole()
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Login realizado com sucesso",
      token,
    };

    return response;
  }
}
