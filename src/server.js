// server.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');  

// Conectar ao banco de dados
connectDB();

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo ao EquipReserve!');
});



// Configuração do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;  // Exporta o app para fins de teste
