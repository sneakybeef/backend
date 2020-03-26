const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const newTask = require("./routes/newTask");
const tasks = require("./routes/allTasks");

const database = require("./routes/db");

app.use(bodyParser.json());
app.use(cors());

app.use(database);
app.use(tasks);
app.use(newTask);

module.exports = app;
