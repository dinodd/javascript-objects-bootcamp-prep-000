
var playlist = { artistName: 'songTitle'};

function updatePlaylist(obj, key, value) {
  return playlist[obj] = value;
}

function removeFromPlaylist(obj,artistName) {
  delete obj.artistName;
  return obj
}
