const express = require('express');
const router = express.Router();
var apiController = require('../controller/apiController');
const db = require('../database/connection')();

/* User List */

router.get('/user', apiController.getUsers);

/* Single User */

router.get('/user/:id', apiController.getSingleUser);

/* Add User  */

router.post('/user', apiController.addUser);

/* Update User */

router.put('/user/:id', apiController.updateUser);

/* Delete User */

router.delete('/user/:id', apiController.deleteUser);

/* Login */

router.post('/login', apiController.login);

/* Admin Register */

router.post('/register', apiController.createAdmin);

/* List Admin */

router.get('/admin', apiController.getAdmin);

module.exports = router;

