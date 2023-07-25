const Todo = require("../Model/Todo")
const getTodos = (req, res) => {
    res.send("I am the get todos route");
};
const createTodo = (req, res) => {
    const todoData = req.body;
    console.log(todoData,'req')

    if (!todoData || !todoData.title) {
      return res.status(400).json({ error: "Todo title is missing or invalid." });
    }
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });
  
    todo.save((err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    });
  };
  
module.exports = {
    getTodos,
    createTodo
};
