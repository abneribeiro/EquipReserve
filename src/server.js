// server.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');  // Importa a configuração do banco de dados

// Configuração do servidor
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo ao EquipReserve!');
});

// Rotas relacionadas a equipamentos
const equipmentRoutes = require('./routes/equipmentRoutes');
app.use('/api/equipment', equipmentRoutes);

// Rotas relacionadas a reservas
const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservation', reservationRoutes);

// Rotas relacionadas a usuários
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

// Lidar com erros 404 (Rota não encontrada)
app.use((req, res) => {
  res.status(404).send('Endpoint não encontrado.');
});

// Lidar com erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;  // Exporta o app para fins de teste
