const path = require("path");
const fs = require("fs");

//handel html page 
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
    })
}

// handel extention page 
const handleSearch = (response, endpoint) => {
    const queryEndPoint = endpoint.split('?')[1];
    const { query } = querystring.parse(queryEndPoint);
    const filepath = path.join(__dirname, '.', 'words.txt');
    fs.readFile(filepath, 'utf8', (error, contents) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('<h1>Internal server error.</h1>');
        } else {
            let regs = process.platform === "win32" ? '\r\n' : '\n'
            const wordsArr = contents.split(regs);
            const result = wordsArr.filter((word) => word.startsWith(query)).slice(0, 20)
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(result));
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