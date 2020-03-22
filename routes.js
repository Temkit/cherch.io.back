const express = require("express");
const router = express.Router();
const channel = require("./channel");

router.get("/search", (req, res, next) => {
  channel
    .search(
      req.query.user,
      req.query.database,
      req.query.lang,
      req.query.keyword
    )
    .then((result, err) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
});

router.get("/suggest", (req, res, next) => {
  channel
    .suggest(
      req.query.user,
      req.query.database,
      req.query.lang,
      req.query.keyword
    )
    .then((result, err) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
});

router.post("/ingest", (req, res, next) => {
  channel
    .ingest(
      req.body.user,
      req.body.database,
      req.body.lang,
      req.body.id,
      req.body.text
    )
    .then((result, err) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });
});

module.exports = router;
