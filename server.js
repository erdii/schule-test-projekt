const http = require("http");

let server = http.createServer((req, res) => {
	res.end("hello");
});

server.listen(3000);