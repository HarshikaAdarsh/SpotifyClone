import axios from 'axios';

export function fetchSongs(id) {
  const query = `{
    getSongs(playlistId: ${id}) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }`;

  return axios({
    url: 'https://api.ss.dev/resource/api',
    method: 'POST',
    data: { query },
  });
}
