const knex = require('../connection/database')

users = (req, res) => {
    knex
        .select("*")
        .from("userDetailes")
        .then((data) => {
            console.log(data);
            res.json({ data: data });
        })
        .catch((er) => {
            console.log(er);
            res.json({ message: er });
        });
};

userinfo = (req, res) => {
    const user_data = {
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password
    }
    knex('userDetailes').insert(user_data).then((data) => {
        console.log(data)
        res.send(data)
    })
    .catch((error) => {
        res.send(error)
    })
};
module.exports = { users, userinfo }