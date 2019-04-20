const express = require('express');
const path = require('path');
const db = require('./queries.js');

const app = express();
const port = 5432;

app.use(express.static(path.join(__dirname, '/../../public')));

app.get('/artists', db.getArtists);
// app.get('/artists/:id', db.getArtistById);
// app.post('/artists', db.createArtist);
// app.put('/artists/:id', db.updateArtist);
// app.delete('/artists/:id', db.deleteArtist);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
