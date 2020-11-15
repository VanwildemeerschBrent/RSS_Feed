const express = require("express");

const PORT = process.env.PORT || 3000;
const app = new express();

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
