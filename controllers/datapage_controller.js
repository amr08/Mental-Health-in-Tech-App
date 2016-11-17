var express = require('express');
var Data = require('../models')["Data"];
var router = express.Router();

//Route for countries/states

router.get("/state/:state", function(req,res){
  var state = req.params.state;

	Data.find({where: {id: state}})
  .then(function(result){
      var hbsObject = { Data: result };
      console.log(hbsObject);
      res.render('state', hbsObject);
    })

});

module.exports = router;