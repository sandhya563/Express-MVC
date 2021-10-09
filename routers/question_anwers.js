const express = require('express');
const router = express.Router();
const {questionAnswersGet, questionAnswersInsert, questionAnswersPut, questionAnswersDelete} = require('../controller/question_answers');

// The following routers are for the question answers table.
router.get('/question-answers-data',questionAnswersGet);
router.post('/question-answers', questionAnswersInsert);
router.put('/question-answers-edit/:id', questionAnswersPut);
router.delete('/question-answers-delete/:id', questionAnswersDelete);

module.exports = router