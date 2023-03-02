// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});
//Get all the artists
app.get('/artists', (req, res) => {
  res.send(getAllArtists());
})
//Add an artist
app.post('/artists', (req, res) => {
  let newArtist = addArtist(req.body);
  res.status(201).send(newArtist);
})

//Get the latest artist added
app.get('/artists/latest', (req, res) => {
  let latestArtist = getLatestArtist();
  res.status(200).send(latestArtist);
})

//Get all albums of the latest artist
app.get('/artists/latest/albums', (req, res) => {
  let latestArtistAlbums = getAlbumsForLatestArtist();
  res.status(200).send(latestArtistAlbums);
})



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}