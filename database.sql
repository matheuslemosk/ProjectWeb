-- Execute este script no banco MySQL do Aiven

CREATE TABLE IF NOT EXISTS itens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  categoria VARCHAR(50),
  local_encontrado VARCHAR(100),
  data_encontrado DATE,
  status VARCHAR(20) DEFAULT 'Aguardando'
);

INSERT INTO itens (nome, descricao, categoria, local_encontrado, data_encontrado, status) VALUES
('Garrafa térmica azul', 'Garrafa de 500ml com adesivos', 'Utensílios', 'Laboratório 3', '2026-10-01', 'Aguardando'),
('Casaco preto', 'Moletom preto tamanho M', 'Roupas', 'Quadra', '2026-10-02', 'Aguardando'),
('Carregador de celular', 'Carregador USB-C branco', 'Eletrônicos', 'Biblioteca', '2026-10-03', 'Devolvido'),
('Estojo vermelho', 'Estojo com canetas e lápis', 'Material escolar', 'Sala 12', '2026-10-05', 'Aguardando');
