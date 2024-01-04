// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#
// changes to be made already inputed
export const authEndpoint ="https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3002/";
const redirectUri ="https://spotify-clone-eeb6f.web.app";
// change this to website and on the spotify for dev side
const clientId ="726af0e72aa542b881c4950ff5f4e6c0"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]; 
 export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});

}
 export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
 )}&response_type=token&show_dialog=true`;




