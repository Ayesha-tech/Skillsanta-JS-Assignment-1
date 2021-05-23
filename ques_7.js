// Write a JavaScript function to remove HTML/XML tags from
// string.

function remove(str){
    if ((str===null )||(str ==='')){
    return false;
    }
    else{
        str = str.toString();
        return str.replace(/<[^>]*>/g ,"");

    }
}
console.log(remove('<p><strong><em>SkillSantaAssignments</em></strong></p>'));
