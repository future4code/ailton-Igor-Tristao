import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      const user = await this.getConnection()
        .where({ email })
        .from("cookenu_user");

      if (user.length === 0) {
        return undefined;
      }

      return User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async insertUser(user: User): Promise<void> {
    try {
        await this.getConnection().insert(user).into('cookenu_user')
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    }
  }

  async getAllProfiles(): Promise<User[]> {
    const users = await this.getConnection().select('*').from('cookenu_user')
    return users
  }

  async findUserById(id: string): Promise<User | undefined> {
    try {
      const user = await this.getConnection()
        .where({ id })
        .from("cookenu_user");

      if (user.length === 0) {
        return undefined;
      }

      return User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async deleteUser(id: string) {
    try {

      // Excluindo todas as receitas deste usuário
      await this.getConnection().delete().where({creator_id: id}).from('cookenu_recipe')

      // Excluindo suas seguidas/sendo seguido.
      await this.getConnection().delete().where({user_following: id}).from('cookenu_followers')
      await this.getConnection().delete().where({user_being_followed: id}).from('cookenu_followers')

      // Excluindo o usuário de fato
      await this.getConnection().delete().where({id}).from('cookenu_user')
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
