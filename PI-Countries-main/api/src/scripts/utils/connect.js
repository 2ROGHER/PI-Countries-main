const { text } = require('express');
const { Client } = require('pg');
const { green }= require('chalk');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "countries",
});

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log(green('Connected...'));
    }
})
module.exports = client;

