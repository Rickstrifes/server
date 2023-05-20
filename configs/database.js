const mysql = require('mysql');
const util = require('util');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: 'containers-us-west-135.railway.app',
  user: 'root',
  password: 'TvHw47w2nQF20RrlIRRN',
  database: 'railway',
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected');
});

module.exports = connection;
