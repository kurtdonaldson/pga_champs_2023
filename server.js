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

const url = "https://www.espn.com/golf/leaderboard";

async function mastersData() {
  //Fetch HTML of page to scrape
  const { data } = await axios.get(url);

  //Load html in cheerio. We parse it the html data
  const $ = cheerio.load(data);

  //Selecting the rows of the players
  const elemSelector =
    "#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr";

  //Each player object will be stored here
  const mastersObjectArray = [];

  //Now using each method to loop through the list of table rows
  $(elemSelector).each((parentIndex, parentElement) => {
    const mastersObject = {};

    let name = $(parentElement).children("td.tl.plyr.Table__TD").text();

    // let round1 = $(parentElement).children("tr > td:nth-child(8)").text();

    // let round2 = $(parentElement).children("tr > td:nth-child(9)").text();

    // let round3 = $(parentElement).children("tr > td:nth-child(10)").text();
    // let round4 = $(parentElement).children("tr > td:nth-child(11)").text();
    // let total = $(parentElement).children("tr > td:nth-child(12)").text();

    let score = $(parentElement).children("tr > td:nth-child(5)").text();

    mastersObject = { name: score };

    // console.log(name);
    // console.log(score);

    mastersObjectArray.push(mastersObject);
  });

  console.log(mastersObjectArray);

  return mastersObjectArray;
}

// mastersData();

// for (i = 0; i < mastersObject.length; i++) {
//   console.log(mastersObject(i));
// }

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
