const router = require("express").Router();
const { getTodos, createTodo } = require("./Controllers/Todo");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});
router.get("/todos", getTodos);
router.post("/todos", createTodo);


module.exports = router;
