var express = require('express');
var Data = require('../models')["Data"];
var router = express.Router();

//Route for countries/states

function surveyCalculations(dataset) {
	//Object for calculations
	var calculations = {
		state: dataset[0].state,
		benefits: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		wellness_program: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		anonymity: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		leave: {
			veryEasy: 0,
			somewhatEasy: 0,
			somewhatDifficult: 0,
			veryDifficult: 0,
			dontKnow: 0
		},
		mental_health_consequence: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		mental_vs_physical: {
			yes: 0,
			no: 0,
			dontKnow: 0
		}
	}

	//Calculations for benefits
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].benefits == "Yes") {
			calculations.benefits.yes++;
		}
		else if (dataset[i].benefits == "No") {
			calculations.benefits.no++;
		}
		else {
			calculations.benefits.dontKnow++;
		}
	}

	//Calculations for wellness_program
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].wellness_program == "Yes") {
			calculations.wellness_program.yes++;
		}
		else if (dataset[i].wellness_program == "No") {
			calculations.wellness_program.no++;
		}
		else {
			calculations.wellness_program.dontKnow++;
		}
	}

	//Calculations for anonymity
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].anonymity == "Yes") {
			calculations.anonymity.yes++;
		}
		else if (dataset[i].anonymity == "No") {
			calculations.anonymity.no++;
		}
		else {
			calculations.anonymity.dontKnow++;
		}
	}

	//Calculations for leave
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].leave == "Very easy") {
			calculations.leave.veryEasy++;
		}
		else if (dataset[i].leave == "Somewhat easy") {
			calculations.leave.somewhatEasy++;
		}
		else if (dataset[i].leave == "Somewhat difficult") {
			calculations.leave.somewhatDifficult++;
		}
		else if (dataset[i].leave == "Very difficult ") {
			calculations.leave.veryDifficult++;
		}
		else {
			calculations.leave.dontKnow++;
		}
	}

	//Calculations for mental_health_consequence
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].mental_health_consequence == "Yes") {
			calculations.mental_health_consequence.yes++;
		}
		else if (dataset[i].mental_health_consequence == "No") {
			calculations.mental_health_consequence.no++;
		}
		else {
			calculations.mental_health_consequence.dontKnow++;
		}
	}

	//Calculations for mental_vs_physical
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].mental_vs_physical == "Yes") {
			calculations.mental_vs_physical.yes++;
		}
		else if (dataset[i].mental_vs_physical == "No") {
			calculations.mental_vs_physical.no++;
		}
		else {
			calculations.mental_vs_physical.dontKnow++;
		}
	}

	console.log(calculations);
	return calculations;
}


router.get("/", function(req,res){

  res.render('state');

});

router.get("/:state", function(req,res){
  var state = req.params.state;

  Data.findAll({ where: {
  	state: state,
  	self_employed: 'no',
  	tech_company: 'yes'
  }})
  .then(function(result){
      var calculatedData = surveyCalculations(result);
	  res.render('individual-state', calculatedData);
    })

});

module.exports = router;