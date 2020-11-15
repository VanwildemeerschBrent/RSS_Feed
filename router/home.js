const express = require("express");
const Parser = require("rss-parser");
const fs = require("fs");
const path = require("path");

const jsonFeed = fs.readFileSync(path.join(__dirname, "../feed.json"));
const FEED_LIST = JSON.parse(jsonFeed);

const Router = express.Router();

module.exports = Router;

Router.get("/", (req, res) => {
  let parser = new Parser();

  const feedURLS = FEED_LIST.map((feed) => {
    return parser.parseURL(feed.url);
  });

  Promise.all(feedURLS)
    .then((response) => res.render("home", { pageTitle: "Welcome to your RSS Feed", articles: response }))
    .catch((error) => res.status(400).json(error));
});

Router.get("/manage", (req, res) => {
  res.render("manage");
});

Router.post("/add", (req, res) => {
  console.log("Add new RSS feed to system");
});
