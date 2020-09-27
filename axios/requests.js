const apikey = "0166bd03cbfd4f83e8684a9247f91b54";

const requests = {
  topAlbums: `?method=tag.gettopalbums&tag=disco&api_key=${apikey}&format=json`,
  topTracks: `?method=artist.gettopalbums&artist=cher&api_key=${apikey}&format=json`,
};
export default requests;
