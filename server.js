const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .use(express.static('www'))
  .set('view engine', 'ejs');
  http.createServer(onRequest).listen(process.env.PORT || 6000)