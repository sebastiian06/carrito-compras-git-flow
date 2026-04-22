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