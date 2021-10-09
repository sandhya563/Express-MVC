const knex = require('../database/dbconnection')

// Get data from DB.
const userget = (req, res) => {
    knex
        .select('*')
        .from('userPost')
        .then((data) => {
            res.json({ data: data });
        })
        .catch((error) => {
            res.json({ message: error });
        })
};
// Post data in DB.
const userpost = (req, res) => {
    var userpost_data = {
        imgurl: req.body.imgurl,
        date: req.body.date,
        captionforimg: req.body.captionforimg
    }
    knex('userPost').insert(userpost_data)
        .then((data) => {
            console.log(data)
            res.json({ data: data })
        })
        .catch((error) => {
            console.log(error)
            res.json({ message: error })
        })
};
// Put the data in DB.
const userupdate = (req, res) => {
    knex.update(
        req.body
    )
        .table('userPost')
        .where('id', req.params.id)
        .then((data) => {
            console.log(data)
            res.json({ data: data })
        })
        .catch((error) => {
            console.log(error)
            res.json({ message: error })
        })
};
// Delete the data from DB.
const userdelete = (req, res) => {
    knex('userPost')
        .where('id', req.params.id)
        .del()
        .then((data) => {
            res.json({ data: data })
        })
        .catch((error) => {
            res.json({ message: error })
        })
}
module.exports = {userget, userpost, userupdate, userdelete}

