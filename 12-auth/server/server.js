const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

const mongoUri = 'mongodb+srv://mohitpd:KillerCatapult98@cluster0.udnup.mongodb.net/authApp?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

// Middleware
app.use(express.json());
app.use(cookieParser());
const {authenticate} = require('./middleware/auth');

// Models
const {User} = require('./models/user');

// Routes
app.post('/api/user', (req, res) => {
    const {email, password} = req.body;
    const user = new User({
        email,
        password,
    });
    user.save((err, doc) => {
        if (err) res.status(400).send(err);
        res.status(200).send(doc);
    });
});

app.post('/api/user/login', (req, res) => {
    // 1 Find the user
    User.findOne({email: req.body.email}, (err, user) => {
        if (!user) res.json({message: 'User not found'});

        // 2 compare the string with the hash
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) res.status(400).json({message: 'Bad Password'});
            user.generateToken(() => {
                if (err) res.status(400).send(err);
                res.cookie('auth', user.token).send('Ok');
            });
            // res.status(200).send(isMatch);
        });
        // res.status(200).send(user);
    });
});

app.get('/api/books', authenticate, (req, res) => {
    res.status(200).send(req.user);
    // let token = req.cookies.auth;
    // console.log(token);
    // User.findByToken(token, (err, user) => {
    //     if (err) throw err;
    //     if (!user) return res.status(401).send({message: 'Bad Token'});
    //     res.status(200).send(user);
    // });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Started on Port ${port}`);
});
