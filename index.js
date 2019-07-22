const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const md5 = require('md5');
global.database = database;
global.md5 = md5;
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.disable('x-powered-by');
app.use(cors());
const port = 5000;
require('./routes')(app);


app.listen(port, () => console.log(`App listening on this url:  http://localhost:${port}!`))