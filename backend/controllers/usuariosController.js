const db = require('../config/db');

exports.listarUsuarios = (req, res) => {
  db.all('SELECT * FROM usuarios', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

exports.criarUsuario = (req, res) => {
  const { nome_completo, login, senha, cargo } = req.body;

  if (!nome_completo || !login || !senha || !cargo) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  const query = `INSERT INTO usuarios (nome_completo, login, senha, cargo) VALUES (?, ?, ?, ?)`;
  const params = [nome_completo, login, senha, cargo];

  db.run(query, params, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Usuário criado com sucesso', id: this.lastID });
  });
};

exports.autenticarUsuario = (req, res) => {
  const { login, senha } = req.body;

  if (!login || !senha) {
    return res.status(400).json({ error: 'Login e senha são obrigatórios.' });
  }

  const query = `SELECT * FROM usuarios WHERE login = ? AND senha = ?`;
  const params = [login, senha];

  db.get(query, params, (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      // Usuário não encontrado ou senha incorreta
      return res.status(401).json({ error: 'Login ou senha inválidos.' });
    }

    // Sucesso: retorna dados do usuário (pode remover senha antes)
    const { senha, ...usuarioSemSenha } = row;
    res.json({ message: 'Autenticado com sucesso!', usuario: usuarioSemSenha });
  });
};

