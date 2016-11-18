// Andrea

$(document).ready(function() {

	$.stellar();




function tooltipHtml(n, d, id){ /* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4>"

  }

  
  var sampleData ={}; /* Sample random data. */ 
  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
  "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
    .forEach(function(d,id){ 
      var low=Math.round(100*Math.random()), 
        mid=Math.round(100*Math.random()), 
        high=Math.round(100*Math.random());

      sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
          avg:Math.round((low+mid+high)/3), color:d3.interpolate("#3fd5db", "#225f85")(low/100)}; 
    });
  

  /* draw states on id #statesvg */ 
  uStates.draw("#statesvg",sampleData, tooltipHtml);
  
  d3.select(self.frameElement).style("height", "600px");
//map stuff





google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Yes',    parseInt($("#benefits-yes").html())],
          ['No',     parseInt($("#benefits-no").html())],
          ["Don't Know",  parseInt($("#benefits-dontKnow").html())],
        ]);

        var options = {
          title: 'Company Offers Benefits',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

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
