const express = require("express");
const router = express.Router();
const TodoRouter = require("./todo.js");

router.use("/todo", TodoRouter);

module.exports = router;
