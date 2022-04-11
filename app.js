
// Q No 1

/*
var fname = prompt("Enter First Name ");
var lname = prompt(" Enter Last Name ");
var space = " ";
var a = fname + space + lname;
document.write(a);
*/


// Q No 2
/*
var mobile = prompt(" Enter Your Favourite Mobile Phone ");
var a = mobile.length;
document.write("My Favorite Phone is : " + mobile + "<br>" + "Length of String : " + a);
*/




//Q No 3
/*
var citizen = "Pakistani";
var a = citizen.search("n");
document.write("String : " + citizen + "<br>" + "Index of 'n' : "   + a);
*/



//Q No 4
 /*
 var word = "Hello World";
 var a = word.lastIndexOf("l");
 document.write("String : " + word + "<br>" + "Last Index of 'l' : "   + a);
 */



//Q No 5

/*
 var citizen = "Pakistani";
 var a = citizen.charAt("3");
 document.write("String : " + citizen + "<br>" + "Character at Index 3 : "   + a);
 */
 

// Q No 6
/*
var fname = prompt("Enter First Name ");
var lname = prompt(" Enter Last Name ");
var space = " ";
var a = fname.concat(space, lname);
document.write(a);
*/

//Q No 7
/*
var city = "Hyderabad";
var a = city.replace("Hyderabad", "Islamabad");
document.write("String : " + city + "<br>" + "After Replacement : "   + a);
*/

 //Q No 8
/*
var message = "Ali and Sami are best friends. They play cricket and football together.";
var a = message.replace(/and/g, "&");
document.write("Message : " + message + "<br>" + "After Replacement : "   + a);
*/

//Q No 9
/*
var string = "472";
var a = Number(string);
//document.write(a + 90);
document.write("Value : " + string + "<br>" + "Type : String" + "<br>" + "Value : " + a + "<br>" + 
"Type : Number" + "<br>");
*/

//Q No 10
/*
var user = prompt("Enter Anything ");
var a = user.toUpperCase();
document.write(a);
*/


//Q No 11
/*
var user = prompt("Enter Anything ");
var a = user.charAt(0).toUpperCase() + user.slice(1);
document.write(a)+;
*/

//Q No 12
/*
var user = 35.36;
var a = user.toString();
document.write(a);
*/



//Q No 15
/*
var str=prompt("User name");
var split=str.split("");
for(i=0;i<split.length;i++){
    var ch = str.charCodeAt(i);
    if((ch>0 && ch<=47)||(ch>=58 && ch<=64)|| (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
    {alert("Please enter a valid username")}
}*/


//Q No 16
/*
var university = "University of Karachi";
var a = university.split("");
document.write(a);*/



//Q No 17
/*
var user = prompt("Enter Anything ");
var a = user.charAt(user.length-1);
document.write(a);
*/



//Q No 18
/*
var str = "The quick brown fox jumps over the lazy dog";
var a = (str.toLowerCase().match(/the/g) || []).length;
document.write("Text : "+ str + "<br>" + " There are " + a + " occurrence(s) of word 'the' ");
*/