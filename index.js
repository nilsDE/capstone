const express = require('express');
require('dotenv').config();
const passportConfig = require("./config/passport-config");
const session = require("express-session");
const flash = require("express-flash");
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userController = require('./controllers/userController');
const statementController = require('./controllers/statementController');
const helpers = require('./auth/helpers');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(cors());
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

// routes
app.post("/users", userController.create);
app.post("/users/signin", userController.signIn);
app.post("/users/signout", userController.signOut);
app.post("/statement/create", statementController.create);

app.get("/users/verify", (req, res) => {
  const loggedIn = req.user ? true : false;
  res.json({ msg: loggedIn });
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

