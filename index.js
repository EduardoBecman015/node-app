const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Página Inicial</h1>
                <p>Bem-vindo à minha aplicação Node.js! Versão 2.0</p>
            </body>
        </html>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Sobre</h1>
                <p>Esta aplicação foi criada para a atividade de Node.js.</p>
            </body>
        </html>
    `);
});

app.get('/contato', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Contato</h1>
                <p>Email: aluno@email.com</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});