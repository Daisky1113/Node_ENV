'use strict'
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())

app.use(cors({
  origin: 'http://localhost',
  credentials: true,
  optionsSuccessStatus: 200
}))

app.get('/', (req, res) => {
  res.end('Expreesssssss')
})

app.use('/todos', require('./routes/todos'))

app.listen(3000)