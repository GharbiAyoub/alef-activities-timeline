const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("pages/chart1");
});

/* router.get("/chart2", function (req, res, next) {
  res.render("pages/chart2");
});

router.get("/chart3", function (req, res, next) {
  res.render("pages/chart3");
}); */
module.exports = router;
