const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

require('dotenv').config();
const clientID = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;
const accesToken = process.env.ACCESTOKEN;

app.use(express.static(__dirname + '/public'));

var SpotifyWebApi = require('spotify-web-api-node');

console.log(accesToken);
console.log(clientID);
console.log(clientSecret);

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: clientID,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:9000/callback'
});

router.get('/', (req, res, next) => {
    res.redirect(spotifyApi.createAuthorizeURL([
        "user-top-read"
    ]));
})

// router.get('/callback', (req, res, next) => {
//     console.log('reqquery', req.query)
//     const code = req.query.code
//     spotifyApi.authorizationCodeGrant(code).then((response) => {
//         res.send(JSON.stringify(response))
//         spotifyApi.setAccessToken(accesToken);
//     })
// })

spotifyApi.setAccessToken(accesToken);


spotifyApi.getMyTopTracks().then(function(data) {
    trackData = data.body.items;
    trackData.forEach(album => {
        console.log("'" + album.name + "' - " +  album.artists[0].name);
        return(trackData);
})})

app.set('view engine', 'ejs')
app.set('views', 'view')

app.get('/', onhome);

async function onhome(req, res) {
    res.render('index', { data: trackData })
}

app.use('/', router);
app.listen(9000, () => {
    console.log('running');
})