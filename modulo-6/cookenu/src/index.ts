import { application } from 'express';
import { app } from './app';
import { RecipeController } from './endpoints/RecipeController';
import { UserController } from './endpoints/UserController';

const userController = new UserController();
const recipeController = new RecipeController()

// END POINTS USUÁRIO

// Pegar todos os perfis (somente admin)
app.get('/profiles', userController.getAllProfiles)

// Pegar as informações do seu perfil
app.get('/user/profile', userController.getOwnProfile)

// Pegar as receitas de quem estou seguindo
app.get('/user/feed', userController.getFeed)

// Seguir um usuário
app.post('/user/follow', userController.followUser)

// Pegar as informações de um perfil qualquer com o ID (apenas admin)
// app.get('/user/profile/:id', userController.getProfile)

// Deixar de seguir um usuário
app.post('/user/unfollow', userController.unfollowUser)

// Criar uma conta
app.post('/signup', userController.signup)

// Fazer o login
app.post('/login', userController.login)

// Deletar um usuário (apenas admin)
app.delete('/user/delete/:userId', userController.deleteUser)

// END POINTS RECEITAS

// Pegar uma receita com o id
app.get('/recipe/:id', recipeController.getRecipe)

// Criar uma receita
app.post('/recipe', recipeController.createRecipe)

// Editar o título e/ou descrição de uma receita (apenas das que você criou, a menos que seja admin, dai pode editar qualquer uma)
app.put('/recipe/update/:id', recipeController.updateRecipe)

// Deletar uma receita (apenas a que você criou, a menos que seja admin, dai pode deletar qualquer uma)
app.delete('/recipe/delete/:recipeId', recipeController.deleteRecipe)

