const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/", require("./router"));

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
