
var playlist = { artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(obj,artistName) {
  delete obj.artistName;
  return obj
}
