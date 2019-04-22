/* eslint-disable comma-dangle */
const fs = require('fs');

const bandNameFirst1 = [
  'Rusty',
  'Green',
  'Purple',
  'Orange',
  'Red',
  'Yellow',
  'Blue',
  'Pink',
  'Brown',
  'Black',
  'Indigo',
  'Maroon',
  'Simple',
  'Ugly',
  'Great',
  'Enormous',
  'Gigantic',
  'Tiny',
  'Little',
  'Amazing',
  'Tired',
  'Brainy',
  'Intelligent',
  'Annoying',
  'Prickly',
  'Savage',
  'Destructive',
  'Catastrophic',
  'Myopic',
  'Disastrous',
  'Mild',
  'Hot',
  'Firey',
  'Freezing',
  'Attractive',
  'Bald',
  'Beautiful',
  'Chubby',
  'Clean',
  'Dazzling',
  'Drab',
  'Elegant',
  'fancy',
  'Fit',
  'Flabby',
  'Glamorous',
  'Gorgeous',
  'Handsome',
  'Long',
  'Magnificent',
  'Muscular',
  'Plain',
  'Plump',
  'Quaint',
  'Scruffy',
  'Shapely',
  'Short',
  'Skinny',
  'Stocky',
  'Ugly',
  'Unkempt',
  'Unsightly',
  'Angry',
  'Salty',
  'Tasty',
  'Spicy',
  'Bitter',
  'Sweet',
  'Damp',
  'Elastic',
  'Sad',
  'Happy',
  'Miserable',
  'Awful',
  'God-Awful',
  'Psychotic',
  'Chaotic',
  'Imaginative'
];

const bandNameFirst2 = [
  'The Rusty',
  'The Green',
  'The Purple',
  'The Orange',
  'The Red',
  'The Yellow',
  'The Blue',
  'The Pink',
  'The Brown',
  'The Black',
  'The Indigo',
  'The Maroon',
  'The Simple',
  'The Ugly',
  'The Great',
  'The Enormous',
  'The Gigantic',
  'The Tiny',
  'The Little',
  'The Amazing',
  'The Tired',
  'The Brainy',
  'The Intelligent',
  'The Annoying',
  'The Prickly',
  'The Savage',
  'The Destructive',
  'The Catastrophic',
  'The Myopic',
  'The Disastrous',
  'The Mild',
  'The Hot',
  'The Firey',
  'The Freezing',
  'The Attractive',
  'The Bald',
  'The Beautiful',
  'The Chubby',
  'The Clean',
  'The Dazzling',
  'The Drab',
  'The Elegant',
  'The fancy',
  'The Fit',
  'The Flabby',
  'The Glamorous',
  'The Gorgeous',
  'The Handsome',
  'The Long',
  'The Magnificent',
  'The Muscular',
  'The Plain',
  'The Plump',
  'The Quaint',
  'The Scruffy',
  'The Shapely',
  'The Short',
  'The Skinny',
  'The Stocky',
  'The Ugly',
  'The Unkempt',
  'The Unsightly',
  'The Angry',
  'The Salty',
  'The Tasty',
  'The Spicy',
  'The Bitter',
  'The Sweet',
  'The Damp',
  'The Elastic',
  'The Sad',
  'The Happy',
  'The Miserable',
  'The Awful',
  'The God-Awful',
  'The Psychotic',
  'The Chaotic',
  'The Imaginative'
];

const bandNameSecond = [
  'Tree Stump',
  'Vacuum',
  'Sword',
  'Knife',
  'Kitchen',
  'Stockyard',
  'Junkyard',
  'Vehicle',
  'Tractor',
  'Bedframe',
  'Toy',
  'Sauce',
  'Garden',
  'Galavanting',
  'Platoon',
  'Harpoon',
  'Toaster',
  'Mountain',
  'Lamp',
  'Potato',
  'Pirate'
];

const bandNameThird = [
  'Tricycle-ride',
  'Piano',
  'Elephant',
  'Theory',
  'Bannana',
  'Party',
  'Forest',
  'Spoon',
  'Hammer',
  'Man',
  'Creation',
  'Wire',
  'Bicycle',
  'Unicycle',
  'Garbage',
  'City',
  'Town',
  'Village',
  'Animals',
  'Magazine',
  'Books',
  'Hair',
  'Disease',
  'Factory',
  'Band',
  'Trip',
  'Lane',
  'Drive',
  'Silverware',
  'Restaraunt',
  'Elevator',
  'Escalator',
  'Box',
  'Tricycle-riders',
  'Pianos',
  'Elephants',
  'Bannanas',
  'Spoons',
  'Hammers',
  'Men',
  'Wires',
  'Bicycles',
  'Unicyclists',
  'Garbage Collectors',
  'Animal',
  'Magazines',
  'Drivers',
  'Hunters',
  'Elevators',
  'Escalators',
  'Boxes',
  'Pirates',
  'Ninjas',
  'Lumberjacks',
  'Workers'
];

const randomName = (arr1, arr2, arr3, arr4) => {
  const first1 = arr1[Math.floor(Math.random() * arr1.length)];
  const first2 = arr2[Math.floor(Math.random() * arr2.length)];
  const second = arr3[Math.floor(Math.random() * arr3.length)];
  const third = arr4[Math.floor(Math.random() * arr4.length)];
  const num = Math.floor(Math.random() * 10);
  if (num <= 2) {
    return `${first1} ${second} ${third}`;
  }
  if (num <= 5 && num > 2) {
    return `${first2} ${second} ${third}`;
  }
  if (num === 6 || num === 7) {
    return `${first1} ${third} ${second}`;
  }
  return `${first2} ${third} ${second}`;
};

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
  fs.writeFileSync('./data.csv', `${columnNames.join(',')}\n`);
  for (let j = 0; j < 1000; j += 1) {
    let fakeArtists = '';
    for (let i = 1; i <= 10000; i += 1) {
      let artistName = randomName(
        bandNameFirst1,
        bandNameFirst2,
        bandNameSecond,
        bandNameThird
      );
      let artistGenre = randomGenre();
      let artistPhoto = 'PhotoURL';
      let artist = `${artistName}, ${artistGenre}, ${artistPhoto}`;

      fakeArtists += `${artist}\n`;
    }
    fs.appendFileSync('./data.csv', fakeArtists);
  }
};

createFakeArtists();
