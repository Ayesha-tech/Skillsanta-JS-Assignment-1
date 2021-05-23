// Write a Javascript program to reverse the string and check it is pallindrome or not


let nwstr="";
function reverse(str){
let len = str.length;
for (let i = len-1; i >=0; i--) {
    nwstr +=str[i] 
    
}
 document.write(`Reverse of ${str} is ${nwstr}`);
 document.write("<br>");

 if (str==nwstr){
     document.write(`Here ${str} is pallindrome`);
 }
 else{
    document.write(`Here ${str} is not a pallindrome`);
 }
}

reverse(prompt("Enter string"))