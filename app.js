const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const database = require('./routes/db');

const newTask = require('./routes/newTask');
const tasks = require('./routes/allTasks');
const deleteTask = require('./routes/delTask');
const editTask = require('./routes/editTask');

const createDb = require('./users/routes/createDb');
const register = require('./users/routes/register');
const login = require('./users/routes/login');
const logout = require('./users/routes/logout');

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
	allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
};

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(createDb);
app.use('/user', register);
app.use('/user', login);
app.use('/user', logout);

app.use(database);
app.use(editTask);
app.use(tasks);
app.use(newTask);
app.use(deleteTask);

module.exports = app;
