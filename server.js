const express = require('express');
const app = express();
const port = 4000;

const router1 = require('./routers/userdetaile')
const router2 = require('./routers/user_post')
const router3 = require('./routers/question_anwers')


// For runig server 
app.use(express.json());
app.use('/', router1)
app.use('/', router2)
app.use('/', router3)

app.listen(port,() => {
    console.log(`SERVER IS RUNNING AT PORT ${port}`);
});











