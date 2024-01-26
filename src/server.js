// server.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); 
const equipmentRoutes = require('./routes/equipmentRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const authMiddleware = require('./middlewares/authMiddleware');



// Conectar ao banco de dados
connectDB();

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('Welcome to the Equipment Reservation API!');
});

app.use('/api/users', userRoutes);
app.use('/api/equipment', authMiddleware, equipmentRoutes);
app.use('/api/reservations', reservationRoutes);


// Configuração do servidor
const PORT = process.env.PORT || 8080;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;  // Exporta o app para fins de teste
