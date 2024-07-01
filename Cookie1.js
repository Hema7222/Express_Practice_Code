const express = require('express')
let cookie = require('cookie-parser')

const app = express();
app.use(cookie())

app.get('/cookieset',(req,res) => {
    res.cookie('cookie-name', 'cookie-value')
    res.cookie('company', 'Imarticus')
    res.cookie('name', 'hema')

    res.status(200).send('cookie is set')
})

app.get('/cookieget',(req,res) => {
    res.status(200).send(req.cookies)
})

app.get('/',(req,res) => {
    res.send('welcome to imarticus learning')
})

app.listen(8001);