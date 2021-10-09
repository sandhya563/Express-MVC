const knex = require('../database/dbconnection')

// Get data from database.
const userGet = (req, res) => {
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
// Insert data in database.
const userPost = (req, res) => {
    var user_data = {
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password
    }
    knex('userDetailes').insert(user_data)
        .then((data) => {
            console.log(data);
            res.json({ data: data });
        })
        .catch((error) => {
            res.json({ error: error });
        });
}
// Put data in database.
const userUpdate = (req, res) => {
    knex.update(
        req.body
    )
        .table('userDetailes')
        .where('id', req.params.id)
        .then((data) => {
            console.log(data)
            res.json({ data: data });
        })
        .catch((error) => {
            console.log(error)
            res.json({ error: error });

        })
}
// Delete data from database.
const userDelete = (req, res) => {
    knex('userDetailes')
        .where('id', req.params.id)
        .del()
        .then((data) => {
            console.log(data)

            res.json({ data: data });
        })
        .catch((error) => {
            console.log(error)
            res.json({ error: error });

        })
}

module.exports = { userGet, userPost, userUpdate, userDelete }