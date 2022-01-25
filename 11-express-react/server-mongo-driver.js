const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();

const mongoUri = 'mongodb+srv://mohitpd:KillerCatapult98@cluster0.udnup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(mongoUri);

app.get('/api/users', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('myApp');
        const collection = database.collection('users');
        const query = await collection.insertOne({
            name: 'Mohit',
            lastname: 'Prasad',
        });
        res.status(200).json({awesome: 'yes'});
    } catch (error) {
        throw error;
    } finally {
        await client.close();
        console.log('all is done');
    }
});

// MongoClient.connect(mongoUri, {useUnifiedTopology: true}, (err, client) => {
//     if (err) {
//         throw err;
//     }
//     console.log('COnnected to db');
// });

const port = process.env.PORT || 3001;
app.listen(port);
