const express = require("express");
const router = express.Router();
const {createTodo} = require("../controllers/createTodo");
const { ModifiedPathsSnapshot } = require("mongoose");
router.post("/createTodo" , createTodo);
module.exports = router;