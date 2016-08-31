var express = require('express');
var router = express.Router();

router.get('/postlist', function(req, res) {
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.find({}, {}, function(err, items) {
    res.json(items);
  });
});

router.get('/showpost/:id', function(req, res) {
  var id = req.params.id;
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.find({}, {}, function(err, items) {
    var post = items.filter(function(item) {
	  return item._id == id;
	});
	
	res.json(post);
  });
});

router.post('/addpost', function(req, res) {
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.insert(req.body, function(err, items) {
    res.send((err === null) ? { msg: '' } : { msg: err });
  });
});

router.delete('/deletepost/:id', function(req, res) {
  var id = req.params.id;
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.removeById(id, function(err, result) {
    res.send((result === 1) ? { msg: '' } : { msg: 'error: ' + err });
  });
});

module.exports = router;
