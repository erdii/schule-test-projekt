const http = require("http");

let server = http.createServer((req, res) => {
	res.end("hello");
	console.log("request occured");
});

server.listen(3000);