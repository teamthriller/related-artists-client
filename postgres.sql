DROP DATABASE IF EXISTS related_artists;

CREATE DATABASE related_artists;

\c related_artists

-- CREATE TABLE genres (
--   id SERIAL PRIMARY KEY,
--   genre_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE artists (
--   artist_id SERIAL,
--   genre_id INTEGER REFERENCES genres(id),
--   artist_name VARCHAR(50) NOT NULL,
--   photo_url TEXT NOT NULL,
--   PRIMARY KEY (artist_id, genre_id)
-- );

CREATE TABLE artists (
  artist_id SERIAL PRIMARY KEY,
  artist_name VARCHAR(50) NOT NULL,
  artist_genre VARCHAR(50) NOT NULL,
  artist_photo TEXT NOT NULL
);

-- INSERT INTO genres (genre_name) 
-- VAlUES 
-- ('Rock'),
-- ('Pop'),
-- ('Country'),
-- ('Hip-Hop'),
-- ('Rock');

-- INSERT INTO artists (genre_id, artist_name, photo_url)
-- VALUES
-- ('1', 'RockPaperScissors', 'https://yoyoyoyo'),
-- ('3', 'Holy Spam', 'https://yoyoyoyo'),
-- ('2', 'Crap Dragons', 'https://yoyoyoyo'),
-- ('1', 'The Measles', 'https://yoyoyoyo');

COPY artists(artist_name, artist_genre, artist_photo)
FROM '/Users/J-radical/Desktop/Immersive/related-artists-client/SDC/data.csv' DELIMITER ',' CSV HEADER;