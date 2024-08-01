//import
const Todo = require("../models/todo");

exports.createTodo = async(req,res) =>{
    try{
        //title and desc from body
        const {title,description} = req.body;
        //create tdo object
        const response = await Todo.create({title,description});
        //send res with success flag
        res.status(200).json({
            success:true,
            data:response,
            message: " Entry created Successfully "
        })
    }
    catch(e){
        console.error(e);
        console.log(e);
        res.status(500)
        .json({
            success:false,
            data: "internal server e",
            message: e.message
        })
    }
}