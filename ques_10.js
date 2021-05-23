//Write a JS function to find out the number of vowels from user  user unput string
let c1=0,c2=0,c3=0,c4=0,c5=0,c6=0;
function counting(str){
    for(let i=0; i<str.length ; i++){
        if (str[i]==='a' || str[i]==='A'){
            c1+=1;
        }
        else if (str[i]=='e' || str[i]=='E'){
            c2+=1;
        }
        else if (str[i]=='i' || str[i]=='I'){
            c3+=1;
        }
        else if (str[i]=='o' || str[i]=='O'){
            c4+=1;
        }
        else if (str[i]=='u' || str[i]=='U'){
            c5+=1;
        }
        else{
            c6+=1;
        }
    }
    if (c1>=1){
        console.log(`A: ${c1}`);
        
     }
    if (c2>=1){
        console.log(`E: ${c2}`);
    }
    if (c3>=1){
        console.log(`I: ${c3}`);
    }
    if (c4>=1){
        console.log(`O: ${c4}`);
    }
    if (c5>=1){
        console.log(`U: ${c5}`);
    }
}
counting("Hey This is Skillsanta JS Training");
