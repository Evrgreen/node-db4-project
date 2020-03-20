const server = require("./api/server.js");
const port = process.env.PORT || 24000;

server.listen(port, () => {
  console.log(
    `\n ${Date(
      Date.now
    ).toString()}\n Server listening on https://localhost:${port} \n`
  );
});
