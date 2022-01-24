const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            username: 'Mohit',
        },
        {
            id: 2,
            username: 'Rohan',
        },
    ]);
});

const port = process.env.PORT || 3001;
app.listen(port);
