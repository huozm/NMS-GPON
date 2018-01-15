/* eslint-disable */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const hostIp = '127.0.0.1'
const port = 8081

app.post('/checkUser', function (req, res) {
  // console.log(req.body.user)
  if (req.body.user === 'root' && req.body.password === 'public') {
    res.send('true')
  } else {
    res.send('false')
  }
  // res.send('Hello World!')
})

var server = app.listen(port, hostIp, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
