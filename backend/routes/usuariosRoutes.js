const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.listarUsuarios);
router.post('/', usuariosController.criarUsuario);
router.post('/login', usuariosController.autenticarUsuario);


module.exports = router;
