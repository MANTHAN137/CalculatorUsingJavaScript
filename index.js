let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let inputValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText)
        if (buttonText == "X") {
            buttonText = "*"
            inputValue += buttonText;
            screen.value = inputValue;


        } else if (buttonText == "C") {
            inputValue=""
            screen.value = inputValue;

        } else if (buttonText == "=") {
            screen.value = eval(inputValue);
        } else {
            inputValue += buttonText;
            screen.value = inputValue;
        }
    })
}