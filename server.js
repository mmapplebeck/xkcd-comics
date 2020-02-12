const express = require("express");

const ComicsService = require("./services/ComicsService");

const app = express();

app.set("port", process.env.PORT || 3001);

app.get("/comics", (req, res) => {
  ComicsService.getComics()
    .then(comics => {
      res.json(comics);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Server Error");
    });
});

app.listen(app.get("port"), () =>
  console.log(`Listening on port ${app.get("port")}!`)
);
