var express = require('express');
var Data = require('../models')["Data"];
var router = express.Router();

//Function to change state initials to state names
function abbrState(input, to) {
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}

function surveyCalculations(dataset) {
	//Object for calculations
	var calculations = {
		stateInitial: dataset[0].state,
		stateName: '',
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

	//Find state name based on initials
	calculations.stateName = abbrState(calculations.stateInitial, 'name');

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