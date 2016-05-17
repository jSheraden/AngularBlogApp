var express = require('express');
var router = express.Router();

router.get('/postlist', function(req, res) {
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.find({}, {}, function(err, items) {
    res.json(items);
  });
});

router.post('/addpost', function(req, res) {
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.insert(req.body, function(err, items) {
    res.send((err === null) ? { msg: '' } : { msg: err });
  });
});

module.exports = router;
