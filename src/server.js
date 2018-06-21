





//look at express.js for simplified 

var http = require('http');
var fs = require('fs'); //needs to go to file system ; THEN we can grab the content


var reqestHandler = function (request, response) {
  if (request.url.indexOf('contact') >= 0) {
    // var a = fs.readFileSync('./index.html');
    // response.end(a);
    response.end(fs.readFileSync('contact.html'));
  } else {
    response.end(fs.readFileSync('index.html'));
  }
  // response.send('helo nod s');
  // response.write('../index.html');
  // response.end('<span>aasd</span>');
  // var a = fs.readFileSync('./index.html');
  // response.end(a);
}
var server = http.createServer(reqestHandler);

server.listen(9000, () => {
  console.log('server is live');
});






// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(9000); //the server object listens on port 8080

