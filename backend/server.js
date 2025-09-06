const express = require('express');
const cors = require('cors'); // 🚨 importa cors
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();

app.use(cors()); // 🚨 habilita CORS
app.use(express.json());

app.use('/usuarios', usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
