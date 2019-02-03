
const express = require("express");
const hostDB = require('../db/index');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.json());

app.post("/api/getData", async (req, res) => {
  try {
      let host = req.body.hostValue;
      let response = await hostDB.getOutput(host);
      let latencyList = [];
      response.map((latency) => {
        latencyList.push(latency.latency);
      });
      res.json({
          hostValue: host,
          latency: latencyList
        });
      }
  catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      error: "Could not reach host"
    })
  }
})

app.listen(3001);
console.log("Running");

