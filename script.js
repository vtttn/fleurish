// var URL = 'http://localhost:3000';
var URL = 'https://fleurish.herokuapp.com';



var ang = angular.module("fleurish", []);

ang.controller("fleurishCTRL", function($scope, $http){

	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

	// $http.post(URL+"/create-Event").then(function(response){
	// 	$scope.events = response.data;
	// });

	$scope.createEvent = function(response){
		var createEvent = {
			"title"				: $('#newEventTitle').val(),
			"description" 		: $('#newEventDes').val(),
			"type"				: $('#newEventType').val(),
			"website"			: $('#newEventWebsite').val(),
			"street" 			: $('#newEventStreet').val(),
			"city" 				: $('#newEventCity').val(),
			"state" 			: $('#newEventState').val(), 
			"zip"				: $('#newEventZip').val(),
			"startDate"			: $('#newEventStartDate').val(), 
			"endDate"			: $('#newEventEndDate').val(),
			"startTime"			: $('#newEventStartTime').val(), 
			"endTime"			: $('#newEventEndTime').val(),
			"ageRestriction" 	: $('#newEventAgeRes').val(),
			"admission" 		: $('#newEventAdmission').val(),
			"fleur"				: $('#newEventFleur').val(),
		}

		$http.post(URL+'/create-Event', createEvent, function(response){
			createEvent;

			$('#newEventTitle').val() == $('#newEventTitle').val("");
			$('#newEventDes').val() == $('#newEventDes').val("");
			$('#newEventType').val() == $('#newEventType').val("");
			$('#newEventWebsite').val() == $('#newEventWebsite').val("");
			$('#newEventStreet').val() == $('#newEventStreet').val("");
			$('#newEventCity').val() == $('#newEventCity').val("");
			$('#newEventState').val() == $('#newEventState').val("");
			$('#newEventZip').val() == $('#newEventZip').val("");
			$('#newEventStartDate').val() == $('#newEventStartDate').val("");
			$('#newEventEndDate').val() == $('#newEventEndDate').val("");
			$('#newEventStartTime').val() == $('#newEventStartTime').val("");
			$('#newEventEndTime').val() == $('#newEventEndTime').val("");
			$('#newEventAgeRes').val() == $('#newEventAgeRes').val("");
			$('#newEventAdmission').val() == $('#newEventAdmission').val("");
			$('#newEventFleur').val() == $('#newEventFleur').val("");


		})

		$('.alert').toggle();
		
	};

});


// signUp

 $('#createAccount').click(function(){
		var createAccount = {
			"firstName": $('#firstName').val(),
			"lastName": $('#lastName').val(),
			"signInEmail": $('#signInEmail').val(),
			"password": $('#createPassword').val(),
			"confirmPassword": $('#retypePassword').val()
		}

		$.post(URL+'/create-Account', createAccount, function(err,response){
			createAccount;
		})

		$('#createAccount').trigger("reset");

	});


// create new event & posting to DB
// $('#createEvent').click(function(){
// 	var createEvent = {
// 		"title"				: $('#newEventTitle').val(),
// 		"description" 		: $('#newEventDes').val(),
// 		"type"				: $('#newEventType').val(),
// 		"website"			: $('#newEventWebsite').val(),
// 		"street" 			: $('#newEventStreet').val(),
// 		"city" 				: $('#newEventCity').val(),
// 		"state" 			: $('#newEventState').val(), 
// 		"zip"				: $('#newEventZip').val(),
// 		"startDate"			: $('#newEventStartDate').val(), 
// 		"endDate"			: $('#newEventEndDate').val(),
// 		"startTime"			: $('#newEventStartTime').val(), 
// 		"endTime"			: $('#newEventEndTime').val(),
// 		"ageRestriction" 	: $('#newEventAgeRes').val(),
// 		"admission" 		: $('#newEventAdmission').val(),
// 		"fleur"				: $('#newEventFleur').val(),
// 	}

// 	$.post(URL+'/create-Event', createEvent, function(err,response){
// 		createEvent;

// 		$('#newEventTitle').val() == $('#newEventTitle').val("");
// 		$('#newEventDes').val() == $('#newEventDes').val("");
// 		$('#newEventType').val() == $('#newEventType').val("");
// 		$('#newEventWebsite').val() == $('#newEventWebsite').val("");
// 		$('#newEventStreet').val() == $('#newEventStreet').val("");
// 		$('#newEventCity').val() == $('#newEventCity').val("");
// 		$('#newEventState').val() == $('#newEventState').val("");
// 		$('#newEventZip').val() == $('#newEventZip').val("");
// 		$('#newEventStartDate').val() == $('#newEventStartDate').val("");
// 		$('#newEventEndDate').val() == $('#newEventEndDate').val("");
// 		$('#newEventStartTime').val() == $('#newEventStartTime').val("");
// 		$('#newEventEndTime').val() == $('#newEventEndTime').val("");
// 		$('#newEventAgeRes').val() == $('#newEventAgeRes').val("");
// 		$('#newEventAdmission').val() == $('#newEventAdmission').val("");
// 		$('#newEventFleur').val() == $('#newEventFleur').val("");


// 	})

// 		$('.alert').toggle();
		
// })





// login

	$('#loginButton').click(function(){     
		var loginForm = {
			"loginEmail": $('#loginEmail').val(),
			"loginPassword": $('#loginPassword').val(),
		}

		$.post(URL+'/login-Account', loginForm, function(err,response){
			loginForm;
		});

		$('#loginForm').trigger("reset");

		$(document).ready(function(){
			$("#lostPasswordBtn").on('click', function(){
				$(".popup1").fadeIn('slow');
			});
		});

	});  


// DATE PICKER INDEX
	$( function() {
		var dateFormat = "mm/dd/yy",
			from = $( "#from, #fromBrowse, #newEventStartDate" )
				.datepicker({
					defaultDate: null,
					changeMonth: true,
					changeYear: true,
					numberOfMonths: 1
				})
				.on( "change", function() {
					to.datepicker( "option", "minDate", getDate( this ) );
				}),
			to = $( "#to, #toBrowse, #newEventEndDate" ).datepicker({
				defaultDate: null,
				changeMonth: true,
				changeYear: true,
				numberOfMonths: 1
			})
			.on( "change", function() {
				from.datepicker( "option", "maxDate", getDate( this ) );
			});
 
		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}
 
			return date;
		}
	} );