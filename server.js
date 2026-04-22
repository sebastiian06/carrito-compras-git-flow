let productos = [];

app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;

    if(!nombre || !precio){
        return res.status(400).json({
            mensaje: "nombre y precio son obligatorios"
        });
    }

    const producto = { nombre, precio };

    productos.push(producto);

    res.status(201).json({
        mensaje: "Producto creado",
        producto
    });
});

app.get('/productos', (req, res) => {
    res.json(productos);
});