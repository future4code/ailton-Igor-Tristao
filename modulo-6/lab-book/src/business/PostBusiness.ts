import { USER_ROLES } from './../models/User';
import { PostDatabase } from "../database/PostDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { IInputPostCreatorDTO, IInputPostEdit, ILikeDB, IPostDB, Post } from "../models/Post";
import { ITokenPayload } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { ConflictError } from '../errors/ConflictError';

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  async postCreator(input: IInputPostCreatorDTO) {
    const { content, token } = input;

    // Verificações dos dados recebidos
    if (!content) {
      throw new ParamsError("Necessário inserir um texto para seu post.");
    }

    if (content.length < 1) {
      throw new ParamsError("Texto precisa ter no mínimo 1 caracter");
    }

    if (!token) {
      throw new ParamsError("Insira um token");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new AuthenticationError("Token invalido");
    }

    const id = this.idGenerator.generate();

    const userId = tokenData.id

    const newPost: IPostDB = {
      id,
      content,
      user_id: userId,
    };

    await this.postDatabase.insertPost(newPost);

    const response = {
      message: "Post criado com sucesso.",
    };

    return response;
  }

  async getPosts(token: string) {
    if (!token) {
      throw new ParamsError("Insira um token");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new AuthenticationError("Token inválido");
    }

    const posts = await this.postDatabase.getPosts();

    // Pegando a quantidade de likes de cada post
    let postsInfo: Post[] = [];
    for (let i = 0; i < posts.length; i++) {
      const likes = await this.postDatabase.getLikes(posts[i].id);

      const postInfo = new Post(
        posts[i].id,
        posts[i].content,
        posts[i].user_id,
        likes.length
      );
      postsInfo.push(postInfo);
    }

    return postsInfo;
  }

  async postDelete(input: IInputPostEdit) {

    const { postId, token } = input

    // Verificação dos dados recebidos
    if (!postId || postId === ":id") {
      throw new ParamsError("Por favor insira um ID.");
    }

    if(!token) {
      throw new ParamsError('Insira um token')
    }

    const tokenData = this.authenticator.getTokenPayload(token)

    if(!tokenData) {
      throw new AuthenticationError('Token inválido')
    }

    // Verificação se o post existe
    const post: IPostDB[] = await this.postDatabase.getPostById(postId)

    if(post.length === 0) {
      throw new NotFoundError('ID inválido (post não existe)')
    }

    const userId = tokenData.id
    const userRole = tokenData.role

    // Verificação se o criador do post é diferente do usuário e se ele é admin ou não.
    if(post[0].user_id !== userId && userRole !== USER_ROLES.ADMIN) {
      throw new AuthorizationError('Somente admins podem deletar posts de outras pessoas.')
    }

    await this.postDatabase.deletePost(postId)

    const response = {
      message: 'Post deletado com sucesso.'
    }

    return response;
  }

  async postLike(input: IInputPostEdit) {

    const { postId, token } = input

    // Verificações dos dados recebidos
    if(!postId || postId === ':id') {
      throw new ParamsError('Necessário passar um postId.')
    }

    if(!token) {
      throw new ParamsError('Token necessário')
    }

    const tokenData = this.authenticator.getTokenPayload(token)

    if(!tokenData) {
      throw new AuthorizationError('Token inválido')
    }
    
    // Verificação de o post existe
    const post = await this.postDatabase.getPostById(postId)

    if(post.length === 0) {
      throw new NotFoundError('ID inválido')
    }

    const userId = tokenData.id

    // Verificação se o post já possui o like do usuário
    const postLikeCheck = await this.postDatabase.checkIfUserLikeAPost(postId, userId)
    
    if(postLikeCheck) {
      throw new ConflictError('Você já deu like neste post.')
    }

    const id = this.idGenerator.generate()
    
    const likeInfo: ILikeDB = {
      id,
      post_id: postId,
      user_id: userId
    }

    await this.postDatabase.insertLike(likeInfo)
    
    const response = {
      message: 'Like realizado com sucesso.'
    }

    return response

  }

  async postDislike(input: IInputPostEdit) {

    const { postId, token } = input

    // Verificações dos dados recebidos
    if(!postId || postId === ':id') {
      throw new ParamsError('Necessário passar um postId.')
    }

    if(!token) {
      throw new ParamsError('Token necessário')
    }

    const tokenData = this.authenticator.getTokenPayload(token)

    if(!tokenData) {
      throw new AuthorizationError('Token inválido')
    }
    
    // Verificação se o post existe
    const post = await this.postDatabase.getPostById(postId)

    if(post.length === 0) {
      throw new NotFoundError('ID inválido')
    }

    const userId = tokenData.id

    // Verificação se o post possui o like do usuário
    const postLikeCheck = await this.postDatabase.checkIfUserLikeAPost(postId, userId)
    
    if(!postLikeCheck) {
      throw new ConflictError('Você ainda não deu like neste post.')
    }

    await this.postDatabase.removeLike(postId, userId)
    
    const response = {
      message: 'Dislike realizado com sucesso.'
    }

    return response

  }
}
