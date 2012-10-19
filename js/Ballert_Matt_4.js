// Author: Matt Ballert
// 10/10/2012
// Project 4
// Preparing For a New Journey In Coding

// String Manipulation (Changing Separators)
var abc = "a,b,c" + "," + "/"

var separator = function () {
		outputAbc = abc.charAt(0) + abc.charAt(6) + abc.charAt(2) + abc.charAt(6) + abc.charAt(4);
		console.log(outputAbc);
		return outputAbc
};

var showOutput = separator()

// String Manipulation (Phone Number)

var phoneNumber = function (numbers) 
	{
	phoneNum = numbers.substring(0,3) + "-" + numbers.substring(3,6) + "-" + numbers.substring(6,10);
	return phoneNum
	};
	
var thisNumber = phoneNumber("5089811474")
console.log(thisNumber)

// String Manipulation (Title Case)

var makeProper = "make me a proper title"

var	splitProper = makeProper.split(" ");
	
	makeProper = makeProper.substring(0,1).toUpperCase() + makeProper.substring(1);

var getProper = function (i) {
		for (var i = 0; i < splitProper.length; i++) {
		splitProp = splitProper[i].substring(0,1).toUpperCase() + splitProper[i].substring(1);
	};
return splitProp;
};
	
var thisProp = getProper(0)

console.log(makeProper)
console.log(thisProp)

// Numbers to Dollars

var makeDollar = function (number) {
	makeMoney = "$" + number.toFixed(2);
	return makeMoney
};

var thisIsMoney = makeDollar(158);
console.log(thisIsMoney);
