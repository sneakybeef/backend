const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const database = require('./routes/db');

const newTask = require('./routes/newTask');
const tasks = require('./routes/allTasks');
const deleteTask = require('./routes/delTask');
const editTask = require('./routes/editTask');

const createDb = require('./users/routes/createDb');
const signup = require('./users/routes/signup');
const signin = require('./users/routes/signin');

app.use(bodyParser.json());
app.use(cors());

app.use(createDb);
app.use('/user', signup);
app.use('/user', signin);

app.use(database);
app.use(editTask);
app.use(tasks);
app.use(newTask);
app.use(deleteTask);

module.exports = app;
