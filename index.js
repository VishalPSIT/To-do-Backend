
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware for parsing json req body
app.use(express.json());

//routes
const todoRoutes = require('./routes/todo');
//mount the todo apis routes
app.use('/api/v1',todoRoutes);

app.listen(PORT , () => {
    console.log(`Server started at ${PORT}`)
})

const dbConnect = require('./config/database');
dbConnect();

//default route

app.get('/' , (req,res)=>{

    res.send(`<h1>hello</h1>`);
    
})