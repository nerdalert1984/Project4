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

	var phoneNumber = function (numbers) {
		phoneNum = numbers.substring(0,3) + "-" + numbers.substring(3,6) + "-" + numbers.substring(6,10);
		return phoneNum
	};
	
	var thisNumber = phoneNumber("5089811474")
	console.log(thisNumber)

	// String Manipulation (Title Case)

	var makeProper = "make me a proper title"

	var	splitProper = makeProper.split(" ");
	
	var getProper = function (i) {
		for (var i = 0; i < splitProper.length; i++) {
		splitProp = splitProper[i].substring(0,1).toUpperCase() + splitProper[i].substring(1);
		};
	return splitProp;
	};
	
	var thisProp = getProper(0)

	console.log(thisProp)

	// Numbers to Dollars

	var makeDollar = function (number) {
		makeMoney = "$" + number.toFixed(2);
		return makeMoney
	};

	var thisIsMoney = makeDollar(158);
	console.log(thisIsMoney);


	// String Boolean: Am I a Website?

	var isSite = function (maybeSite) {
		if ( maybeSite.substring(0,5) == "http:" || maybeSite.substring(0,6) == "https:") {
		siteStatus = " is a website."}
		else { siteStatus = " is not a website."};
		confirmStatus = maybeSite + siteStatus;
		return confirmStatus;
		};
	
	var isItASite = isSite("http://www.facebook.com")
	console.log(isItASite);

	var notASite = isSite("Adventure Time is a great show")
	console.log(notASite);

	// Array (Find the smallest value)

	var myArray = [42, 23, 16, 4, 8, 15]

	var minArr = function (arrNum) {
		findMin = Math.min.apply(Math, arrNum);
		return findMin
	};

	var numArr = minArr(myArray);
	console.log(numArr)

