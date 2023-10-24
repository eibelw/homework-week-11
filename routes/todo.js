const express = require("express");
const router = express.Router();
const TodoController = require("../controller/todocontroller");

router.get("/", TodoController.getAll);
router.get('/:id', TodoController.getOne)
router.post('/', TodoController.create)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.delete)

module.exports = router;
