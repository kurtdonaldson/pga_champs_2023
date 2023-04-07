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

  //This is how data will be stored for each player.
  const mastersDataKeys = [
    "name",
    "round1",
    "round2",
    "round3",
    "round4",
    "total",
  ];

  //Each player object will be stored here
  const mastersObjectArray = [];

  //Now using each method to loop through the list of table rows
  $(elemSelector).each((parentIndex, parentElement) => {
    // We have a key index variable set to 0. This is so we can increment the index
    // to allow the key-value pairs to be ordered appropriately.
    let mastersKeyIndex = 0;
    const mastersObject = {};

    let name = $(parentElement).children("td.tl.plyr.Table__TD").text();

    let round1 = $(parentElement).children("tr > td:nth-child(8)").text();

    let round2 = $(parentElement).children("tr > td:nth-child(9)").text();

    let round3 = $(parentElement).children("tr > td:nth-child(10)").text();
    let round4 = $(parentElement).children("tr > td:nth-child(11)").text();
    let total = $(parentElement).children("tr > td:nth-child(12)").text();

    let score = $(parentElement).children("tr > td:nth-child(5)").text();

    console.log(name);
    console.log(round1);
    console.log(round2);
    console.log(round3);
    console.log(round4);
    console.log(total);
    console.log(score);

    //#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td:nth-child(7)
    //#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr:nth-child(10) > td:nth-child(7)

    //3rd child td then a
    //#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td.tl.plyr.Table__TD > a
    //#fittPageContainer > div:nth-child(3) > div > div.PageLayout__Main > section:nth-child(2) > div > div > div > div.Button--group > div.competitors > div > div > div > div.Table__Scroller > table > tbody > tr:nth-child(2) > td.tl.plyr.Table__TD
    // $(parentElement)
    //   .children()
    //   .each((childIndex, childElement) => {
    //     let tableCellValue = $(childElement).text();
    //     // console.log(tableCellValue + " Next Player");
    //   });
    mastersKeyIndex++;
  });

  // $(elemSelector).each((parentIndex, parentElement) => {
  //   //We have a key index variable set to 0. This is so we can increment the index
  //   // to allow the key-value pairs to be ordered appropriately.
  //   let mastersKeyIndex = 0;
  //   const mastersObject = {};
  //   //parent index set to <=9 because we only want top 10 crytpo prices
  //   if (parentIndex <= 88) {
  //     $(parentElement)
  //       .children()
  //       .each((childIndex, childElement) => {
  //         let tableCellValue = $(childElement).text();
  //         // below we are tidying up the name, marketcap and 24hr volume.
  //         //First, we pass in child to cheerio. I used the dev tools to
  //         //see how I could use selectors to target the specific data I wanted
  //         if (mastersKeyIndex === 1) {
  //           tableCellValue = $(
  //             "p:first-child",
  //             $(childElement).html()
  //           ).text();
  //         }
  //         if (mastersKeyIndex === 6) {
  //           tableCellValue = $(
  //             "p span:first-child",
  //             $(childElement).html()
  //           ).text();
  //         }
  //         if (mastersKeyIndex === 7) {
  //           tableCellValue = $(
  //             "div a p:first-child",
  //             $(childElement).html()
  //           ).text();
  //         }

  //         //   Filter out blank space. Will check if tableCellVale is false
  //         if (tableCellValue) {
  //           // console.log(crytoDataArray[cryptoKeyIndex]);
  //           mastersObject[mastersDataKeys[mastersKeyIndex]] = tableCellValue;

  //           //Every time the above function runs, we will increment by 1
  //           mastersKeyIndex++;
  //         }
  //       });

  //     mastersObjectArray.push(mastersObject);
  //   }
  // }
}

mastersData();

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
