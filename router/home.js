const express = require("express");
const Parser = require("rss-parser");

const Router = express.Router();

module.exports = Router;

const FEED_LIST = [
  "https://sporza.be/nl.rss.xml",
  "http://feeds.nieuwsblad.be/nieuws/snelnieuws",
  "https://www.vrt.be/vrtnws/nl.rss.headlines.xml",
  "https://www.wielerflits.nl/rss.php",
  "https://www.voetbalzone.nl/rss/rss.xml",
];

Router.get("/", (req, res) => {
  let parser = new Parser();

  const feedURLS = FEED_LIST.map((feed) => {
    return parser.parseURL(feed);
  });

  Promise.all(feedURLS)
    .then((response) => {
      res.render("home", { pageTitle: "Welcome to your RSS Feed", articles: response });
    })
    .catch((error) => res.status(400).json(error));
});

Router.post("/add", (req, res) => {
  console.log("Add new RSS feed to system");
});
