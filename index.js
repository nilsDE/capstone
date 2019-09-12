const express = require('express');
require('dotenv').config();
const passportConfig = require("./config/passport-config");
const session = require("express-session");
const flash = require("express-flash");
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Create the server
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})
app.use(morgan('dev'));
app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.cookieSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1.21e+9 }
}));
app.use(flash());
passportConfig.init(app);

app.use((req,res,next) => {
  res.locals.currentUser = req.user;
  next();
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

