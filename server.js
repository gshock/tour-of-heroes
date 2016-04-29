var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/api/posts', function (req, res) {
  res.json([
    {
      username: 'gman',
      body: 'node rocks'
    }
  ])
})

app.post('/api/heroes', function (req, res) {
  console.log('req body: ' + req.body);
  res.json(
    {
      "data":
        {
          "id": "42",
          "name": req.body.name
        }
    })
})

app.get('/api/heroes', function (req, res) {
  res.json({
    "data": [{ "id": 11, "name": "Mr. Nice DX" },
      { "id": 12, "name": "Narco DX" },
      { "id": 13, "name": "Bombasto DX" },
      { "id": 14, "name": "Celeritas DX" },
      { "id": 15, "name": "Magneta DX" },
      { "id": 16, "name": "RubberMan DX" },
      { "id": 17, "name": "Dynama DX" },
      { "id": 18, "name": "Dr IQ DX" },
      { "id": 19, "name": "Magma DX" },
      { "id": 20, "name": "Tornado DX" }]
  })
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})

module.exports = app;