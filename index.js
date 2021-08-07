var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/test', (req, res) => {
  res.json({"status": "ok", "body": "test api output"});
});