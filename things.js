var express = require('express')
var router = express.Router();

router.get('/',(req,res) => {
    res.send('Hello world')
})

router.get('/hello',(req,res) => {
    res.send('Hello hema')
})

router.get('/:id',(req,res) => {
    res.send('The id you specified: '+req.params.id)
})

// router.get('/:name/:id',(req,res) => {
//     res.send('The id you specified is ' +req.params.id ' and name is ' +req.params.name)
// })

router.get('/:id([0-9]{5})',(req,res) => {
    res.send('The id you specified: '+req.params.id)
})

router.get('*',(req,res) => {
    res.send('sorry invalid url')
})



module.exports = router;

