var express = require('express');
var router = express.Router();
const Prometheus = require('prom-client')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/metrics',(req, res, next )=>{

  res.set('Content-Type', Prometheus.register.contentType)
  res.end(Prometheus.register.metrics())
  
});

module.exports = router;
