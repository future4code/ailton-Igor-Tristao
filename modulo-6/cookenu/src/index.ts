import { application } from 'express';
import { app } from './app';
import { RecipeController } from './endpoints/RecipeController';
import { UserController } from './endpoints/UserController';

const userController = new UserController();
const recipeController = new RecipeController()

// apenas admin
app.get('/allProfiles', userController.getAllProfiles)

app.post('/signup', userController.signup)

app.post('/login', userController.login)

app.get('/user/profile', userController.getOwnProfile)

app.get('/user/:id', userController.getProfile)

app.post('/recipe', recipeController.createRecipe)

app.get('/recipe/:id', recipeController.getRecipe)
