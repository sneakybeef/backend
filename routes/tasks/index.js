const express = require("express");
const dbFunc = require("../../database/database.js");
const router = express.Router();

const getTask = (req, res) => {
  const db = dbFunc();
  const { name } = req.params;
  console.log(name);
 const respArray = [];
  db.serialize(() => {
    db.each(
      "SELECT * FROM games where name=luca",
      (err, row) => {
        respArray.push(row);
      },
      (err) => {
        if (err) {
          res.send("error getting games");
        }
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(respArray));
      },
    );
  });  console.log(respArray);
};


router.get("/tasks/:name", getTask);

module.exports = router;
