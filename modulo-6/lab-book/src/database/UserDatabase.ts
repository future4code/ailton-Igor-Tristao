import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  async getUserByEmail(email: string) {
    try {
      const userDB = await BaseDatabase.connection("Labook_Users")
        .select()
        .where({ email });

      if(userDB.length === 0) {
        return undefined
      }

      return userDB;
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
