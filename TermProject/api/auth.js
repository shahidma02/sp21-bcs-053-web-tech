// const express = require("express");
// const bcrypt = require("bcryptjs");
// const User = require('./models/User');

// const router = express.Router();

// router.get("/LogIn", (req, res) => {
//   res.render("/LogIn");
// });

// router.post("/LogIn", async (req, res) => {
//   let user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     req.session.flash = { type: "danger", message: "No User Found" };
//     return res.redirect("/signup");
//   }
//   let valid = await bcrypt.compare(req.body.password, user.password);
//   if (!valid) {
//     req.session.flash = { type: "danger", message: "Unable to Login" };
//     return res.redirect("/LogIn");
//   } else {
//     req.session.user = user; // actually logging in
//     req.session.flash = { type: "success", message: "Logged In Successfully" };
//     return res.redirect("/dashboard");
//   }
// });

// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

// router.post("/signup", async (req, res) => {
//   const { name, email, password, dob, city, country, gender } = req.body;
//   // let user = new User(req.body);
//   const salt = await bcrypt.genSalt(10);
//   password = await bcrypt.hash(password, salt);
//   await { name, email, password, dob, city, country, gender }.save();
//   return res.redirect("/dashboard");
// });

// module.exports = router;
