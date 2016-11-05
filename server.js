  var express = require("express");
  var PORT = process.env.PORT || 7000;


  var app = express();
  app.use(express.static(__dirname + '/public'));
  app.set("view engine", "ejs");

  var PORT = process.env.PORT || 7000;

  

//creating routes
  app.get("/", function(req,res) {
    res.render("landing");
  });

  app.get("/userData", function(req,res){
    var userData = [
      {name: "Creek", image: "http://cdn.thepondguy.com/images/homepage/pond-lake-promo.jpg"},
      {name: "Mountain View", image: "http://pop.h-cdn.co/assets/cm/15/05/54c83083b00c9_-_pmx0606pond006_large.jpg"},
      {name: "Pond", image: "http://openwalls.com/image/264/small_river_1920x1200.jpg"}
      
    ]
    res.render("userData", {userData: userData});
        
  });

  app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
  });