// Write a Javasript program to check given number is within range of 50-100 or not



function check(value){
    if(value >=50 && value<=100){
        document.write(`${value} is within range of 50-100`)
    }
    else{
        document.write(`${value} is beyond range of 50-100`)
    }

}

check(parseFloat(prompt("Enter teh value to check its range")))