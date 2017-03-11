"use strict";

var mysql = require('mysql');


/** Create Connection Object **/
var connection = mysql.createConnection({
  host: '104.196.142.35',
  port: 3306,
  user: 'root',
  password: '',
  database: 'gilbandele'
});

/*var connection = mysql.createConnection({
  host: '138.68.51.129',
  port: 3306,
  user: 'appuser',
  password: 'APP_pass1',
  database: 'cassydev'
});
*/
module.exports = connection;