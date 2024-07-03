const express = require('express');
const app = express();

const pug = require('pug')

app.set('view engine','pug')

app.get('/',(req,res) => {
    res.render('index',
    {title:'pug with express',message:'hello from HD'})
})

app.listen(3000)