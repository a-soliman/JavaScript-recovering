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

// 	//Random Number generationg
// document.write("Random # (1-10) = ", Math.floor(Math.random() * 10), "<br />")

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

// 	// catAt()
// document.write("charAt(0) || at index 0 : " ,randString.charAt(0) , "<br />")

// 	// split() ==> spliting a string into an ARRAY
// var randStringArray = randString.split(" ")
// console.log(randStringArray)

// 	// trim() ==> removes spaces from begining and ending of a string
// randString = randString.trim()

// 	//toUpperCase() && toLowerCase()
// document.write("toUpperCase : " ,randString.toUpperCase() , "<br />")
// document.write("toLowerCase : " ,randString.toLowerCase() , "<br />")

// =======================================================================
// === Conditionals (IF) === 04

 // relational Operators : === == != > < >= <=
 // logical Operators && || !

 	// whereToGo()

// function whereToGo() {
// 	 var age = prompt("How old are you?");

// 	 if (age >= 5 && age <= 6){
// 	 	document.write("Go to Kindergarden" + "<br />")
// 	 } else if(age > 18){
// 	 	document.write("Go to colage" + "<br />")
// 	 } else if (age == 0 || age == null) {
// 	 	whereToGo()
// 	 } 
// 	 else if (age -2 <= 1 ) {
// 	 		document.write("Go Drink some Milk" + "<br />")	
// 	 } else {
// 	 	document.write("Go to Grade", age - 5, "<br />")
// 	 }

//  }

// =====================================================================
// === Switch statment === 05
//				{{if you have a limited number of petential options}}

// var age = 5;

// switch(age) {
// 	case 6 : 
// 	case 5 :
// 		document.write("Go to Kindergarden" + "<br />")
// 		break;

// 	case 7 :
// 		document.write("Go to Grade" + "<br />")
// 		break;

// 	default :
// 		document.write("Subtract 5 from your age" + "<br />")
// 		break;
// }


// =====================================================================
// === LOOPING === 06
	//==WHILE LOOP==
	// var i = 0;
	// while(i <= 10) {
	// 	document.write(i + "<br />");
	// 	i++;
	// }
		// ===========================================

	// //==DO-WHILE LOOP===
	// do{
	// 	var guess =prompt("What is the number (1-20?")
	// }while(guess != 15)

	// alert("You guessed 15!")

		// ===========================================

	//==FOR LOOP==
	// for (var j = 0; j <= 20; j++) {
	// 	if ((j %2) === 0) {
	// 		continue;
	// 	}
	// 	if(j === 15) {
	// 		break;
	// 	}
	// 	document.write(j + "<br />")
	// }
	// // ===========================================
	// var customer = {name: "Bob", address: "123 Main", balance: 50.50};

	// for(k in customer) {
	// 	document.write(customer[k] + "<br />")
	// }

// =====================================================================

// === ARRAYS === 07

// var tomSmith = ["Tom Smith", "123 Main", 120.50];

// document.write("1ST index: " + tomSmith[0] + "<br />")

// tomSmith[3] ="t.smoth@mail.com";

// //splice() to add to the array 
// tomSmith.splice(2, 1, "Pittsburg", "PA")

// tomSmith.splice(4, 1);

// document.write("Array toString(): " + tomSmith.toString() + "<br />")

// //join() to convert an array into string ((you can specify a comme of a space between))

// document.write("Array (join): " + tomSmith.join(", ") + "<br />")

// //delete()
// delete tomSmith[3];

// //sorting an array
// document.write("sorting alphpiticlly : " + tomSmith.sort() + "<br />")

// //Reversing an array
// document.write("reversing alphpiticlly : " + tomSmith.reverse() + "<br />")

// //sorting a number an array
// var numbers = [4, 3, 9, 20, 120]
// document.write("sorting A number : " + numbers.sort(function(x,y){ return x-y}) + "<br />")

// //reversing a number an array
// var numbers = [4, 3, 9, 20, 120]
// document.write("reversing A number : " + numbers.sort(function(y,x){ return x-y}) + "<br />")

// //using .concat()

// var cominedArray = tomSmith.concat(numbers)
// document.write("cominedArray : " + cominedArray + "<br />")

// //using pop() || push() || shift() || unshift()
// tomSmith.pop();
// tomSmith.push("555-1212", "US");
// tomSmith.shift();
// tomSmith.unshift("Tom Smith")

// for(i = 0; i < tomSmith.length; i++) {
// 	document.write(tomSmith[i], "<br />")
// }


// =====================================================================

// === FUNCTIONS === 08

	// afunction to check if the array contains a specific value
	// 	function inArray(arrayToCheck, value) {
	// 		for(i =0; i < arrayToCheck.length; i++) {
	// 			if(arrayToCheck[i] === value) {
	// 				return true;
	// 			}
	// 		}

	// 		return false;
	// 	}
	// 	var randArray = [1,2,3,4,5]
	// 	document.write("in Array :", inArray(randArray, 4), "<br />")

	// 	// ====================================

	// // afunction to multyply by 2

	// 	function times2(num) {
	// 		var var2 = 2;

	// 		return num * var2;
	// 	}
	// 	document.write(" 10 times 2 : " + times2(10) + "<br />")

	// // ====================================

	// // afunction to multyply by 3

	// 	function times3(num) {
	// 		var var3 = 3;

	// 		return num * var3;
	// 	}
	// 	document.write(" 10 times 3 : " + times2(10) + "<br />")

	// // ====================================

	// // a function as a parameter for other function

	// 	function multiply(func, num) {
	// 		return func(num);
	// 	}
	// 	document.write(" multiply : " + multiply(times2, 12) + "<br />")

	// // ====================================

	// // a function to count the sum

	// 	function getSum() {
	// 		var sum = 0
	// 		for(i = 0; i < arguments.length; i++) {

	// 			sum += arguments[i];
	// 		}
	// 		return sum;
	// 	}
		
	// 	document.write("SUM = " + getSum(1,2,10,4,5,6), "<br />")

	// 	// ====================================

	// 	// Recall-self functions

	// 	function factorial(num) {
	// 		if (num <= 1) {
	// 			return 1;
	// 		} else {
	// 			return num * factorial(num-1); 
	// 		}
	// 	}

	// 	document.write("Factorial of 4 = " + factorial(4) + "<br />")

	// =====================================================================

// === Event Handlinng === 09
	//== onclick, 
	//== onmouseover, 
	//== onmoseout, 
	//== onmousrdown, 
	//== onmouseup,
	//== ondblclick
	//== onchange
// function openAlert(mess) {
// 	alert(mess);
// }

// function getChar(event) {
// 	//handels IE
// 	if(event.whitch == null) {
// 		return String.fromCharCode(event.keyCode)
// 	} 
// 		//handels everyOther Browser
// 	else if (event.whitch != 0 && event.charCode != 0) {
// 		return String.fromCharCode(event.whitch);
// 	} else {
// 		return null;
// 	}
// }
// 	// === onkeypress == 
// 	document.getElementById('charInput').onkeypress = function(event) {
// 		var char = getChar = getChar(event || window.event)
// 		if(!char) return false;

// 		document.getElementById('keyData').innerHTML = char + " was clicked";
// 		return true;
// 	}

// 	//onfocus
// 	// somthing happens on focus
// 	document.getElementById('charInput').onfocus =function(event) {
// 		document.getElementById('keyData').innerHTML = "input gaied focus";
// 	}

// 	// onselect
// 	document.getElementById('charInput').onselect =function(event) {
// 		document.getElementById('keyData').innerHTML = "selecting text";
// 	}

// 	// onclick
// 	document.getElementById('logoButton').onclick =function(event) {
// 		document.getElementById('logo').className = "show";
// 	}
// 	document.getElementById('logo').onclick =function(event) {
// 		document.getElementById('logo').className = "hidden";
// 	}

// 	// onclick
// 	document.getElementById('logo').onmouseover =function(event) {
// 		document.getElementById('logo').src = "ntt-logo-horz.png";
// 		document.getElementById('mouseInput').value = "Mouse over image";
// 	}

// 	document.getElementById('logo').onmouseout =function(event) {
// 		document.getElementById('logo').src = "ntt-logo.png";
// 		document.getElementById('mouseInput').value = "Mouse left";
// 	}

// 	// == identifing the mouse position through knowing its X, and Y valuses
// 	document.body.onmousemove = function(e) {
// 		e = e || window.event;

// 		var pageX = e.pageX;
// 		var pageY = e.pageY;

// 		if(pageX === undefined) {
// 			pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;

// 			pageY = e.clientX + document.body.scrollTop + document.documentElement.scrollTop;
// 		}

// 		document.getElementById('mouseX').value = pageX;
// 		document.getElementById('mouseY').value = pageY;
// 	}

// 	//== CLEARING ALL THE INPUTS
// 	document.getElementById('clearInputs').onclick = function(event) {
	
// 	var inputElements = document.getElementsByTagName('input');

// 	for(var i = 0; i <inputElements.length; i++) {
// 		if (inputElements[i].type == "text") {
// 			inputElements[i].value = "";
// 		}
// 	}
// 	}


// =====================================================================

// === STYLING === 10

// document.getElementById('chgBkColor').onclick = function(event) {
// 	document.getElementById('sampDiv').style.backgroundColor = "#EFDECD";

// }

// document.getElementById('chgBkImg').onclick = function(event) {
// 	document.getElementById('sampDiv').style.backgroundImage = "url('bla-bla.png')";
	
// }

// document.getElementById('chgBorderStyle').onclck = function(event) {
// 	document.getElementById('sampDiv').style.borderStyle = "solid"

// }

// document.getElementById('chgBorderWidth').onclick = function(event) {
// 	document.getElementById('sampDiv').style.borderWidth = "thick"

// }

// document.getElementById('chgBorderColor').onclick = function(event) {
// 	document.getElementById('sampDiv').style.borderColor = "blue"

// }

// =====================================================================

// === Manubulationg the DOM === 11
	// finding the current((location))
// document.write('Current URL : ', window.location.href, "<br />")

// 	//getting the host name
// document.write('Current HOST : ', window.location.hostname, "<br />")

// 	// getting the path
// document.write('Current Path : ', window.location.pathname, "<br />")

// 	// change the site on a button click
// document.getElementById('goToGoogle').onclick = function(event) {
// 	window.location.href = "http://google.com"

// }

// 	// forward
// document.getElementById('forwardPage').onclick = function(event) {
// 	history.forward();
// }

// 	// back
// document.getElementById('backPage').onclick = function(event) {
// 	history.back();
// }

// 	// reload
// document.getElementById('reload').onclick = function(event) {
// 	window.location.reload(true);
// }

//====================STYLING DOM ELEMNTS===========================
						// 12
	// targetting all the p elements and storing them in an ARRAY
// var pElements = document.getElementsByTagName('p'); 
// pElements[1].style.backgroundColor = 'lightblue';
	
// 	//targetting the childNodes of the document
// document.childNodes[1].style.backgroundColor = "yellow"

// 	// more with childNodes 
// var sampDiv2 = document.getElementById('sampDiv2');
// sampDiv2.childNodes[0].style.backgroundColor = 'blue'

// sampDiv2.childNodes[0].childNodes[1].style.backgroundColor = "orange";

// 	// Working with ATTRIBUTES
// var nttLogo2 = document.getElementById('logo2')

// document.write("Logo has alt : ", nttLogo2.hasAttribute("alt"), "<br />")

// nttLogo2.setAttribute("alt", "Ntt Logo2")

// document.write("Logo has alt : ", nttLogo2.getAttribute("alt"), "<br />")


// var attibList = document.getElementById('logo2').attributes;

// for(var i = 0; i < attibList.length; i++) {
// 	document.write("Attribute ", i, " : ", attibList[i].nodeName, " : ", attibList[i].nodeValue, "<br />")
// }

// 	// adding an element

// var paragraph3 = document.createElement('p');
// paragraph3.setAttribute("id", "paragraph3")
// paragraph3.innerHTML = "I created This paragraph using JavaScript";

// sampDiv2.appendChild(paragraph3)


//======================================================================

	// Object Orianted JavaScript

// var cust1  = {
// 	name: "John Smith",
// 	street: "123 Main",
// 	city: "San Francisco",
// 	state: "CA",
// 	email: "jsmith@mail.com",
// 	balance: 120.50,
// 	payDownBal: function(amtPaid) {
// 		this.balance -= amtPaid;
// 	},
// 	addToBal: function(amtCharged) {
// 		this.balance += amtCharged;
// 	}
// };
	
// 	//accessing prop
// document.write("Customer Name : ",cust1.name, "<br />")

// 	//changing prop

// cust1.street = "215 Main";
// document.write("Customer street : ", cust1.street, "<br />")

// 	//adding prop
// cust1.country = "US";
// document.write("Customer country : ", cust1.country, "<be />")

// 	//deleting prop
// delete cust1.country;

// 	//looping throught the props
// for(var prop in cust1) {
// 	if(cust1.hasOwnProperty(prop)) {
// 		document.write(prop,"<br />")
// 	}
// }

// 	// check if a prop is existing within an object
// document.write("name in cust1 : ", "name" in cust1, "<br />")


// 	i//interusct with an object using a function
// functon getInfo(cust) {
// 	return cust1.name + " lives at " + cust1.street + " in " + cust1.city +
// 	" " + cust1.state + " EMAIL : " + cust1.email + " and he has a balance of $" +
// 	cust1.balance + "."
// }

// document.write(getInfo(cust1), "<br />")

// 	// call methods
// cust1.payDownBal(20.50);

// cust1.addToBal(10.00);

// document.write(getInfo(cust1), "<br />")

// //=========================================================
// 	// Genaric OBJECTS

// function Customer(name, street, city, state, email, balance) {
// 	this.name = name
// 	this.street = street
// 	this.city = city
// 	this.state = state
// 	this.email = email
// 	this.balance = balance
// 	this.payDownBal = function(amtPaid) {
// 		this.balance -= amtPaid;
// 	}
// 	this.addToBal = function(amtCharged) {
// 		this.balance += amtCharged
// 	}
// }

// 	// creating customized object based on the genric object

// var cust2 = new Customer("Sally Smith", "214 Phillips", "San Francisco", "CA", "sally@gmail.com", 0.00);

// cust2.addToBal(15.40)


// 	// static Variables {{value that wll be added to all the customized object ((regardLESS))}} 

// Customer.prototype.isCreditAvail = true;

// Customer.prototype.toString = function() {
// 	return this.name + " lives at " + this.street + " in " + this.city +
// 	" " + this.state + " EMAIL : " + this.email + " and he has a balance of $" +
// 	this.balance.toFixed(2) + " Credit worthy " + this.isCreditAvail +"."
// }	

// document.write(cust2.toString(), "<br />")

//==============================================================================
	//=== FORM VALIDATION ===

// function editNodeText(regex, input, helpId, helpMessage) {
// 	if(!regex.test(input)) {
// 		if(helpId != null)
// 			while(helpId.childNodes[0]) {
// 				helpId.removeChild(helpId.childNodes[0])
// 			}
// 			helpId.appendChild(document.createTextNode(helpMessage))
// 	} else {
// 		if(helpId != null) {
// 			while(helpId.childNodes[0]) {
// 				helpId.removeChild(helpId.childNodes[0])
// 			}
// 		}
// 	}
// }

// function isFiledEmpty(inputField, helpId) {
// 	return editNodeText(/^([A-Za-z]{2,40}[ éàë]{0,40})$/, inputField.value, helpId, "Please enter a valid name")
// }

//==============================================================================
	//=== Exption Handling ===

