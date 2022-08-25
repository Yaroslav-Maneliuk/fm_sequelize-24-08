const express = require("express");
const router = require("./router.js");

const app = express();
app.use(express.json());
app.use("/api", router);
app.use((error, req, res, next)=>{
  console.log(error.message)
})

module.exports = app;
