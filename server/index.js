const path = require('path');
const express = require('express');
const cors = require('cors');

const PORT = 31415;

var app = express();
app.use(cors());

app.use(express.json());

app.use(require('./routes/profile'));
app.use(require('./routes/tweet'));
app.use(require('./routes/feed'));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const server = app.listen(PORT, function() {
  console.info('🌍 Listening on port ' + server.address().port);
});
