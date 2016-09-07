var express = require('express');
var router = express.Router();

router.get('/postlist', function(req, res) {
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.find({}, {}, function(err, items) {
    res.json(items);
  });
});

router.get('/:id', function(req, res) {
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

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.updateById(id, function(err, result) {
    if (err) throw err;
    res.send(200);
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  var db = req.db;
  var posts = db.get('postlist');
  
  posts.removeById(id, function(err, result) {
    if (err) throw err;
    res.send(200);
  });
});

module.exports = router;
