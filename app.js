const express = require('express')
const app = express();
let datetime = new Date();

app.use('/things',(req,res,next) =>{
    console.log('A request received from things: '+datetime)
    next();
})

app.get('/things',(req,res) => {
    res.send('Get method of things is called')
})

app.listen(4000);