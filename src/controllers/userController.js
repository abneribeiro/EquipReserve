// controllers/userController.js
const User = require("../models/User");

class UserController {
  // Criar um novo usuário
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message, message: "Failed to register user." });
    }
  }

  // Obter todos os usuários
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }
        const token = await user.generateToken();
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
  }

  // Obter um usuário por ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualizar informações de um usuário
  async updateUser(req, res) {
    try {
        const userId = req.params.userId;
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Excluir um usuário
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
