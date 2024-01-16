// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/', UserController.createUser);

// Rota para obter todos os usuários
router.get('/', UserController.getAllUsers);

router.post('/login', UserController.login);

// Rota para obter um usuário por ID
router.get('/:userId', UserController.getUserById);

// Rota para atualizar informações de um usuário
router.put('/:userId', UserController.updateUser);

// Rota para excluir um usuário
router.delete('/:userId', UserController.deleteUser);

module.exports = router;