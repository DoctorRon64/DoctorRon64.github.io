const artistUrl="https://open.spotify.com/artist/7f5Zgnp2spUuuzKplmRkt7?si=hm6ZVRmYTIqn357d_cPwMw",albumsContainer=document.getElementById("albums-container");function extractArtistId(t){const e=t.match(/\/artist\/([a-zA-Z0-9]+)/);return e?e[1]:null}function createEmbedLink(t){return`https://open.spotify.com/embed/album/${t}`}const albumIds=["1A6r6H5mM5U1Kw3ZAnbW8G","3F1J9P3Hqa2WkVxg3lqkMy"];function displayEmbeddedAlbums(){albumIds.forEach((t=>{const e=document.createElement("iframe");e.src=createEmbedLink(t),e.width="300",e.height="380",e.frameBorder="0",e.allow="encrypted-media",albumsContainer.appendChild(e)}))}displayEmbeddedAlbums();//# sourceMappingURL=spotify.js.map