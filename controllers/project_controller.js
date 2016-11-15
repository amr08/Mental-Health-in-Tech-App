  var express = require('express');
  var router = express.Router();
  // var Data = require('../models')["Data"];

  router.get('/', function (req, res) {

    res.redirect("landing");
  });


 router.get('/landing', function (req, res) {
    
    res.render("landing");
  });


//Route for form (Andrea working on this for now)
  router.get("/userform", function(req,res){


     res.render("userform");
        
  });
//


//Route for countries/states
  router.get("/:country", function(req,res){
    var zip = req.params.zip;

    res.render("country");
        
  });




//creates new post
  router.post("/create", function(req,res) {
   //res.render("new.ejs");  for forms

    // Data.create({
    //   burger_name: req.body.burger_name,
    //   devoured: req.body.devoured
    // })

    //   .then(function() {
    //     res.redirect('/');
    //   })   
  });


 router.put('/update/:id', function (req, res) {

  // //FOR UPDATING BOOLEANSData.update(
  //   {
  //     devoured: req.body.devoured
  //   },
  //   {
  //     where: { id : req.params.id }
  //   })

  //     .then(function (result) {
  //       res.redirect('/');
  //     })
  });

    
  module.exports = router;