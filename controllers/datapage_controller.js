var express = require('express');
var Data = require('../models')["Data"];
var router = express.Router();

//Route for countries/states


router.get("/", function(req,res){

  res.render('state');

});

router.get("/:state", function(req,res){
  var state = req.params.state;

	Data.findAll()
  .then(function(result){
      var hbsObject = { Data: result };
      console.log(hbsObject);
      res.render('individual-state', hbsObject);
    })

});

module.exports = router;