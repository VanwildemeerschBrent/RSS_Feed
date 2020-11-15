const express = require("express");
const expressHandlebars = require('express-handlebars');
const path = require('path')


const PORT = process.env.PORT || 3000;
const app = express();

app.engine('handlebars',expressHandlebars());
app.set('view engine','handlebars');

app.use("/", require("./router/home"));


app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
