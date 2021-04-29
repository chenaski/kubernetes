const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("BAR: /");
  res.send(`[${new Date().toLocaleTimeString()}]: This is BAR!`);
});

app.get("/who", (req, res) => {
  console.log("BAR: /who");
  res.send("I'm BAR");
});

app.listen("3001", () => {
  console.log("listening port 3001");
});
