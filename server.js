const app = require("./app");

const http = require("http");
const fs = require("fs");

const credentials = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

const server = http.createServer(app);

const port = process.env.HTTP_PORT || 4000;

const startApplication = async () => {
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.info(`Server started on ports ${port}`);
  });
};

startApplication();
