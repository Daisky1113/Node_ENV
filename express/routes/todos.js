'use strict'
const express = require('express')
const router = express.Router()

const todos = [
  { id: 1, todo: 'foo', done: true },
  { id: 2, todo: 'bar', done: false },
  { id: 3, todo: 'hoge', done: true },
]

router.route('/')
  .get((req, res) => {
    res.json(todos)
  })
  .post((req, res) => {
    const id = todos.length + 1
    const { title } = req.body
    todos.push({ id, title })
    console.log(todos)
  })

module.exports = router