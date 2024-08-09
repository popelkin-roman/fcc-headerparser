require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', function (req, res) {
  res.json({"ipaddress": req.ip, "language": req.get('Accept-Language'), "software": req.get('User-Agent')});
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
