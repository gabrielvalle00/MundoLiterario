const loja = (req, res) => {
    res.render('loja');
    const express = require('express');
    const exphbs = require('express-handlebars');
    const fs = require('fs');
    const path = require('path');
    
    const app = express();
    const port = 3000;
    
    // Configuração do Handlebars
    app.engine('handlebars', exphbs());
    app.set('view engine', 'handlebars');
    
    // Middleware para servir arquivos estáticos
    app.use(express.static('public'));
    
    // Rota para renderizar a página inicial
    app.get('/loja', (req, res) => {
      // Leitura do arquivo JSON
      fs.readFile('db.cadastroprodutos.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo JSON:', err);
          res.status(500).json({ error: 'Erro ao ler o arquivo JSON' });
          return;
        }
    
        // Parse dos dados do JSON
        const produtos = JSON.parse(data).produtos;
    
        // Renderização da página Handlebars com os dados
        res.render('loja', { produtos });
      });
    });
    
    // Inicialização do servidor
    app.listen(port, () => {
      console.log(`Servidor está rodando em http://localhost:${port}`);
    });
    

};

module.exports = { loja }