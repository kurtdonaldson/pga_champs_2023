// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
require("dotenv").config();

const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios").default;
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();


app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'views'));

app.set("view engine", "ejs");


const url = "https://www.espn.com/golf/leaderboard";

async function getMastersData() {
  try {
    //Fetch HTML of page to scrape
    const { data } = await axios.get(url);

    //Load html in cheerio. We parse it the html data
    const $ = cheerio.load(data);

    //Selecting the rows of the players
    const elemSelector =
      "#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr";
//#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr:nth-child(2) > td:nth-child(7)
    //Each player object will be stored here
    const mastersObjectArray = [];

    //Now using each method to loop through the list of table rows
    $(elemSelector).each((parentIndex, parentElement) => {
      const mastersObject = {};

      let nameData = $(parentElement).children("td.tl.plyr.Table__TD").text();

      let round1 = $(parentElement).children("tr > td:nth-child(7)").text();

      let round2 = $(parentElement).children("tr > td:nth-child(8)").text();

      let round3 = $(parentElement).children("tr > td:nth-child(9)").text();
      let round4 = $(parentElement).children("tr > td:nth-child(10)").text();
      // let total = $(parentElement).children("tr > td:nth-child(12)").text();

      let scoreData = $(parentElement).children("tr > td:nth-child(5)").text();


      mastersObject.name = nameData;
      mastersObject.round1 = round1;
      mastersObject.round2 = round2;
      mastersObject.round3 = round3;
      mastersObject.round4 = round4;
      mastersObject.score = scoreData;

      // console.log(round1);
      // console.log(round2);
      // console.log(round3);
      // console.log(round4);

      // console.log(nameData);
      // console.log(scoreData);

      mastersObjectArray.push(mastersObject);
    });

    return mastersObjectArray;
  } catch (error) {
    console.log(error);
  }
}

app.get("/", async (req, res) => {
  try {
    const mastersData = await getMastersData();


    res.render("index", { mastersData });
  } catch (error) {
    console.log(error);
  }
});



app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
