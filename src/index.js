const express = require('express');

const session = require('express-session');

// Intializations
const app = express();
const cors = require('cors');
// require('./lib/passport');
app.use(cors());

// Settings
app.set('port', process.env.PORT || 4000);


// app.use('/static', express.static('public'));
app.use(express.static('public'));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});
