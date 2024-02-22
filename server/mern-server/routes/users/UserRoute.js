const express = require('express');
const { registerUserCtrl,loginUserCtrl,profileUserCtrl,deleteUserCtrl,updateUserCtrl } = require('../../controllers/users/UsersCtrl');
const isLogin = require('../../middlewares/isLogin');
const usersRoute = express.Router();

//POST/api/v1/users/register
usersRoute.post('/register', registerUserCtrl)

//POST/api/v1/users/login
usersRoute.post('/login',loginUserCtrl)

//GET/api/v1/users/profile/
usersRoute.get('/profile/',isLogin, profileUserCtrl)

//DELETE/api/v1/users/profile/
usersRoute.delete('/',isLogin,deleteUserCtrl)

//UPDTAE/api/v1/users/profile/
usersRoute.put('/',isLogin,updateUserCtrl)

module.exports = usersRoute;
