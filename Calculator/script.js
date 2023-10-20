document.addEventListener("DOMContentLoaded", function () {
    // Get display and clear button elements
    var display = document.querySelector('.display');
    var clearButton = document.querySelector('.clear');

    // Get all number and operator buttons
    var numberButtons = document.querySelectorAll('.number');
    var operatorPlus = document.querySelector('.operator-plus');
    var operatorMinus = document.querySelector('.operator-minus');
    var operatorMultiply = document.querySelector('.operator-multi');
    var operatorDivide = document.querySelector('.operator-divide');
    var operatorEqual = document.querySelector('.operator-equal');
    var operatorDot = document.querySelector('.operator-dot');

    // Variable to store the current expression
    var expression = '';

    // Add click event listeners for number buttons
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            expression += button.innerText;
            display.value = expression;
        });
    });

    // Add click event listeners for operator buttons
    operatorPlus.addEventListener('click', function () {
        expression += '+';
        display.value = expression;
    });

    operatorMinus.addEventListener('click', function () {
        expression += '-';
        display.value = expression;
    });

    operatorMultiply.addEventListener('click', function () {
        expression += '*';
        display.value = expression;
    });

    operatorDivide.addEventListener('click', function () {
        expression += '/';
        display.value = expression;
    });

    operatorDot.addEventListener('click', function () {
        expression += '.';
        display.value = expression;
    });

    // Add click event listener for the equal button
    operatorEqual.addEventListener('click', function () {
        try {
            // Evaluate the expression and display the result
            expression = eval(expression).toString();
            display.value = expression;
        } catch (error) {
            // Handle errors, e.g., division by zero
            display.value = 'Error';
        }
    });

    // Add click event listener for the clear button
    clearButton.addEventListener('click', function () {
        expression = '';
        display.value = '';
    });
});
