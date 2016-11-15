// Andrea

$(document).ready(function() {

//links for headers
	$("a.item").on("click", function() {
		$(".item").removeClass("active");
		$(this).addClass("active");
	});

	// $("#successNote").addClass('hide');

//form JS
	$("#gender").dropdown();
	$("#country").dropdown();
	$("#self_employed").dropdown();
	$("#family_history").dropdown();
	$("#treatment").dropdown();
	$("#work_history").dropdown();
	$("#no_employees").dropdown();
	$("#remote_work").dropdown();
	$("#tech_company").dropdown();
	$("#wellness_program").dropdown();
	$("#seek_help").dropdown();
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
	    fields: {
	      age: {
	        identifier: "age",
	        rules: [
	          {
	            type   : "empty",
	            prompt : "Please enter your age"
	          }
	        ]
	      }
	  	},
	      	onSuccess: function(event){
	      		event.preventDefault();
	      		$(".modal").modal('show');
	      		
      		alert("works");

      		}
     
      // skills: {
      //   identifier: 'skills',
      //   rules: [
      //     {
      //       type   : 'minCount[2]',
      //       prompt : 'Please select at least two skills'
      //     }
      //   ]
      // },
      // gender: {
      //   identifier: 'gender',
      //   rules: [
      //     {
      //       type   : 'empty',
      //       prompt : 'Please select a gender'
      //     }
      //   ]
      // },
      // username: {
      //   identifier: 'username',
      //   rules: [
      //     {
      //       type   : 'empty',
      //       prompt : 'Please enter a username'
      //     }
      //   ]
      // },
      // password: {
      //   identifier: 'password',
      //   rules: [
      //     {
      //       type   : 'empty',
      //       prompt : 'Please enter a password'
      //     },
      //     {
      //       type   : 'minLength[6]',
      //       prompt : 'Your password must be at least {ruleValue} characters'
      //     }
      //   ]
      // },
      // terms: {
      //   identifier: 'terms',
      //   rules: [
      //     {
      //       type   : 'checked',
      //       prompt : 'You must agree to the terms and conditions'
      //     }
      //   ]
      // }
    });

//submit modal JS
	// $('#submit').on("click",function() {
	// 	$(".modal").modal('show');
	// 	$('form').transition('scale');

	// });

	$("#success").on("click", function(){
		$('#successNote').transition('fade');
		$('#successNote').transition('scale');

	})

});



// Ryan

// Jay

// Cherish
