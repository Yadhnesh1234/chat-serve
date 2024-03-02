const express = require('express');
const connect_db = require('./src/db')
require('dotenv').config();

const app = express();

//Create Database Connectivity with Database
connect_db()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
