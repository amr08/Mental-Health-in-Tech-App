  var express = require("express");
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');

  var PORT = process.env.PORT || 7000;


  var app = express();

  app.use(express.static(__dirname + '/public'));

  app.set("view engine", "ejs");

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(methodOverride('_method'));


  // var sequelizeConnection = models.sequelize;

  // sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// //syncing tabels
//  .then(function(){

//     return sequelizeConnection.sync({force:true})

//   })


var routes = require('./controllers/project_controller.js');
  app.use('/', routes);

  app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
  });