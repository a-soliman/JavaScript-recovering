// === Introduction === 01

// getName()


// function getName(yourName) {

// 	var yourName = prompt("What is your name?");

// 	if (yourName != null && yourName.length > 3) {
// 		document.getElementById("sayHello").innerHTML = "Hello " + yourName
// 	} else {
// 		alert("Please enter a name?")
// 		getName()
// 	}

// }
// =======================================================================
// === Math === 02

// document.write("5 + 4 = " , 5 + 4, "<br />");
// document.write("5 - 4 = " , 5 - 4, "<br />");
// document.write("5 * 4 = " , 5 * 4, "<br />");
// document.write("5 / 4 = " , 5 / 4, "<br />");
// document.write("5 % 4 = " , 5 % 4, "<br />");

// 	//max number that could be stored && min number
// document.write("Max Num = " , Number.MAX_VALUE, "<br />");
// document.write("Min Num = " , Number.MIN_VALUE, "<br />");

// 	// Prescision (maximum of 16# could be stored in any programming lanuage)

// prescisionTest = 0.1000000000000001;
// document.write(prescisionTest + 0.1000000000000001, "<br/>")

// 	//toFixed(#)
// var balance = 1563.87; 
// document.write("Monthly Payment : ", (balance / 12).toFixed(2), "<br />")

// 	//Order of operations
// document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br />")
// document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br />")

// 	//rounding up
// document.write("Math.ceil (6.65) = ", Math.ceil(6.65), "<br />")

// 	//rounding down
// document.write("Math.floor (6.65) = ", Math.floor(6.65), "<br />")

// document.write("Math.max (10,5) = ", Math.max (10,5), "<br />")

// 	//converting a string into a number 
// document.write("converting string : ", Number("3.14") + 5, "<br />")
// =======================================================================

// === STRINGS === 03

// var randString = "A long " + "String that " + "goes on and on";

// 	//length
// document.write("String Length ", randString.length , "<br />")

// 	//indexOf
// document.write("Index for \"goes\" : ", randString.indexOf("goes") , "<br />")

// 	//slice() & substr()
// document.write("Slice 19 to 23 : " ,randString.slice(19, 23) , "<br />")
// document.write("Slice from 19 : " ,randString.slice(19) , "<br />")
// document.write("substr from 19 ==> 4chr : " ,randString.substr(19, 4) , "<br />")


// 	// replacing part of a string
// document.write("replacing : " ,randString.replace("and on", "forever") , "<br />")
