const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });

  if (req.url == "/home") {
    res.end("<h1>Welcome Home</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>Welcome to About Us</h1>");
  } else if (req.url === "/node") {
    res.end("<h1>Welcome to my Node Js project</h1>");
  } else {
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, () => {
  console.log("server started");
});
