// Authorization token that must have been created previously.
// See: https://developer.spotify.com/documentation/web-api/concepts/authorization
const token: string =
  'BQDxT5GdopD0lty6rwCCXEGyiN5M3YAievKk7GNUGTNP47yN84yJjzgCjAmNi0rW4pgIR9HxlIPlHhJ_DeVhABR5mh7K51f2nVfnohXUg7YD7K3K1-KBP7Sc4KumFuNCMGuOYAzHMPiHaxonvdu3zgbGF6azo52W0ilt_m4pn7iCujSS1jlZCkcmdG7Ugq0LEEFeepQWWT7UlaUz0yqT84D9pw3CdihPDmkZO83rcTsw4oCUoIhcceK0zcMKokVcHR0ka-padkx-W5GArPJDOd9maa_3pIe439ATIELts_8h-P9w4QvD9dT2EQGLSPECkeKt6eR3fPhJqHRS9vTRSYp8bZqTej_OR23o8vo86Bk';

interface Track {
  name: string;
  artists: { name: string }[];
}

async function fetchWebApi(
    endpoint: string, 
    method: string, 
    body?: object) {
  
    const res = await fetch(`https://api.spotify.com/${endpoint}`,{
        headers: {
        Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body),
    });
    return await res.json();
}

async function getTopTracks(): Promise<Track[]> {

  // Endpoint reference: https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    const tracks = await fetchWebApi(
        'v1/me/top/tracks?time_range=short_term&limit=5',
        'GET'
    );
    return tracks.items;
}

export async function printTopTracks() {
  const topTracks = await getTopTracks();
  console.log(
    topTracks?.map(
      ({ name, artists }) =>
        `${name} by ${artists.map((artist) => artist.name).join(', ')}`
    )
  );
}

printTopTracks();
