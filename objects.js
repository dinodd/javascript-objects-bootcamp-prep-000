
var playlist = { artistName: 'songTitle'};

function updatePlaylist(obj, key, value) {
  return playlist[obj] = value;
}

function removeFromPlaylist(obj,key) {
  delete obj.key;
  return obj
}
