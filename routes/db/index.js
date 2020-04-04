const express = require("express");
const dbFunc = require("../../database/database.js");
console.log(dbFunc);

const router = express.Router();
const database = (req, res) => {
  const db = dbFunc();
 
  db.run(
    "CREATE TABLE tasks(ID INTEGER PRIMARY KEY AUTOINCREMENT,name text,description text,urgency numeric,done boolean)",
    () => {
      db.close();
    }
  );

  console.log("db");
};

router.get("/db", database);

module.exports = router;
