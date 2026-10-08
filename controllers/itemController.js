const itemModel = require('../models/itemModel');

// Página inicial: lista os itens reportados
async function home(req, res) {
  try {
    const itens = await itemModel.listarTodos();
    res.render('home', { itens });
  } catch (erro) {
    console.log(erro);
    res.send('Erro ao buscar os itens no banco de dados.');
  }
}

// Página de detalhes de um item
async function detalhes(req, res) {
  try {
    const item = await itemModel.buscarPorId(req.params.id);
    if (!item) {
      return res.status(404).render('404');
    }
    res.render('detalhes', { item });
  } catch (erro) {
    console.log(erro);
    res.send('Erro ao buscar o item no banco de dados.');
  }
}

// Página sobre
function sobre(req, res) {
  res.render('sobre');
}

module.exports = { home, detalhes, sobre };
