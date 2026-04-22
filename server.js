const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let productos = [];
let facturas = [];
let detalleFacturas = [];

/* =============================
USUARIOS
============================= */

app.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;

    if(!nombre || !email){
        return res.status(400).json({
            mensaje: "nombre y email son obligatorios"
        });
    }

    const usuario = {
        id: usuarios.length + 1,
        nombre,
        email
    };

    usuarios.push(usuario);

    res.status(201).json(usuario);
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});


/* =============================
PRODUCTOS
============================= */

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

    res.status(201).json(producto);
});

app.get('/productos', (req, res) => {
    res.json(productos);
});


/* =============================
FACTURAS
============================= */

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

    res.status(201).json(factura);
});

app.get('/facturas', (req, res) => {
    res.json(facturas);
});


/* =============================
DETALLE FACTURA
============================= */

app.post('/detalle-factura', (req, res) => {
    const { facturaId, productoId, cantidad } = req.body;

    if(!facturaId || !productoId || !cantidad){
        return res.status(400).json({
            mensaje: "facturaId, productoId y cantidad son obligatorios"
        });
    }

    const producto = productos.find(p => p.id === productoId);

    if(!producto){
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    const detalle = {
        id: detalleFacturas.length + 1,
        facturaId,
        productoId,
        cantidad,
        subtotal: producto.precio * cantidad
    };

    detalleFacturas.push(detalle);

    res.status(201).json(detalle);
});

app.get('/detalle-factura', (req, res) => {
    res.json(detalleFacturas);
});


/* =============================
SERVER
============================= */

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});