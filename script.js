/*
- create a var that picks a random length of the pass between 1 & 125
- then add 7 so its between 8 & 132
- loop of Math.random().toString(36).substring(2,3) until the 
    length of the pass = length of random number
- 33-47 58-64 91-96 123-126 special character
- 48-57 number
- 65-90 uppercase letters
- 97-122 lowercase letters

*/
var generatePassButton = document.querySelector("#passButton");
var copyButton = document.querySelector("#copyButton");
var passTextArea = document.querySelector("#mytext");

function generatePass(event){
    event.preventDefault();
    var passlen = Math.round(Math.random()* (132 - 8) + 8) ;//random number between 8 & 132
    var randPassword = "";
    var specialCharCount = 0;
    var numberCount = 0;
    var upperCount = 0;
    var lowerCount = 0;
    for (var i=0; i<passlen; i++){
        var passChar = Math.round(Math.random()* (126 - 33) + 33);
        randPassword = randPassword + String.fromCharCode(passChar);
        if(passChar>=48 && passChar<=57){
            numberCount++;
        }
        else if(passChar>=65 && passChar<=90){
            upperCount++;
        }
        else if(passChar>=97 && passChar<=122){
            lowerCount++;
        }
        else if((passChar>=33 && passChar<=47)||(passChar>=58 && passChar<=64)
        ||(passChar>=91 && passChar<=96)||(passChar>=123 && passChar<=126)){
            specialCharCount++;
        }
    }
    passTextArea.textContent = randPassword;
    console.log( "Numbers count: "+numberCount);
    console.log( "Upper case letters count: "+upperCount);
    console.log( "Lower case letters count: "+upperCount);
    console.log( "Special character count: "+specialCharCount);
    console.log( "Password length: "+randPassword.length);   
}
function copyText(event){
    event.preventDefault();
    passTextArea.select();
    var copiedText = document.execCommand("copy");
    console.log(copiedText);
}

copyButton.addEventListener("click",copyText);
generatePassButton.addEventListener("click",generatePass);
