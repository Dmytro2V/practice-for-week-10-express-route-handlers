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

// Get a specific artist's details based on artistId
app.get('/artists/:artistId', (req, res) => {
  let artistId = req.params.artistId;
  let artistByArtistId = getArtistByArtistId(artistId);
  res.status(200).send(artistByArtistId);
})

// Edit a specified artist by artistId
app.put('/artists/:artistId', (req, res) => {
  let artistId = req.params.artistId;
  let artist = req.body;
  let artistByArtistId = editArtistByArtistId(artistId, artist);
  res.status(200).send(artistByArtistId);
})
app.patch('/artists/:artistId', (req, res) => {
  let artistId = req.params.artistId;
  let artist = req.body;
  let artistByArtistId = editArtistByArtistId(artistId, artist);
  res.status(200).send(artistByArtistId);
})

// Delete a specified artist by artistId
app.delete('/artists/:artistId', (req, res) => {
  let artistId = req.params.artistId;  
  deleteArtistByArtistId(artistId);
  let deleteSuccessMessage = {
    "message": "Successfully deleted"
  }
  res.json(deleteSuccessMessage);
})

// 8 Get all albums of a specific artist based on artistId
app.get('/artists/:artistId/albums', (req, res) => {
  let artistId = req.params.artistId;
  let albumsByArtistId = getAlbumsByArtistId(artistId);
  res.send(albumsByArtistId);
})

// 9 Get a specific album's details based on albumId
app.get('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;
  let albumsByAlbumId = getAlbumByAlbumId(albumId);
  res.send(albumsByAlbumId);
})

// 10 Add an album to a specific artist based on artistId
app.post('/artists/:artistId/albums', (req, res) => {
  let artistId = req.params.artistId;
  let data = req.body;
  let newAlbumByArtistId = addAlbumByArtistId(artistId, data);
  res.status(201).send(newAlbumByArtistId);
})

// 11 Edit a specified album by albumId
app.put('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;
  let data = req.body;
  let ret = editAlbumByAlbumId(albumId, data);
  res.status(200).send(ret);
})
app.patch('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;
  let data = req.body;
  let ret = editAlbumByAlbumId(albumId, data);
  res.status(200).send(ret);
})

// 12 Delete a specified album by albumId
app.delete('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;  
  deleteAlbumByAlbumId(albumId);
  let deleteSuccessMessage = {
    "message": "Successfully deleted"
  }
  res.json(deleteSuccessMessage);
})

// 13 Get all albums with names filtered by first letter
app.get('/albums', (req, res) => {
  let startsWith = req.query.startsWith;
  let filteredAlbums = getFilteredAlbums(startsWith);
  res.send(filteredAlbums);
})

// 14 Get all songs of a specific artist based on artistId
app.get('/artists/:artistId/songs', (req, res) => {
  let artistId = req.params.artistId;
  let ret = getSongsByArtistId(artistId);
  res.send(ret);
})

// 15 Get all songs of a specific album based on albumId
app.get('/albums/:albumId/songs', (req, res) => {
  let albumId = req.params.albumId;
  let ret = getSongsByAlbumId(albumId);
  res.send(ret);
})

// 16 Get a specific song's details based on songId
app.get('/songs/:songId', (req, res) => {
  let songId = req.params.songId;
  let ret = getSongBySongId(songId);
  res.send(ret);
})

// 17 Add a song to a specific album based on albumId
app.post('/albums/:albumId/songs', (req, res) => {
  let albumId = req.params.albumId;
  let data = req.body;
  let ret = addSongByAlbumId(albumId, data);
  res.status(201).send(ret);
})

// 18 Edit a specified song by songId
app.put('/songs/:songId', (req, res) => {
  let songId = req.params.songId;
  let data = req.body;
  let ret = editSongBySongId(songId, data);
  res.status(200).send(ret);
})
app.patch('/songs/:songId', (req, res) => {
  let songId = req.params.songId;
  let data = req.body;
  let ret = editSongBySongId(songId, data);
  res.status(200).send(ret);
})

//19  Delete a specified song by songId
app.delete('/songs/:songId', (req, res) => {
  let songId = req.params.songId;  
  deleteSongBySongId(songId);
  let deleteSuccessMessage = {
    "message": "Successfully deleted"
  }
  res.json(deleteSuccessMessage);
})



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}