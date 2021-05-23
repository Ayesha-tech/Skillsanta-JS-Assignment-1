// WAP to take 3 number from user as input and print largest on the document


let x = parseFloat(prompt("Enter the number 1"));
let y = parseFloat(prompt("Enter the number 2"));
let z = parseFloat(prompt("Enter the number 3"));

if (x>y && x>z){
    document.write(x);
    document.write("<br>");
}
else if (y>x && y>z){
    document.write(y);
    document.write("<br>");

}
else if(z>x && z>y){
    document.write(z);
    document.write("<br>");
}
else{
    
    document.write("Please enter 3 different number!");
}