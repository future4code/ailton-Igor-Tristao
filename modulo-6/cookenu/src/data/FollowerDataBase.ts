import { BaseDataBase } from "./BaseDataBase";

export class FollowerDataBase extends BaseDataBase {
  async startFollowing(userFollowing: string, userBeingFollowed: string) {
    try {
      await this.getConnection()
        .insert({ user_following: userFollowing, user_being_followed: userBeingFollowed })
        .into("cookenu_followers");
    } catch (error: any) {  
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getPeopleFollowed(userFollowing: string) {
    try {
      const id_following = await this.getConnection()
        .select("user_being_followed")
        .where({ user_following: userFollowing })
        .from("cookenu_followers");
      return id_following;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async stopFollowing(userFollowing: string, userBeingFollowed: string) {
    try {
      await this.getConnection()
        .delete()
        .where({ user_following: userFollowing, user_being_followed: userBeingFollowed })
        .from("cookenu_followers");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
