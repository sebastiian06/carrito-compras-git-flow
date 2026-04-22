const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.status(201).json({
        mensaje: "Usuario creado",
        usuario: usuario
    });
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});