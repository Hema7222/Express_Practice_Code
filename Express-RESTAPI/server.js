const express = require('express')
const bodyParser = require('body-parser')
const data = require('./data')

const app = express();

app.use(bodyParser.json())

app.post('/api/add',(req,res) => {
    const {id,name,author,price,pages} = req.body;
    data[id]={
        id,name,author,price,pages
    }
    res.json(data[id])
})

app.get('/api/:bookid',(req,res) => {
    const id = req.params.bookid;
    res.json(data[id])
})

app.put('/api/update/:bookid',(req,res) => {
    const id = req.params.bookid;
    const {name,author,price,pages} = req.body;
    data[id]={
        id,name,author,price,pages
    }
    res.json(data[id])
})

app.delete('api/delete/:bookid',(req,res) => {
    const id = req.params.bookid;

    delete data[id]
    res.json(data[id])
})

app.listen(3000,() => {
    console.log('server is listening at port 3000')
})