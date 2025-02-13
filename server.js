const express = require('express');
const app = express();
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

//Setup safe codes using a .env file
const clientID = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;
const accesToken = process.env.ACCESTOKEN;

//Get the right directory
app.use(express.static(__dirname + '/public'));

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: clientID,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:9000/callback'
});

// Ask the Spotify API to get me the mentioned items in the list below when the get function is called("user-top-read" = "User top 20 tracks")
router.get('/', (req, res, next) => {
    res.redirect(spotifyApi.createAuthorizeURL([
        "user-top-read"
    ]));
})

// Uncomment line 35 - 42 and comment line 44 - 56 to get the acces token
// ######################################################################

// router.get('/callback', (req, res, next) => {
//     console.log('reqquery', req.query)
//     const code = req.query.code
//     spotifyApi.authorizationCodeGrant(code).then((response) => {
//         res.send(JSON.stringify(response))
//         spotifyApi.setAccessToken(accesToken);
//     })
// })

// Set the right acces token in th API
spotifyApi.setAccessToken(accesToken);

// Get query to gett the top 20 from my spotify account
spotifyApi.getMyTopTracks().then(function(data) {
    trackData = data.body.items;
    trackData.forEach(album => {
        console.log("'" + album.name + "' - " +  album.artists[0].name);
        return(trackData);
})})

// Set the right view engine to render .ejs views. (.ejs files are templates using html in this case)
app.set('view engine', 'ejs')
app.set('views', 'view')

// Get function when on the root link/url
app.get('/', onhome);

// Function to render the index.ejs when onhome is called
async function onhome(req, res) {
    res.render('index', { data: trackData })
}

// Check if server is running
app.use('/', router);
app.listen(9000, () => {
    console.log('running');
})