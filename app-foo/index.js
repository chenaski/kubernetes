const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("FOO: /");
  res.send(`[${new Date().toLocaleTimeString()}]: This is FOO!`);
});

app.get("/who", (req, res) => {
  console.log("FOO: /who");
  res.send("I'm FOO");
});

app.listen("3000", () => {
  console.log("listening port 3000");
});
