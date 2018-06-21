

const express = require('express');
// const nunjucks = require('nunjucks');
// const fs = require('fs');
const path = require('path');


let app = express();

// nunjucks.configure({
//   autoescape: true,
//   express: app
// });

// app.set('view engine', 'nunjucks');

app.get('/', (req, res) => {
  // res.sendFile(path(__dirname, 'index.html'))
  // res.sendFile(path() + '/index.html');
  res.sendFile(path.join(__dirname, '../index.html'));
  // res.sendfile('index.html');
});


// app.use(app.) => {
  
// });

// app.get('/contact', () => {


// });


app.listen(9000, () => {
  console.log('hel');
});

