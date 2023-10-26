const express = require("express");
const { connectToDb, getDb } = require("./db");
const { Collection } = require("mongodb");

const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection: ${err}`);
  }
});

app.get("/foto", (req, res) => {
  const foto = [];

  db.collection("foto")
    .find()
    .forEach((fotos) => foto.push(fotos))
    .then(() => {
      res.status(200).json(foto);
    });
});

app.get("/video", (req, res) => {
  const video = [];

  db.collection("video")
    .find()
    .forEach((videos) => video.push(videos))
    .then(() => {
      res.status(200).json(video);
    });
});
