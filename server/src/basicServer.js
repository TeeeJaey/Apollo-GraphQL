import { createServer } from "node:http";

const PORT = 3030;
const server = createServer((req, res) => {
  if ((req.url = "/" && req.method === "GET")) {
    console.log("Hello World");
    res.end("SIMPLE NODE SERVER");
  }
});

server.listen(PORT, () => console.log("SERVER RUNNING ON " + PORT));
