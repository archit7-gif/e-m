

const mongoose = require('mongoose')

//schema 
const userSchema= new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'name is required']
    } ,
    email :{
        type : String,
        unique : true ,
        required:[true,'email is required']  
    } , 
    password : {
        type : String,
        unique : true ,
        required:[true,'password is required']
    }
}, 

{timestamps:true}

)


// export

const userModel= mongoose.model('users', userSchema)
module.exports =userModel;