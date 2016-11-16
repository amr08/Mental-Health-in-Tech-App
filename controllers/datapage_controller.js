
   var express = require('express');
   var Data = require('../models')["Data"];
   var router = express.Router();

 router.get("/", function(req,res){
     res.redirect("country");
        
  });

//Route for countries/states

 router.get("/:country", function(req,res){
    var zip = req.params.zip;

    res.render("country");
        
  });


   module.exports = router;
