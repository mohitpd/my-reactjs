const express = require('express');
const fs = require('fs');

let HTML = fs.readFileSync(`${__dirname}/index.html`);

const app = express();

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', (req, res, next) => {
    console.log('Someone made a request - ' + req.url);
    next();
});

app.get('/', (req, res) => {
    res.end(HTML);
});
app.get('/api/:user/:id', (req, res) => {
    // Params
    let id = req.params.id;
    let user = req.params.user;
    res.send(`
    <html lang="en">
        <body>
            <h1 style="background: red">The user id is ${id} and the user name is ${user}</h1>
        </body>
    </html>
    `);
});

app.get('/api/car', (req, res) => {
    // querystring
    let brand = req.query.brand;
    res.send(`
    <html lang="en">
        <body>
            <h1 style="background: blue">The ${brand} car is beautiful.</h1>
        </body>
    </html>
    `);
});

app.listen(3000);
