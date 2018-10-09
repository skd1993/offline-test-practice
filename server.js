const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .use(express.static('www'))
  .set('view engine', 'ejs')
  .listen(port, "0.0.0.0", function() {
	console.log("Listening on Port 3000");
	});