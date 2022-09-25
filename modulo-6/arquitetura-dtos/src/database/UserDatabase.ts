import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Arq_Users";

  async getUserByEmail(email: string) {
    try {
      const user = await this.getConnection()
        .where({ email })
        .from("Arq_Users");

      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.getConnection().where({ id }).from("Arq_Users");

      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async insertUser(user: any) {
    try {
      await this.getConnection().insert(user).into("Arq_Users");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getUsers(search: string) {
    try {
      const users = await this.getConnection().from("Arq_Users").where('name', 'like', `%${search}%`).orderBy('name', 'asc').limit(5);
      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async deleteUser(id: string) {
    try {

        await this.getConnection().delete().where({id}).from('Arq_Users')

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
