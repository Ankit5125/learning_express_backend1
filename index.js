// const kitu = require("./second")
// const myosFile = require('./OS')

// console.log("hello world! ", kitu );
// // console.log(myosFile.freeMemory)
// console.log(myosFile.homeDirectory);
// console.log(myosFile.hostName);
// console.log(myosFile.platformName);
// console.log(myosFile.osName);

const express = require('express')
const app = express()

app.listen(5125)

app.use((req, res, next) =>{
    console.log('middleware start');
    next()
    console.log('middleware end');
    
})

app.get('/greet/:name', (req, res) => {
    res.send(`Hello ${req.params.name }`)
})

app.get('/sum/:num1/:num2' , (req, res) => {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var sum = Number.parseInt(num1) + Number.parseInt(num2);
    
    res.send(`${num1} + ${num2} = ${sum}`)
})

app.get('/', (req,res) => {
    console.log('get');
    res.send("<b>good</b>")
})