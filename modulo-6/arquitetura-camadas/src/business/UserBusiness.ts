import { IUserDB, User, USER_ROLES } from "./../models/User";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  async create(user: any) {
    const { name, email, password } = user;

    if (!name || !email || !password) {
      throw new Error(`Please check your fields...`);
    }

    // name, email e password devem ser fornecidos e serem do tipo string
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      throw new Error(`Name, email and password should be strings`);
    }

    // name deve possuir ao menos 3 caracteres
    if (name.length < 3) {
      throw new Error(`Your name should have at least 3 characters`);
    }

    // password ao menos 6 caracteres
    if (password.length < 6) {
      throw new Error(`Your password should have at least 6 characters`);
    }

    // email deve ter um formato válido e único
    function validEmail(email: string) {
      return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    }

    if (!validEmail(email)) {
      throw new Error(`Invalid email`);
    }

    const emailExists = await new UserDatabase().getUserByEmail(email);

    if (emailExists.length > 0) {
      throw new Error(`Email already exists`);
    }

    const id = new IdGenerator().generate();

    const hashPassword = await new HashManager().hash(password);

    const userDB: IUserDB = {
      id,
      name,
      email,
      password: hashPassword,
      role: USER_ROLES.NORMAL,
    };

    await new UserDatabase().insertUser(userDB);

    const token = new Authenticator().generateToken({
      id,
      role: USER_ROLES.NORMAL,
    });

    return token;
  }

  async login(email: string, password: string) {
    if (!email || !password) {
      throw new Error("Please check your fields...");
    }

    // email e password devem ser fornecidos e serem do tipo string
    if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Email and password must be strings");
    }
    
    // password deve possuir ao menos 6 caracteres
    if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
    }
    
    // email deve ter um formato válido
    function validEmail(email: string) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    }
    
    if (!validEmail(email)) {
        throw new Error(`Invalid email`);
    }
    
    // O usuário com o e-mail fornecido deve existir no sistema
    const emailExists = await new UserDatabase().getUserByEmail(email);

    if (emailExists.length === 0) {
      throw new Error("Invalid email");
    }
    
    // A senha do usuário deve estar correta
    const checkPassword = await new HashManager().compare(password, emailExists[0].password)

    if(!checkPassword) {
        throw new Error('Invalid password')
    }

    const token = new Authenticator().generateToken({ id: emailExists[0].id, role: emailExists[0].role })

    return token;
  }

  async getUsers(token: string, search: string) {

    const tokenData = new Authenticator().getTokenPayload(token)

    if(!tokenData) {
        throw new Error('Invalid token')
    }


    const users = await new UserDatabase().getUsers(search)

    if(users.length === 0) {
        throw new Error('No users found')
    }

    const newUsers = users.map((user) => {
       const usersInfo = {
        id: user.id,
        name: user.name,
        email: user.email
       }
       return usersInfo
    })

    return newUsers

  }

  async deleteUser(userId: string, token: string) {

    if(!userId) {
        throw new Error(`ID must be provided`)
    }

    const tokenData = new Authenticator().getTokenPayload(token)

    if(!tokenData) {
        throw new Error('Invalid token')
    }

    if(tokenData.role !== USER_ROLES.ADMIN) {
        throw new Error('Only admins can delete users')
    }

    const userExists = await new UserDatabase().getUserById(userId)

    if(userExists.length === 0) {
        throw new Error('ID invalid')
    }

    await new UserDatabase().deleteUser(userId)

    return 'user deleted successfully'
  }
}
