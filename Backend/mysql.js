const mysql = require('mysql2')

 const pool =  mysql.createPool({
   /*  "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT, */


    "user" : 'root',
    "password" : '',
    "database" : 'Problemas',
    "host" : 'localhost',
    "port" : 3308,


})

exports.pool = pool; 
