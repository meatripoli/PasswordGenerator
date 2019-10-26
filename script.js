///global variables
var generatePassButton = document.querySelector("#passButton");
var copyButton = document.querySelector("#copyButton");
var passTextArea = document.querySelector("#mytext");
var slider = document.querySelector("#formControlRange");
var sliderValue = document.getElementById('formControlRange').value;
var specialCharCheckbox = document.getElementById("scCheckbox");
var numberCheckbox = document.getElementById("numCheckbox");
var upperCheckbox = document.getElementById("ucCheckbox");
var lowerCheckbox = document.getElementById("lcCheckbox");

function generatePass(){
    ///stops the page from refreshing when button is pressed
    event.preventDefault();
    //random number between 8 & 132
    //picked by the user
    var passlen = document.getElementById('formControlRange').value;
    //Math.round(Math.random()* (132 - 8) + 8); 
    var randPassword = "";
    var count = 0;
    var passChar;
    while(count<passlen){
        ///check if any checkbox is selected
        if(specialCharCheckbox.checked === false && numberCheckbox.checked === false && upperCheckbox.checked === false && lowerCheckbox.checked === false){
            alert("Please select at lease one criteria for the password from the list below");
            break;
        }
        ///check if password lenght was reached
        if(count>=passlen){break;}
        ///if Special Char selected
        else if(scCheckbox.checked) {
            count++;
            ///pick number between 47 & 33
            passChar = Math.round(Math.random()* (47 - 33) + 33);
            ///convert to Ascii and concat to string
            randPassword = randPassword + String.fromCharCode(passChar);
        }
        if(count>=passlen){break;}
        else if(numberCheckbox.checked) {
            count++;
            passChar = Math.round(Math.random()* 9);
            randPassword = randPassword + passChar.toString();
        }
        if(count>=passlen){break;}
        else if(ucCheckbox.checked){
            count++;
            passChar = Math.round(Math.random()* (90 - 65) + 65);
            randPassword = randPassword + String.fromCharCode(passChar);
        }
        if(count>=passlen){break;}
        else if(lcCheckbox.checked){
            count++;
            passChar = Math.round(Math.random()* (122 - 97) + 97);
            randPassword = randPassword + String.fromCharCode(passChar);
        }   
    }
    ///pass the final password to the text area in the webpage
    passTextArea.textContent = randPassword; 
}
///selects and copies text in the textarea to clipboard
function copyText(event){
    event.preventDefault();
    passTextArea.select();
    var copiedText = document.execCommand("copy");
    console.log(copiedText);
}
///added listener to the copy & generate password buttons
copyButton.addEventListener("click",copyText);
generatePassButton.addEventListener("click",generatePass);

////////displays the number the slider is on
slider.addEventListener("change",function(){
    document.getElementById("passlenghtnum").textContent = document.getElementById('formControlRange').value;
});
