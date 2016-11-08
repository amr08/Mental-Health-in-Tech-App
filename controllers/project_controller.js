  var express = require('express');
  var router = express.Router();
  // var Burgers = require('../models')["Burgers"];

  router.get('/', function (req, res) {
    res.render("landing");
  });



//creating routes
 

  router.get("/userData", function(req,res){
    var userData = [
      {name: "Creek", image: "http://cdn.thepondguy.com/images/homepage/pond-lake-promo.jpg"},
      {name: "Mountain View", image: "http://pop.h-cdn.co/assets/cm/15/05/54c83083b00c9_-_pmx0606pond006_large.jpg"},
      {name: "Pond", image: "http://openwalls.com/image/264/small_river_1920x1200.jpg"}
      
    ]
    res.render("userData", {userData: userData});
        
  });


//creates new post
  router.post("/create", function(req,res) {
   //res.render("new.ejs");  for forms

    // Burgers.create({
    //   burger_name: req.body.burger_name,
    //   devoured: req.body.devoured
    // })

    //   .then(function() {
    //     res.redirect('/');
    //   })   
  });


 router.put('/update/:id', function (req, res) {

  // Burgers.update(
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