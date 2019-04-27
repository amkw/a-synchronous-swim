const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    var directions = ['up', 'down', 'left', 'right'];
    var randIndex = Math.floor(Math.random()*4);
    res.write(directions[randIndex]);
  }

  if (req.method === 'POST') {
    // console.log(req._postData, 'reqPostData')
    // res.write(req._postData);
  }

  res.end();
};
