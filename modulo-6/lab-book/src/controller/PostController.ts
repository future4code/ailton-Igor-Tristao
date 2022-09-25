import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ParamsError } from "../errors/ParamsError";
import { IInputPostCreatorDTO, IInputPostEdit } from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public createPost = async (req: Request, res: Response) => {
    try {

      const content: string = req.body.content
      const token = req.headers.authorization as string

      const input: IInputPostCreatorDTO = {
        content,
        token
      }

      const response = await this.postBusiness.postCreator(input)

      res.status(201).send(response)

    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public getPosts = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string
        
        const response = await this.postBusiness.getPosts(token)

        res.status(200).send(response)

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public deletePost = async (req: Request, res: Response) => {
    try {

        const postId = req.params.id as string
        const token = req.headers.authorization as string

        const input: IInputPostEdit = {
          postId,
          token
        }

        const response = await this.postBusiness.postDelete(input)

        res.status(200).send(response)

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public postLike = async (req: Request, res: Response) => {
    try {
      
      const postId = req.params.id as string
      const token = req.headers.authorization as string

      const input: IInputPostEdit = {
        postId,
        token
      }

      const response = await this.postBusiness.postLike(input)

      res.send(response)

    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public postDislike = async (req: Request, res: Response) => {
    try {

      const postId = req.params.id as string
      const token = req.headers.authorization as string
      
      const input: IInputPostEdit = { postId, token }

      const response = await this.postBusiness.postDislike(input)

      res.send(response)
      
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
