require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const session = require('express-session');


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: "amena",
  saveUninitialized: true,
  resave: false,
}));

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.set("view engine", "ejs");


app.use("/api/create", (req, res, next) => {
  if (req.body.title && req.body.title.toLowerCase() === "hello") {
    req.session.flash = {
      type: "danger",
      message: "Can't create a post with title 'Hello'",
    };
    return res.redirect('/');
  }
  next();
}); 


app.use("/api", require("./routes/post"));
app.use("", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
