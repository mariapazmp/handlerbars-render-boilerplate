const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const port = 8080;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "./views");
const partialsPath = path.join(__dirname, "./partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  const params = { title: "Weather", name: "Gyanendra" };
  res.render("index", params);
});

app.listen(port, () => {
  console.log(`Successfully running on port ${port}.`);
});
