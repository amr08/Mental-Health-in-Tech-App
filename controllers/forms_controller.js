
   var express = require('express');
   var Data = require('../models')["Data"];
   var router = express.Router();


   //Route for form (Andrea working on this for now)
  router.get("/", function(req,res){
     res.redirect("/userform");
        
  });

  router.get("/new", function(req,res){

     res.render("new");
        
  });


  // router.post("/userform/new", function(req,res) {
  //   res.send("I hit posts")
  //   var age = req.body.age;
  //   var gender = req.body.gender;
  //   var state = req.body.state;
  //   var self_employed = req.body.self_employed;
  //   console.log(age);
  //   console.log(gender);
  //   console.log(state);
  //   console.log(self_employed);

  //    // .then(function() {
  //       res.redirect('/');
  //     // })   
  //   // var newPost = {age: age, gender: gender}
  // });






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