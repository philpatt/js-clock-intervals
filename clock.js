document.addEventListener("DOMContentLoaded", function(event){



	var sec = document.getElementById("second");
	var min = document.getElementById ("minute");
	var hr = document.getElementById ("hour");

	var currentsec1 = 0;
	var currentsec2 = 0;
	var currentsec3 = 0;
 
	function second(){
		currentsec1 += 6;
		sec.style.transform = "rotate(" + currentsec1 + "deg)";
	};

	function minute(){
		console.log("hooray!");
		currentsec2 += 6;
		min.style.transform = "rotate(" + currentsec2 + "deg)";
	};

	function hour(){
		console.log("YES");
		currentsec3 += 30;
		hr.style.transform = "rotate(" + currentsec3 + "deg)";
	};

	setInterval(second, 1000);
	setInterval(minute,1000);
	setInterval(hour, 1000);


})

