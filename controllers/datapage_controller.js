
   var express = require('express');
   var Data = require('../models')["Data"];
   var router = express.Router();



//Route for countries/states

 router.get("/:country", function(req,res){
    var zip = req.params.zip;

    res.render("country");
        
  });


   module.exports = router;
