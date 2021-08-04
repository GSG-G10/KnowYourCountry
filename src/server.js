require('env2')('.env');
const http = require('http');
const router = require('./router');


const port = process.env.PORT || 8080;
const server = http.createServer(router);
server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server is listining on  http://localhost:${port}`);
});