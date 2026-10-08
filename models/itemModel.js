const conexao = require('../config/db');

// Busca todos os itens (mais recentes primeiro)
async function listarTodos() {
  const [linhas] = await conexao.query('SELECT * FROM itens ORDER BY data_encontrado DESC');
  return linhas;
}

// Busca um item pelo id
async function buscarPorId(id) {
  const [linhas] = await conexao.query('SELECT * FROM itens WHERE id = ?', [id]);
  return linhas[0];
}

module.exports = { listarTodos, buscarPorId };
