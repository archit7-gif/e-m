


// "start": "vite",

const express = require('express')
const cors = require('cors')
const morgan = require ('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

// config dot env
dotenv.config();

// connecting DB
connectDB();

//rest object 
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
// app.get("/" ,( req ,res )=>{res.send( "<h1> helllo from archit </h1>" )});
app.use('/api/v1/user',require('./routes/userRoutes'))

// port 
const PORT = 8080 || process.env.PORT

// listen
app.listen(PORT,()=>{ console.log(`server is running on ${PORT}`)})