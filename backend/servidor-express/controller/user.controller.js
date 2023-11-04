export const create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
        registertime: new Date() // Puedes configurar la fecha de registro aquí
    });

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        } else {
            res.send(data);
        }
    });
};
