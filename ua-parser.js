var http = require('http');
var parser = require('ua-parser-js');
 
const server = http.createServer();
server.listen(4000);

console.log("Listening on port 4000");

server.on('request', (req, res) => {
    console.log("Incoming request");
    // get user-agent header
    var ua = parser(req.headers['user-agent']);
    // write the result as response
    res.end(JSON.stringify(ua, null, '  '));
});

