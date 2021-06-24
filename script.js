let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
function sinfunction(){
    myform.txt.value=Math.sin(myform.txt.value);
}
function cosfunction(){
    myform.txt.value=Math.cos(myform.txt.value);
}
function tanfunction(){
    myform.txt.value=Math.tan(myform.txt.value);
}
function cotfunction(){
    var one=Math.tan(myform.txt.value);
    myform.txt.value=1/one;
}
function secfunction(){
    var amit=Math.cos(myform.txt.value);
    myform.txt.value=1/amit;
}
function cosecfunction(){
    var sumit=Math.sin(myform.txt.value);
    myform.txt.value=1/sumit;
}


