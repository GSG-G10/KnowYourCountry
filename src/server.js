require('env2')('.env');
const http = require('http');
const router = require('./router')

const Localport = 6060;
const port = process.env.port || Localport;
const server = http.createServer(router);
server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server is listining on  http://localhost:${port}`);
});