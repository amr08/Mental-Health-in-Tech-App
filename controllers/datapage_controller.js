
   var express = require('express');
   var Data = require('../models')["Data"];
   var router = express.Router();

 // router.get("/", function(req,res){
 //     res.redirect("country");
        
 //  });

//Route for countries/states


 router.get("/search", function(req,res){

 	Data.find({attributes: ['id', 'state','self_employed']})

    .then(function(result){
        var hbsObject = { Data: result };
        console.log(hbsObject);
        res.render('country', hbsObject);
      })


  	});
    // var zip = req.params.zip;
     // res.render("country");

  



   module.exports = router;
