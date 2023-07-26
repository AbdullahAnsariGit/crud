const Todo = require("../Model/Todo")
const getTodos = async (req, res) => {
    const data =  await Todo.find()
    res.send({ total : data.length , data : data });
};
const createTodo = async (req, res) => {
  
  try{
      const data = {
         title: req.body.title,
         description: req.body.description,
          completed: req.body.completed,
      }
    
      const newdata = await Todo.create(data)
    
      res.status(201).send({ message: "data created" , data : newdata })

    }catch(err){
      res.status(404).send({ message: "data not created" })
    }

};
  

module.exports = {
    getTodos,
    createTodo
};
