const url = require('../constant')
const mongoose = require('mongoose')
mongoose.connect(url).then(() =>{
    console.log('MongoDB Connection : ✅');
}).catch((e) =>{
        console.log('MongoDB Connection : ❌\nMessage = ', e);    
})

const userSchema = mongoose.Schema({
    name : String, 
    username : String,
    email : String, 
    password : String,
    m_no : Number
})

module.exports = mongoose.model('user', userSchema)