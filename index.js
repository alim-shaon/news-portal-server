const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

app.use(cors());

const category = require("./data/category.json");
const news = require("./data/news.json");

// all get request
app.get("/", (req, res) => {
  res.send("News api running");
});

// get request to find all the category available for left side menu
app.get("/news-categories", (req, res) => {
  res.send(category);
});

// get request to find data chich all matches the request category
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryNews = news.filter((n) => n.category_id === id);
  if (id == "08") {
    res.send(news);
  } else {
    res.send(categoryNews);
  }
});

// get request to get all the news
app.get("/news", (req, res) => {
  res.send(news);
});

// get reqest for specific news for more details
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("FyreStorm surver running on port", port);
});
