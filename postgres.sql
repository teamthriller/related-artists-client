DROP DATABASE IF EXISTS related_artists;

CREATE DATABASE related_artists;

\c related_artists

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR(50) NOT NULL
);

CREATE TABLE artists (
  artist_id SERIAL,
  genre_id INTEGER NOT NULL,
  artist_name VARCHAR(50) NOT NULL,
  artist_image TEXT NOT NULL,
  PRIMARY KEY (artist_id)
);

-- CREATE TABLE artists (
--   artist_id SERIAL PRIMARY KEY,
--   artist_name VARCHAR(50) NOT NULL,
--   artist_genre VARCHAR(50) NOT NULL,
--   artist_photo TEXT NOT NULL
-- );

INSERT INTO genres (genre_name) 
VAlUES 
('Rock'),
('Alternative'),
('Classical'),
('Hip-Hop'),
('EDM'),
('Metal'),
('Hardcore'),
('Punk'),
('Ska'),
('Reggae'),
('R&B'),
('Country'),
('Jazz'),
('Emo'),
('Indie'),
('Musical Theatre'),
('Opera'),
('Pop');

-- INSERT INTO artists (genre_id, artist_name, artist_image)
-- VALUES
-- ('1', 'RockPaperScissors', 'https://yoyoyoyo'),
-- ('3', 'Holy Spam', 'https://yoyoyoyo'),
-- ('2', 'Crap Dragons', 'https://yoyoyoyo'),
-- ('1', 'The Measles', 'https://yoyoyoyo');

COPY artists(genre_id, artist_name, artist_image)
FROM '/Users/J-radical/Desktop/Immersive/related-artists-client/sdc_sql/data.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE artists
ADD FOREIGN KEY (genre_id) REFERENCES genres (id);

CREATE INDEX index_genre ON artists (genre_id);
CREATE INDEX index_artist ON artists (artist_id);
