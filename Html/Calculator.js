function appendToDisplay(value) {
            let display = document.getElementById('display');
            if (display.innerText === '0' && value !== '.') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }

        function calculateResult() {
            let display = document.getElementById('display');
            display.innerText = eval(display.innerText);
        }

        function clearDisplay() {
            let display = document.getElementById('display');
            display.innerText = '0';
        }