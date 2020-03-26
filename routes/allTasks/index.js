const express = require("express");
const dbFunc = require("../../database/database.js");
const router = express.Router();

const tasks = (req, res) => {
    const db = dbFunc();

    let respArray = [];
    
    db.serialize(() => {
      db.each(
        "SELECT * FROM tasks order by urgency asc",
        (err, row) => {
          respArray.push(row);
        },
        (err) => {
          if (err) {
            res.send("error getting games");
          }
          
          res.send(JSON.stringify(respArray));
        },
      );
    });
  
      
  };
  router.get("/tasks", tasks);

module.exports = router;
