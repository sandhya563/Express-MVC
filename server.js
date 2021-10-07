const express = require('express');
const app = express();
const port = 4000;
const router = require('./routers/userdetaile')

// For runig server 
app.use(express.json());
app.use('/', router)

app.listen(port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${port}`);
});











