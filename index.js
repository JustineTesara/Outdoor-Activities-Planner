import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const accessToken = "g3vwvFNV-28L3i9Tt5O4EulF1vf4d--dgtCZT5r1W2o";
const client = new ynab.API(accessToken);

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
