var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let a = Math.hypot(x) 
  let b =Math.ceil(x)
  let c = Math.clz32(x)
  
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + a ,
    v1: `applied to ` + x + ` is ` + b,
    v2: `applied to ` + x + ` is ` + c
  });
});

module.exports = router;