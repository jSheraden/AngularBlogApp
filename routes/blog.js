var express = require('express');
var router = express.Router();

router.get('/posts', function(req, res) {
  var db = req.db;
  var blogPosts = db.get('blogPosts');

  posts.find({}, {}, function(e, posts) {
    res.json(posts);
  });
});

module.exports = router;
