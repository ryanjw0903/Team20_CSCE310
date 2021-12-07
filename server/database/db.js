// databse credintals 
const express = require('express'); //backend server
var mysql = require('mysql2')
const dbConfig = require('./config')

var connection = mysql.createConnection({
    host:  dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    multipleStatements: true
})

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})
  

module.exports = connection