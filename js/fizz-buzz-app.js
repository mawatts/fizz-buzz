$(document).ready(function() {
	startFizzBuzz();
	resetFizzBuzz();
});

function startFizzBuzz() {
	$('.startButton').click(function() {
		if((document.getElementById("results").value == "") || (document.getElementById("results").value == null)) {
			/*var x = 0;*/
			for (var i = 0; i <= 100; i++) {
				if (i % 3 == 0 && i % 5 == 0) {
					x = "Fizz Buzz";
				}
				else if (i % 3 == 0) {
					x = "Fizz";
				}
				else if (i % 5 == 0) {
					x = "Buzz";
				}
				else {
					x = i;
				}

				if (i == 100) {
					document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + x + ".";
				}
				else {
					document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + x + ", ";
				}
			}
		}
		else {
			swal({
				title: "Error!",
				text: "Click the Reset button to clear the Text Area and start over",
				type: "error",
				confirmButtonText: "Close",
				confirmButtonColor: "#FF9100"
			});		
		}
	});
}

function resetFizzBuzz() {
	$('.resetButton').click(function() {
    	i = 0;
    	x = 0;
    	document.getElementById("results").innerHTML = "";
	});
}