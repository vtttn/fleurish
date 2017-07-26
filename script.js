// var URL = 'http://localhost:3000';
var URL = 'https://fleurish.herokuapp.com';



var ang = angular.module("fleurish", []);

ang.controller("fleurishCTRL", function($scope, $http){

	$http.get(URL+"/all-event").then(function(response){
		$scope.events = response.data;
	});

	// onclick function for create event form
	$scope.createEvent = function(response){
		
		$http.post(URL+'/create-Event', $scope.newEvent).then(function(res){
			// $scope.$apply();
		});

		$('.alert').toggle();
		
		$scope.newEvent = {};

		
	};



	// onclick function for creat account form
	$scope.createAccount = function(){
	 	var createAccount = {
				"firstName": $('#firstName').val(),
				"lastName": $('#lastName').val(),
				"signInEmail": $('#signInEmail').val(),
				"password": $('#createPassword').val(),
				"confirmPassword": $('#retypePassword').val()
		}
		$http.post(URL+'/create-Account', createAccount, function(){
				createAccount;
		})
		
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