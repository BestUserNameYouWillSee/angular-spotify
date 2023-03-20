







var client_id = 'fe01d85284704c19b338deb1e735f5b0';
var redirect_uri = 'http://localhost:4200/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      code_challenge_method: S256,
      code_challenge: efb3566df2194a6aac9bddf000968aa7
    }));
});
