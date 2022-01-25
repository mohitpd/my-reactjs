const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const mongoUri = 'mongodb+srv://mohitpd:KillerCatapult98@cluster0.udnup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri);

////////////////////////////

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean,
});

const Car = mongoose.model('Car', carSchema);

///////////////////////////

app.post('/api/addcar', (req, res) => {
    console.log(req.body);
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        avail: req.body.avail,
    });
    addCar.save((err, doc) => {
        if (err) return console.log(err);
        console.log(doc);
    });
});

app.get('/api/getcars', (req, res) => {
    Car.find((err, doc) => {
        if (err) return console.log(err);
        res.json(doc);
    });
});

const port = process.env.PORT || 3001;
app.listen(port);
