import User from '../dbconect/user.model.js';

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }


const user = new User ({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
})


User.create(user, (err, data) => {
if (err)
    res.status(500).send({
        message: 
            err.message || "Some error occurred while creating the User." 
        });
else res.send(data);
});
};

// Retrieve and return all users from the database.

exports.findAll = (req, res) => {
    const title = req.query.title;

    User.getAll(title, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users."
     });
     else res.send(data);
    })
}
