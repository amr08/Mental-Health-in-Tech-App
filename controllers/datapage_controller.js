
   var express = require('express');
   var Data = require('../models')["Data"];
   var router = express.Router();

 // router.get("/", function(req,res){
 //     res.redirect("country");
        
 //  });

//Route for countries/states

 router.get("/:search", function(req,res){
 	Data.find({}, function(err, data) {
 		if(err){
 			console.log("ERROR!");
 		} else {
 		res.render("country",{data: data});
		}
 	});
    // var zip = req.params.zip;

  
  });


   module.exports = router;
