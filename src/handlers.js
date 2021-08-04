const path = require('path');
const fs = require('fs');
const filterData = require('./filterData');
// handel html page
const handelHtml = (response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (erro, file) => {
    if (erro) {
      response.writeHead(500, { 'content-Type': 'text/html' });
      response.write('<h1>server error</h1>');
      response.end();
    } else {
      response.writeHead(200, { 'content-Type': 'text/html' });
      response.end(file);
    }
  });
};

// handel extention page
const handleExtentiion = (response, endpoint) => {
  const extention = endpoint.split('.')[1];
  const extensionType = {
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-ico',
    png: 'image/png',
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpg',
  };
  const filepath = path.join(__dirname, '..', endpoint);
  fs.readFile(filepath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal server error.</h1>');
    } else {
      response.writeHead(200, { 'content-Type': extensionType[extention] });
      response.end(file);
    }
  });
};
// handle search
const handleSearch = (response, endpoint) => {
  const Searchvalue = endpoint.split('=')[1];
  const filepath = path.join(__dirname, 'Data', 'city.json');
  fs.readFile(filepath, 'utf-8', (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal server error.</h1>');
    } else {
      const requiredData = filterData(Searchvalue, JSON.parse(file));
      response.writeHead(200, { 'content-Type': 'application/javascript' });
      response.end(JSON.stringify(requiredData));
    }
  });
};

// handel erro

const handelError = (response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end('<h1>the page not found <h1>');
};

// export the moduale
module.exports = {
  handelHtml,
  handleExtentiion,
  handleSearch,
  handelError,
};
