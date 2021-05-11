const express = require("express");
const app = express();

const state = {
  count: 0,
  max: 5,
};

const incrementOrDie = () => {
  if (state.count === 5) process.exit(1);
  state.count++;
};

app.get("/", (req, res) => {
  console.log("FOO: /");

  incrementOrDie();

  res.send(
    `[${new Date().toLocaleTimeString()} | ${process.env.HOSTNAME} | ${
      state.count
    }/${state.max}]: This is FOO!`
  );
});

app.get("/who", (req, res) => {
  console.log("FOO: /who");
  res.send("I'm FOO");
});

app.listen("3000", () => {
  console.log("listening port 3000");
});
