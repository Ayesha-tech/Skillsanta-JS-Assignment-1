// Write a JavaScript program function to convert temperatures
// from Celsius, Fahrenheit and Fahrenheit to Celsius as per user
// arguments provide in functions.

function convert( option , value){
    if (option ==1){

        let far = ((value*9)/5) +32;

        document.write(`Value of temperature in fahrenheit is ${far}`);
    }
    else if (option==2){
        let cal = ((value-32)*5)/9;
        document.write(`Value of temperature in celsius is ${cal}`);
    }
    else{
        document.write("Please select valid option")
    }
}
let option = prompt("Enter 1 for celcius to fahrenheit and 2 for fahrenheit to celsius");
let value = parseFloat(prompt("Enter the value for conversion"));

convert(option,value);