//Write a JS function and ask for user DOB ex: 10/June/1998 and if
// user age is between 18 to 44 then this link should be open
// automatically in browser “https://selfregistration.cowin.gov.in”.


let dob =prompt("Enter dob in dd/mm/yyyy pattern");
 
let sp = dob.split("/");
      
var yr = sp[2];  


var year = parseInt(yr);

var now = new Date();  
    
var currentYear = now.getFullYear();  

let d = currentYear-year;

if (d >= 18 && d <=44) {

    window.open('https://selfregistration.cowin.gov.in');

}
else{

    document.write("You are not eligible for registration now wait for some days!");
}
