const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());

const users = require('./routes/api/users');
const articles = require('./routes/api/articles');
const {checkToken} = require('./middleware/auth');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);

// Middleware
app.use(express.json());
app.use(checkToken);
app.use('/api/users', users);
app.use('/api/articles', articles);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
