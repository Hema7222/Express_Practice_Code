const express = require('express')
const cookie = require('cookie-parser')
const session = require('express-session')

const app = express()

app.use(cookie())
app.use(session({secret:'Its a secret session'}))

app.get('/',(req,res) => {
    if(req.session.page_views){
        req.session.page_views++;
        res.send('You visited the page: '+req.session.page_views)
    }
    else{
        req.session.page_views=1
        res.send('welcome to this page for the first time')
    }
})

app.listen(3000)