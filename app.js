const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000;
const userController = require('./controllers/users');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
mongoose.connection.on('error', err => {
  console.log(err);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

userController(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
