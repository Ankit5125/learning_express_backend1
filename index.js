const express = require('express')
const app = express()

app.listen(5125)

// middleware
// app.use((req, res, next) =>{
//     console.log('middleware start');
//     next() 
// })

app.get('/', (req, res) => {
    res.send('Connected')
    console.log('✅ Connection Succesful')
})

const userModel = require('./db/models/userModel.js')

// to create a user in db
app.get('/adduser', async (req, res) => {
    const createdUser = await userModel.create({
        name: "Ankit",
        username: "kitu",
        email: "savaliyaankit5125@gmail.com",
        password: "000000",
        m_no: 1234567890
    })

    console.log('USER ADDED : ✅');
    
    res.json(createdUser)
})

// to update a user in db
app.get('/updateuser', async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate( {name : "Ankit"}, {name  : "Dhruv"},{new : true} )

    console.log('USER UPDATED : ✅');
    res.json(updatedUser)
})

// to read all the users in db
app.get('/getusers' , async (req, res) =>{
    const users = await userModel.find({ password : "000000"})

    console.log('USERS READ : ✅');
    res.json(users)
})

// to read a single users in db
app.get('/getuser' , async (req, res) =>{
    const users = await userModel.findOne({ password : "000000"})

    console.log('USER READ : ✅');
    res.json(users)
})
