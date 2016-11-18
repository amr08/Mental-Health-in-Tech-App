// Andrea

$(document).ready(function() {

	$.stellar();


//links for headers
	$("a.item").on("click", function() {
		$(".item").removeClass("active");
		$(this).addClass("active");
	});



//form JS
	$("#gender").dropdown();
	$("#self_employed").dropdown();
	$("#family_history").dropdown();
	$("#treatment").dropdown();
	$("#work_interfere").dropdown();
	$("#no_employees").dropdown();
	$("#remote_work").dropdown();
	$("#tech_company").dropdown();
	$("#benefits").dropdown();
	$("#care_options").dropdown();
	$("#wellness_program").dropdown();
	$("#seek_help").dropdown();
	$("#anonymity").dropdown();
	$("#leave").dropdown();
	$("#mental_health_consequence").dropdown();
	$("#phys_health_consequence").dropdown();
	$("#coworkers").dropdown();
	$("#supervisor").dropdown();
	$("#mental_health_interview").dropdown();
	$("#phys_health_interview").dropdown();
	$("#mental_vs_physical").dropdown();
	$("#obs_consequence").dropdown();

//form validation

	$("form").form({
		// inline: true,
	    fields: {
	    	age: {
	    		identifier: "age",
	        	rules: [{
	            	type   : "empty",
	            	prompt : "Please enter your age"
	          	}]
	      	},

	      	gender: {
	      		identifier: "gender",
	      		rules: [{
	      			type: "empty",
	      			prompt : "Please choose a gender"
	      		}]
	      	},
	      	country: {
       			identifier: 'country',
        		rules: [{
            		type   : 'empty',
            		prompt : 'Please select a country'
          		}]
      		},
	      	state: {
       			identifier: 'state',
        		rules: [{
            		type   : 'empty',
            		prompt : 'Please choose a state'
          		}]
      		},
      		treatment: {
       			identifier: 'treatment',
        		rules: [{
            		type   : 'empty',
            		prompt : 'Please make a selection'
          		}]
      		},
      		
      		self_employed: {
       			identifier: 'self_employed',
        		rules: [{
            		type   : 'empty',
            		prompt : 'Please make a selection'
          		}]
      		}
      		// family_history: {
       	// 		identifier: 'family_history',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// work_interfere: {
       	// 		identifier: 'work_interfere',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// no_employees: {
       	// 		identifier: 'no_employees',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// remote_work: {
       	// 		identifier: 'remote_work',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// tech_company: {
       	// 		identifier: 'tech_company',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// care_options: {
       	// 		identifier: 'care_options',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// benefits: {
       	// 		identifier: 'benefits',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// wellness_program: {
       	// 		identifier: 'wellness_program',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// seek_help: {
       	// 		identifier: 'seek_help',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// anonymity: {
       	// 		identifier: 'anonymity',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// leave: {
       	// 		identifier: 'leave',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// mental_health_consequence: {
       	// 		identifier: 'mental_health_consequence',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// phys_health_consequence: {
       	// 		identifier: 'phys_health_consequence',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// coworkers: {
       	// 		identifier: 'coworkers',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// supervisor: {
       	// 		identifier: 'supervisor',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// mental_health_interview: {
       	// 		identifier: 'mental_health_interview',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// phys_health_interview: {
       	// 		identifier: 'phys_health_interview',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// mental_vs_physical: {
       	// 		identifier: 'mental_vs_physical',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// },
      		// obs_consequence: {
       	// 		identifier: 'obs_consequence',
        // 		rules: [{
        //     		type   : 'empty',
        //     		prompt : 'Please make a selection'
        //   		}]
      		// } 
      	}, onSuccess: function(){
					$(".modal").modal('show');
      		}	
  });

	$("#success").on("click", function(){
		$("form").addClass("hide");
		$('#completed').text('Form successfully submitted');
	});

});



// Ryan

// Jay

// Cherish

// -----------------------------------------------------------------------------
// BEGIN Google US Map
// -----------------------------------------------------------------------------

google.charts.load('upcoming', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

  var data = google.visualization.arrayToDataTable([
    ['Country', 'Responses', 'URL'],
    ['North Carolina', 200, 'http://google.com'],
    ['New York', 300, 'http://yahoo.com'],
    ['California', 400, 'http://gmail.com'],
  ]);

var view = new google.visualization.DataView(data);
view.setColumns([0, 1]);

  var options = {
    region: 'US',
    resolution: 'provinces',
    legend: 'none',
    backgroundColor: 'transparent',
    colorAxis: { colors: ['#ACCCE5', '#1E5799'] }
  };

  var chart = new google.visualization.GeoChart(document.getElementById('US-map'));

google.visualization.events.addListener(chart, 'select', function () {
  var selection = chart.getSelection();
if (selection.length) {
    var url = data.getValue(selection[0].row, 2);
    window.location.href = url;
}
 });

  chart.draw(view, options);
}
// -----------------------------------------------------------------------------
// END Google US Map
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// BEGIN Google Pie Charts for the state page
// -----------------------------------------------------------------------------

//Load charts and corechart package
google.charts.load("current", {packages:["corechart"]});

//Draw all pie charts when Charts is loaded
google.charts.setOnLoadCallback(chartBenefits);
google.charts.setOnLoadCallback(chartWellnessProgram);
google.charts.setOnLoadCallback(chartAnonymity);
google.charts.setOnLoadCallback(chartLeave);
google.charts.setOnLoadCallback(chartMentalHealthConsequence);
google.charts.setOnLoadCallback(chartMentalVSPhysical);

//Benefit chart info
function chartBenefits() {
  var data = google.visualization.arrayToDataTable([
  ['Response', 'Count'],
  ['Yes',    parseInt($("#benefits-yes").html())],
  ['No',     parseInt($("#benefits-no").html())],
  ["Don't Know",  parseInt($("#benefits-dontKnow").html())],
]);

var options = {
  title: 'Does your employer provide mental health benefits?',
  is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('chart-benefits'));
  chart.draw(data, options);
}

//Wellness Program chart info
function chartWellnessProgram() {
  var data = google.visualization.arrayToDataTable([
  ['Response', 'Count'],
  ['Yes',    parseInt($("#wellness-program-yes").html())],
  ['No',     parseInt($("#wellness-program-no").html())],
  ["Don't Know",  parseInt($("#wellness-program-dontKnow").html())],
]);

var options = {
  title: 'Has your employer ever discussed mental health as part of an employee wellness program?',
  is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('chart-wellness-program'));
  chart.draw(data, options);
}

//Anonymity chart info
function chartAnonymity() {
  var data = google.visualization.arrayToDataTable([
  ['Response', 'Count'],
  ['Yes',    parseInt($("#anonymity-yes").html())],
  ['No',     parseInt($("#anonymity-no").html())],
  ["Don't Know",  parseInt($("#anonymity-dontKnow").html())],
]);

var options = {
  title: 'Is your anonymity protected if you choose to take advantage of mental health or substance abuse treatment resources?',
  is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('chart-anonymity'));
  chart.draw(data, options);
}

//Leave chart info
function chartLeave() {
  var data = google.visualization.arrayToDataTable([
  ['Response', 'Count'],
  ['Very Easy',    parseInt($("#leave-veryEasy").html())],
  ['Somewhat Easy',     parseInt($("#leave-somewhatEasy").html())],
  ['Somewhat Difficult',     parseInt($("#leave-somewhatDifficult").html())],
  ['Very Difficult',     parseInt($("#leave-veryDifficult").html())],
  ["Don't Know",  parseInt($("#leave-dontKnow").html())],
]);

var options = {
  title: 'Is your leave protected if you choose to take advantage of mental health or substance abuse treatment resources?',
  is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('chart-leave'));
  chart.draw(data, options);
}


//Mental-health-consequence chart info
function chartMentalHealthConsequence() {
  var data = google.visualization.arrayToDataTable([
  ['Response', 'Count'],
  ['Yes',    parseInt($("#mental-health-consequence-yes").html())],
  ['No',     parseInt($("#mental-health-consequence-no").html())],
  ["Don't Know",  parseInt($("#mental-health-consequence-dontKnow").html())],
]);

var options = {
  title: 'Do you think that discussing a mental health issue with your employer would have negative consequences?',
  is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('chart-mental-health-consequence'));
  chart.draw(data, options);
}

//Mental-vs-physical chart info
function chartMentalVSPhysical() {
  var data = google.visualization.arrayToDataTable([
  ['Response', 'Count'],
  ['Yes',    parseInt($("#mental-vs-physical-yes").html())],
  ['No',     parseInt($("#mental-vs-physical-no").html())],
  ["Don't Know",  parseInt($("#mental-vs-physical-dontKnow").html())],
]);

var options = {
  title: 'Do you feel that your employer takes mental health as seriously as physical health?',
  is3D: true,
};

var chart = new google.visualization.PieChart(document.getElementById('chart-mental-vs-physical'));
  chart.draw(data, options);
}

// -----------------------------------------------------------------------------
// END Google Pie Charts for the state page
// -----------------------------------------------------------------------------
