if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios").default;
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const url =
  "https://www.pgatour.com/tournaments/2023/masters-tournament/R2023014";

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
