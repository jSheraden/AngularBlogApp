var express = require('express');
var router = express.Router();

router.get('/postlist', function(req, res) {
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.find({}, {}, function(err, items) {
    res.json(items);
  });
});

module.exports = router;
