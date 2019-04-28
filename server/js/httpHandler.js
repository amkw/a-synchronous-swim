const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const image = require('../spec/water-lg.jpg')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'OPTION') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'GET') {
    var data = {}
    var directions = ['up', 'down', 'left', 'right'];
    var randIndex = Math.floor(Math.random()*4);
    data.directions = directions[randIndex];
    data.image = 
    res.write(data);
  } else if (req.method === 'POST') {
    fs.readFile(module.exports.backgroundImageFile, (err, results) => {
      if(err) {
        res.writeHead(400, headers);
        res.end();
      } else {
        res.writeHead(200, headers);
        
      }
    });
  }

  // if (req.method === 'POST') {
  //   //set image to background imageFile to equal data
  //   // console.log(req._postData, 'reqPostData')
  //   // res.write(req._postData);
  //   backgroundImageFile = req.data;
  //   res.write()
  // }

  res.end();
};
