const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
