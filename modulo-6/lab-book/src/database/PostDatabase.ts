import { ILikeDB, IPostDB } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  async insertPost(post: IPostDB): Promise<void> {
    try {
      await BaseDatabase.connection("Labook_Posts").insert(post);
    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async getPosts(): Promise<IPostDB[]> {
    try {
      const posts: IPostDB[] = await BaseDatabase.connection("Labook_Posts");

      return posts;
    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async getLikes(postId: string): Promise<ILikeDB[]> {
    try {
      const likes: ILikeDB[] = await BaseDatabase.connection(
        "Labook_Likes"
      ).where({
        post_id: postId,
      });

      return likes;
    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async getPostById(postId: string): Promise<IPostDB[]> {
    try {
      const post: IPostDB[] = await BaseDatabase.connection(
        "Labook_Posts"
      ).where({ id: postId });

      return post;
    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async deletePost(postId: string): Promise<void> {
    try {

      await BaseDatabase.connection('Labook_Likes')
      .delete()
      .where({post_id: postId})

      await BaseDatabase.connection('Labook_Posts')
      .delete()
      .where({id: postId})

    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async checkIfUserLikeAPost (postId: string, userId: string): Promise<boolean> {
    try {
      
      const existLike = await BaseDatabase.connection('Labook_Likes')
      .where({post_id: postId, user_id: userId})

      if(existLike.length === 0) {
        return false
      } 
      else {
        return true
      }

    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async insertLike (like: ILikeDB): Promise<void> {
    try {

      await BaseDatabase.connection('Labook_Likes')
      .insert(like)
      
    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }

  async removeLike (postId: string, userId: string): Promise<void> {
    try {

      await BaseDatabase.connection('Labook_Likes')
      .delete()
      .where({post_id: postId, user_id: userId})
      
    } catch (error: any) {
      throw new Error(error.message || error.mySqlmessage);
    }
  }
}
