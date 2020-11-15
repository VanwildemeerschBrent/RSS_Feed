const express = require("express");
const Parser = require("rss-parser");

const PORT = process.env.PORT || 3000;
const app = express();

const FEED_LIST = [
  "https://sporza.be/nl.rss.xml",
  "http://feeds.nieuwsblad.be/nieuws/snelnieuws",
  "https://www.vrt.be/vrtnws/nl.rss.headlines.xml",
  "https://www.wielerflits.nl/rss.php",
  "https://www.voetbalzone.nl/rss/rss.xml",
];

app.get("/", (req, res) => {
  let parser = new Parser();

  const feedURLS = FEED_LIST.map((feed) => {
    return parser.parseURL(feed);
  });

  Promise.all(feedURLS)
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(400).json(error));
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
