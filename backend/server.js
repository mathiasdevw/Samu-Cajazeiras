const express = require('express');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
app.use(express.json());

// Registra as rotas do usuário em /usuarios
app.use('/usuarios', usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
