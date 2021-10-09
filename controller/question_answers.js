const knex = require('../database/dbconnection')

// Get data from database.
const questionAnswersGet = (req, res) => {
    knex
        .select("*")
        .from("questionAnswers")
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
const questionAnswersInsert = (req, res) => {
    var user = {
        question: req.body.question,
        answer: req.body.answer,
    }
    knex('questionAnswers').insert(user)
        .then((data) => {
            console.log(data);
            res.json({ data: data });
        })
        .catch((error) => {
            res.json({ error: error });
        });
}
// Put data in database.
const questionAnswersPut= (req, res) => {
    knex('questionAnswers')
        .where('questionid', req.params.id)
        .update(req.body)
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
const questionAnswersDelete = (req, res) => {
    knex('questionAnswers')
        .where('questionid', req.params.id)
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

module.exports = {questionAnswersGet, questionAnswersInsert, questionAnswersPut, questionAnswersDelete}