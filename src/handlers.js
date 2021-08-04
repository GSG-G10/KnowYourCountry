const path = require("path");
const fs = require("fs");

//handel html page 
const handelHtml = (response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(path, (erro, file) => {
        if (erro) {
            response.writeHead(500, { 'content-Type': 'text/html' });
            response.write('<h1>server error</h1>')
            response.end();
        } else {
            response.writeHead(200, { 'content-Type': 'text/html' });
            response.end(file);
        }
    })
}

// handel extention page 
const handleExtentiion = (response, endpoint) => {
    const extention = endpoint.split('.')[1];
    const extensionType = {
        css: 'text/css',
        js: 'application/javascript',
        png: 'image/png',
        html: 'text/html',
        jpeg: 'image/jpeg',
        jpg: 'image/jpg',
    };
    const filepath = path.join(__dirname, '..', 'public', );
    fs.readFile(filepath, (error, file) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('<h1>server error.</h1>');
        } else {
            response.writeHead(200, { 'content-Type': extensionType[extention] });
            response.end(file);
        }
    });
};

//handel erro

const handelError = (response) => {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>the page not found <h1>');
}

// export the moduale
module.exports = {
    handelHtml,
    handleExtentiion,
    handelError
};