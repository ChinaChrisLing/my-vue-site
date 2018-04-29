'use strict'
const express = require('express')
const open = require('open')
const path = require('path')
const cowsay = require('cowsay')
const app = express()
const port = 9001
const url = path.resolve('./dist')

app.use(express.static(url))

app.get('/*', (req, res) => {
  res.sendFile(path.join(url, 'index.html'))
})

app.listen(port, () => {
  console.log(cowsay.say({
    text: `your server was running success at port ${port}`,
    e: "oO",
    T: "U "
  }));
  open(`http://127.0.0.1:${port}`)
})
