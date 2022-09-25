import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  async getUserByEmail(email: string): Promise<User> {
    try {
      const userDB = await BaseDatabase.connection("Labook_Users")
        .select()
        .where({ email });

      const user = new User(
        userDB[0].id,
        userDB[0].name,
        userDB[0].email,
        userDB[0].password,
        userDB[0].role
      );

      return user;
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }

  async insertUser(user: User): Promise<void> {
    try {
      const userDB: IUserDB = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      };

      await BaseDatabase.connection("Labook_Users").insert(userDB);
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}
