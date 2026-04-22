const express = require('express');
const app = express();

app.use(express.json());

/* =============================
   USUARIOS
============================= */

let usuarios = [];

app.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;

    if(!nombre || !email){
        return res.status(400).json({
            mensaje: "nombre y email son obligatorios"
        });
    }

    const usuario = { nombre, email };

    usuarios.push(usuario);

    res.status(201).json({
        mensaje: "Usuario creado correctamente",
        usuario
    });
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});


/* =============================
   PRODUCTOS
============================= */

let productos = [];

app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;

    if(!nombre || !precio){
        return res.status(400).json({
            mensaje: "nombre y precio son obligatorios"
        });
    }

    const producto = {
        id: productos.length + 1,
        nombre,
        precio
    };

    productos.push(producto);

    res.status(201).json({
        mensaje: "Producto creado",
        producto
    });
});

app.get('/productos', (req, res) => {
    res.json(productos);
});


/* =============================
   FACTURAS
============================= */

let facturas = [];

app.post('/facturas', (req, res) => {
    const { usuarioId } = req.body;

    if(!usuarioId){
        return res.status(400).json({
            mensaje: "usuarioId es obligatorio"
        });
    }

    const factura = {
        id: facturas.length + 1,
        usuarioId,
        fecha: new Date()
    };

    facturas.push(factura);

    res.status(201).json({
        mensaje: "Factura creada",
        factura
    });
});

app.get('/facturas', (req, res) => {
    res.json(facturas);
});


/* =============================
   SERVER
============================= */

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});