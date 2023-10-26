const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const URI = process.env.DB_KEY;

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URI)
      .then((client) => {
        console.log("Connected to MongoDB");
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
