const faker = require('faker');
const fs = require('fs');

const randomGenre = () => {
  const genres = [
    'Rock',
    'Alternative',
    'Classical',
    'Hip-Hop',
    'EDM',
    'Metal',
    'Hardcore',
    'Punk',
    'Ska',
    'Reggae',
    'R&B',
    'Country',
    'Jazz',
    'Emo',
    'Indie',
    'Musical Theatre',
    'Opera',
    'Pop'
  ];

  return genres[Math.floor(Math.random() * genres.length)];
};
const columnNames = ['artist_name', 'artist_genre', 'artist_photo'];

const createFakeArtists = () => {
  fs.writeFileSync('./data.csv', columnNames.join(','));
  for (let j = 0; j < 1000; j += 1) {
    let fakeArtists = '\n';
    for (let i = 1; i <= 10000; i += 1) {
      let artistName = faker.name.firstName();
      let artistGenre = randomGenre();
      let artistPhoto = 'PhotoURL';
      let artist = ` ${artistName}, ${artistGenre}, ${artistPhoto}`;

      fakeArtists += `${artist}\n`;
    }
    fs.appendFileSync('./data.csv', fakeArtists);
  }
};

createFakeArtists();
