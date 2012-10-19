// Author: Matt Ballert
// 10/10/2012
// Project 4
// Preparing For a New Journey In Coding

// String Manipulation (Changing Separators)
var abc = "a,b,c" + "," + "/"

var separator = function ()
	{
	outputAbc = abc.charAt(0) + abc.charAt(6) + abc.charAt(2) + abc.charAt(6) + abc.charAt(4);
	console.log(outputAbc);
	return outputAbc
	};

var showOutput = separator()
