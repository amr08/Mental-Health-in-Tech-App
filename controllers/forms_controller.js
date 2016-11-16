
   var express = require('express');
   var Data = require('../models')["Data"];
   var router = express.Router();


   //Route for form (Andrea working on this for now)
  router.get("/", function(req,res){
     res.render("new");
        
  });

  router.post("/", function(req,res) {
    res.send("I hit posts")
  });


// router.get("/new", function(req,res){


//      res.render("new");
        
//   });




//creates new post
 //  router.post("/create", function(req,res) {
 //   //res.render("new.ejs");  for forms

 //    // Data.create({
 //    //   burger_name: req.body.burger_name,
 //    //   devoured: req.body.devoured
 //    // })

 //    //   .then(function() {
 //    //     res.redirect('/');
 //    //   })   
 //  });


 // router.put('/update/:id', function (req, res) {

 //  // //FOR UPDATING BOOLEANSData.update(
 //  //   {
 //  //     devoured: req.body.devoured
 //  //   },
 //  //   {
 //  //     where: { id : req.params.id }
 //  //   })

 //  //     .then(function (result) {
 //  //       res.redirect('/');
 //  //     })
 //  });

  module.exports = router;