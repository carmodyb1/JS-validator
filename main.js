// alert("helo world");



// Collect telephone number from user
// var telephoneInput;
// telephoneInput = prompt("Please enter your telepone number, including area code and dashes.\n\nFor example, xxx-xxx-xxxx.\n \nThis will not be used for spam.");

// if(telephoneInput.charAt(3,7)!=="-") {
// 	alert("Pleae include appropriate dashes.")
// }
// else 
//  {alert("Thank you!")
// }



// Collect birthdate from user
// var birthDate;
// birthDate = prompt("Please enter your birthdate, using the following month-day-year structure: \n\n xx/xx/xx");
// if(birthDate.charAt(2,5)==="/") {
// 	alert("Thank you!")}
// 	else {
// 	alert("Please try again!");
// }



// Collect postal code from user (expanded notation code)
// var postalCode;
// postalCode = prompt("Please enter your postal code with 5 numbers.");

// if(postalCode.length ===5) 
// {
// 	alert("Thank you!")
// }
// else 
// {
// 	alert("Please try again!");
// }



// Collect postal code from user (compressed notation style)
// var state;
// state = prompt("Please enter your 2 letter state abbreviation using capital letters.");
// if(state.length ===2&&isNaN(+state[0])&&isNaN(+state[1])&&state.toUpperCase()===state) {
// 	alert("Thank you!")
// } else {
// 	alert("Please try again!")
// }



// Determine marriage status
var married;
married = prompt("Are you married? Please answer \"yes\" or \"no\".");

if(married.toLowerCase()==="yes"||married.toLowerCase()==="no") {
	alert("Thank you!")
} else {
	alert("Please try again!");
}

// married
// must be yes or no
// may be any capitalization: YES, Yes, yes
