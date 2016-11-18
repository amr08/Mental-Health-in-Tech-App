var express = require('express');
var Data = require('../models')["Data"];
var router = express.Router();

//Route for countries/states

function surveyCalculations(dataset) {

	var data = {
		state: dataset[0].state,
		benefits: {
			yes: 0,
			no: 0,
			'dontKnow': 0
		}
	}

	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].benefits == "Yes") {
			data.benefits.yes++;
		}
		else if (dataset[i].benefits == "No") {
			data.benefits.no++;
		}
		else {
			data.benefits.dontKnow++;
		}
	}

	console.log(data);
	return data;
}


router.get("/", function(req,res){

  res.render('state');

});

router.get("/:state", function(req,res){
  var state = req.params.state;

  Data.findAll({ where: {state:state}})
  .then(function(result){
      // var hbsObject = { Data: result };
      // console.log(hbsObject);
      var data = surveyCalculations(result);
	  res.render('individual-state', data);
    })

});

module.exports = router;