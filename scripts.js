function multiplier() {
    // Get the values from the input fields
    var multiplicand = document.getElementById("number1").value;
    var multiplicator = document.getElementById("number2").value;

    // Convert the values to numbers
    multiplicand = parseFloat(multiplicand);
    multiplicator = parseFloat(multiplicator);

    // Check if the values are valid numbers
    if (isNaN(multiplicand) || isNaN(multiplicator)) {
        // If either value is not a number, show an error message
        document.getElementById("output").innerText = "Please enter valid numbers.";
    } else {
        var outputText = ""; // Initialize an empty string to store the output

        // Generate repeated sequence of the first number with 'x' between each number
        for (let index = 0; index < multiplicator; index++) {
            // Add multiplicand to outputText
            outputText += multiplicand;

            // If it's not the last iteration, add 'x'
            if (index < multiplicator - 1) {
                outputText += ' ';
            }
        }

        // Set the concatenated string as the inner text of the output element
        document.getElementById("output").innerText = outputText;
    }
}

function exponents() {
    // Get the values from the input fields
    var leftNumber = document.getElementById("number1").value;
    var rightNumber = document.getElementById("number2").value;

    // Convert the values to numbers
    leftNumber = parseFloat(leftNumber);
    rightNumber = parseFloat(rightNumber);

    // Check if the values are valid numbers
    if (isNaN(leftNumber) || isNaN(rightNumber)) {
        // If either value is not a number, show an error message
        document.getElementById("output").innerText = "Please enter valid numbers.";
    } else {
        var outputText = ""; // Initialize an empty string to store the output

        // Generate repeated sequence of the first number with 'x' between each number
        for (let index = 0; index < rightNumber; index++) {
            // Add leftNumber to outputText
            outputText += leftNumber;

            // If it's not the last iteration, add 'x'
            if (index < rightNumber - 1) {
                outputText += ' × ';
            }
        }

        // Set the concatenated string as the inner text of the output element
        document.getElementById("output").innerText = outputText;
    }
}

function findPrimes() {
    var number = parseInt(document.getElementById("number1").value);
    var primes = [];

    for (var i = 2; i <= number; i++) {
        var isPrime = true;

        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    displayPrimesWithDelay(primes);
}

function displayPrimesWithDelay(primes) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    var index = 0;

    function displayNextPrime() {
        if (index < primes.length) {
            outputDiv.innerText += primes[index];
            delay = primes[index+1] * 1000;
            index++;
            if (index < primes.length) {
                outputDiv.innerText += ", ";
            }
            setTimeout(displayNextPrime, delay); // Delay in milliseconds
        }
    }

    displayNextPrime();
}

function calculateExponent() {
    var base = parseFloat(document.getElementById("number1").value);
    var exponent = parseFloat(document.getElementById("number2").value);
    var result = Math.pow(base, exponent);

    // Display the result with some cool effects
    displayResultWithEffects(result);
}

function displayResultWithEffects(result) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    var steps = 200; // Number of steps for the animation
    var delay = 30; // Delay in milliseconds between each step

    // Calculate the step value for the animation
    var stepValue = result / steps;

    // Initialize the current value
    var currentValue = 0;

    // Perform the animation
    for (var i = 0; i <= steps; i++) {
        setTimeout(displayStep, i * delay);

        // Function to display each step with a delay
        function displayStep() {
            var variation = 0;
            if (Math.random() < 0.5) { // Randomly choose to add or subtract variation
                variation = Math.random() * 0.01 * result; // Randomly vary up to 1% of the result
            } else {
                variation = -Math.random() * 0.01 * result; // Randomly vary up to 1% of the result
            }
            var valueToShow = numberWithCommas((currentValue + variation).toFixed(2)); // Apply variation and format with commas
            outputDiv.innerText = valueToShow;
            currentValue += stepValue;
        }
    }
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function factorial() {
    let number = document.getElementById("number1").value;
    number = parseFloat(number);

    let factorialString = "1";

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    for (let i = 2; i <= number; i++) {
        let delay = Math.random() * 750; // Random delay in milliseconds
        setTimeout(displayNumber, (i - 1) * delay, i);
    }

    function displayNumber(i) {
        factorialString += " * " + i;
        outputDiv.innerText = factorialString;
    }
}

function generateNonsensicalSequence() {
    var inputNumber = parseInt(document.getElementById("number1").value);
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    if (isNaN(inputNumber)) {
        outputDiv.innerText = "Please enter a valid number.";
        return;
    }

    var sequence = [];

    for (var i = 0; i < inputNumber; i++) {
        sequence.push(Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 1000)); // Generate random numbers between 0 and 11000
    }

    // Clear previous animation classes
    outputDiv.className = "";

    // Generate random positions for each number
    var positions = [];
    for (var j = 0; j < inputNumber; j++) {
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        positions.push({ x: x, y: y });
    }

    // Create and append number elements with animation
    sequence.forEach((number, index) => {
        var numberElement = document.createElement("div");
        numberElement.classList.add("number");
        numberElement.textContent = number;
        numberElement.style.left = positions[index].x + "px";
        numberElement.style.top = positions[index].y + "px";
        outputDiv.appendChild(numberElement);
    });

    // Trigger CSS animation
    outputDiv.offsetWidth; // Force reflow
    outputDiv.classList.add("animate");
}

// Function to decompose a fraction into a sum of random fractions
function decomposeFraction() {
    // Get the input values
    let numerator = parseInt(document.getElementById("numerator").value.trim());
    let denominator = parseInt(document.getElementById("denominator").value.trim());

    // Validate the input
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        document.getElementById("output").innerText = "Invalid input. Please enter valid numerator and denominator.";
        return;
    }

    // Generate the random decomposition
    let decomposition = generateRandomDecomposition(numerator, denominator);

    // Display the decomposition
    displayFractionDecomposition(decomposition);
}

// Function to display the decomposition of a fraction
function displayFractionDecomposition(decomposition) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    // Construct the decomposition string
    let decompositionString = decomposition.join(" + ");

    // Display the decomposition string
    outputDiv.textContent = decompositionString;
}

// Generate a random decomposition of a fraction
function generateRandomDecomposition(numerator, denominator) {
    let decomposition = [];

    // Start with the numerator and randomly decompose it
    let remainingNumerator = numerator;
    while (remainingNumerator > 0) {
        // Generate a random denominator between 2 and 10 (inclusive)
        let randomDenominator = Math.floor(Math.random() * 9) + 2;

        // Generate a random numerator between 1 and the remaining numerator (inclusive)
        let randomNumerator = Math.min(remainingNumerator, Math.floor(Math.random() * remainingNumerator) + 1);

        // Add the fraction to the decomposition
        decomposition.push(`${randomNumerator}/${randomDenominator}`);

        // Update the remaining numerator
        remainingNumerator -= randomNumerator;
    }

    // Ensure that the fractions add up to the original input fraction
    let sum = decomposition.reduce((acc, curr) => {
        let [num, denom] = curr.split("/");
        return acc + (parseInt(num) / parseInt(denom));
    }, 0);

    let remainingFraction = (numerator / denominator) - sum;
    let remainingNumeratorFinal = Math.round(remainingFraction * denominator); // Round the remaining numerator accurately
    decomposition.push(`${remainingNumeratorFinal}/${denominator}`);

    return decomposition;
}

// Function to decompose a complex number into a sum of random complex numbers
function decomposeComplexNumber() {
    // Get the input value
    let complexNumberInput = document.getElementById("complexNumber").value.trim();

    // Validate the input
    if (!isValidComplexNumber(complexNumberInput)) {
        document.getElementById("output").innerText = "Invalid input. Please enter a valid complex number.";
        return;
    }

    // Parse the input into real and imaginary parts
    let [realPart, imaginaryPart] = parseComplexNumber(complexNumberInput);

    // Generate the decomposition
    let decomposition = generateRandomComplexDecomposition(realPart, imaginaryPart);

    // Display the decomposition
    displayComplexDecomposition(decomposition);
}

// Function to validate the input as a complex number
function isValidComplexNumber(input) {
    // Regular expression to match a complex number in the format a+bi
    let regex = /^[-+]?\d*\.?\d*\s*[+-]\s*\d*\.?\d*i$/;
    return regex.test(input);
}

// Function to parse the complex number into real and imaginary parts
function parseComplexNumber(input) {
    // Extract the real and imaginary parts using regular expression
    let regex = /^([-+]?\d*\.?\d*)\s*([+-])\s*(\d*\.?\d*)i$/;
    let match = input.match(regex);

    // Get real and imaginary parts from the match groups
    let realPart = parseFloat(match[1]);
    let imaginaryPart = parseFloat(match[3]);

    // Adjust the sign of the imaginary part
    if (match[2] === '-') {
        imaginaryPart = -imaginaryPart;
    }

    return [realPart, imaginaryPart];
}

// Function to generate a random decomposition of a complex number
function generateRandomComplexDecomposition(realPart, imaginaryPart) {
    // Generate random coefficients for the decomposition
    let coefficient1 = Math.random();
    let coefficient2 = 1 - coefficient1;

    // Calculate the decomposition
    let decomposition1 = `${(realPart * coefficient1).toFixed(2)} + ${(imaginaryPart * coefficient1).toFixed(2)}i`;
    let decomposition2 = `${(realPart * coefficient2).toFixed(2)} + ${(imaginaryPart * coefficient2).toFixed(2)}i`;

    return [decomposition1, decomposition2];
}

// Function to display the decomposition
function displayComplexDecomposition(decomposition) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    for (let i = 0; i < decomposition.length; i++) {
        outputDiv.innerHTML += `Decomposition ${i + 1}: ${decomposition[i]}<br>`;
    }
}



function startCounting() {
    // Get the sand counter element
    const sandCounterElement = document.getElementById("output");

    // Display a message indicating counting is in progress
    sandCounterElement.textContent = "Counting grains of sand... 🏖️";

    // Set an interval to keep adding more sand to count every second
    let sandCount = 0;
    const countingInterval = setInterval(() => {
        sandCount++;
        // Randomly introduce distractions every few seconds
        if (Math.random() < 0.1) {
            // Simulate a distraction
            const distractions = ["A seagull stole some sand!", "A sandstorm interrupted the counting!", "A crab crossed the sand, causing a pause in counting! 🦀"];
            const randomDistraction = distractions[Math.floor(Math.random() * distractions.length)];
            sandCounterElement.textContent = randomDistraction;
        } else {
            // Continue counting normally
            sandCounterElement.textContent = `Counting grains of sand... 🏖️ Sand counted: ${sandCount}`;
        }
    }, 1000); // Add more sand every second

    // Stop counting after 30 seconds (for demonstration purposes)
    setTimeout(() => {
        clearInterval(countingInterval);
        sandCounterElement.textContent = "Counting stopped! Too many distractions in the sand! 🤷‍♂️";
    }, 30000); // Stop after 30 seconds (can be adjusted for more time-wasting)
}

function convertLength(cm) {
    // Define an array of units with their respective conversion factors and precision
    const units = [
        { name: "Furlong", factor: 201.168, precision: 2 },
        { name: "Parsec", factor: 3.0857e16, precision: 10 },
        { name: "Rod", factor: 5.0292, precision: 2 },
        { name: "Handbreadth", factor: 3.175, precision: 2 },
        { name: "Cubit", factor: 45.72, precision: 2 },
        { name: "Pole", factor: 5.0292, precision: 2 },
        { name: "Ell", factor: 114.3, precision: 2 },
        { name: "Shaku", factor: 30.3, precision: 2 },
        { name: "Chain", factor: 20.1168, precision: 2 },
        { name: "Astronomical Unit", factor: 1.496e13, precision: 8 },
        { name: "Light Year", factor: 9.461e17, precision: 10 },
        { name: "Fathom", factor: 182.88, precision: 2 },
        { name: "League", factor: 48280, precision: 2 },
        { name: "Qubit", factor: 1.616229e-35, precision: 10 },
        { name: "Handsbreadth", factor: 10.16, precision: 2 },
        { name: "Link", factor: 0.201168, precision: 4 },
        { name: "Twip", factor: 0.01764, precision: 4 },
        { name: "Smoot", factor: 170.18, precision: 2 },
        { name: "Electron Radius", factor: 2.8179e-13, precision: 10 },
        { name: "Fingernail", factor: 1, precision: 2 },
        { name: "Light Nanosecond", factor: 0.3084e-9, precision: 10 },
        { name: "Nautical Mile", factor: 1852, precision: 2 },
        { name: "Caliber", factor: 0.254, precision: 4 },
        { name: "Pica", factor: 4.233, precision: 4 }
    ];

    // Choose a random unit from the units array
    const randomUnit = units[Math.floor(Math.random() * units.length)];

    // Convert centimeters to the chosen unit
    const convertedValue = cm / randomUnit.factor;

    // Return the result with the chosen unit and adjusted precision
    return `${convertedValue.toFixed(randomUnit.precision)} ${randomUnit.name}`;
}

// Function to convert and display the converted length
function convertAndDisplayLength() {
    // Get the input value (assuming it's a length in centimeters)
    const cm = parseFloat(document.getElementById("complexNumber").value);

    // Convert the length to a randomly chosen unit
    const convertedLength = convertLength(cm);

    // Display the converted length
    document.getElementById("output").innerHTML = `${cm}cm is ${convertedLength}`;
}

// Function to shuffle the digits of a number
function shuffleDigits(number) {
    const digits = number.toString().split('');
    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[j]] = [digits[j], digits[i]];
    }
    return parseInt(digits.join(''));
}

// Function to generate a random number with a specific number of digits
function generateRandomNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate and display the shuffled number with animation
function generateAndDisplayShuffledNumber() {
    // Get the input value (assuming it's a positive integer)
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    // Predefined animation duration in milliseconds
    const duration = 3000; // 3 seconds

    // Generate a random number until it's different from the input number
    let shuffledNumber = inputNumber;
    while (shuffledNumber === inputNumber) {
        shuffledNumber = shuffleDigits(inputNumber);
    }

    // Start the digit shuffling animation
    startAnimation(shuffledNumber, duration);
}

// Function to start the digit shuffling animation with a predefined duration
function startAnimation(shuffledNumber, duration) {
    let startTime = Date.now();
    let interval = setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        let progress = elapsedTime / duration;
        if (progress >= 1) {
            clearInterval(interval);
            document.getElementById("output").innerHTML = shuffledNumber;
        } else {
            let randomShuffledNumber = shuffleDigits(shuffledNumber);
            document.getElementById("output").innerHTML = randomShuffledNumber;
        }
    }, 50);
}

let originalNumber = null;
let currentProduct = null;
let digitSumInterval = null;

// Function to start the digit sum repeater
function startDigitSumRepeater() {
    // Get the input value
    let largeNumberInput = document.getElementById("largeNumber").value.trim();

    // Validate the input
    if (!isValidLargeNumber(largeNumberInput)) {
        document.getElementById("output").innerText = "Invalid input. Please enter a valid large number.";
        return;
    }

    // Clear any existing interval
    clearInterval(digitSumInterval);

    // Set the original number
    originalNumber = largeNumberInput;
    currentProduct = largeNumberInput;

    // Start the digit sum repeater process
    repeatDigitSum(currentProduct);
}

// Function to validate the input as a large number
function isValidLargeNumber(input) {
    // Regular expression to match a large number
    let regex = /^\d+$/;
    return regex.test(input);
}

// Function to calculate the sum of digits of a number
function digitSum(number) {
    return number.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0).toString();
}

// Function to format a number with commas
function formatNumberWithCommas(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to continuously sum the digits of the result until it gets a single-digit number, then repeat
function repeatDigitSum(number) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    digitSumInterval = setInterval(() => {
        let currentSum = digitSum(number);
        let calculationProcess = number.split('').join(' + ') + " = " + currentSum;
        
        outputDiv.innerHTML = `Original Number: ${formatNumberWithCommas(originalNumber)}<br>`;
        outputDiv.innerHTML += `Current Number: ${formatNumberWithCommas(currentProduct)}<br>`;
        outputDiv.innerHTML += `Calculation: ${calculationProcess}<br>`;
        
        if (currentSum.length === 1) {
            // If the single digit is 1, add 1 before multiplying
            if (currentSum === '1') {
                currentSum = (parseInt(currentSum) + 1).toString();
            }
            
            // Multiply the single digit by the current product
            currentProduct = (parseInt(currentSum) * parseInt(currentProduct)).toString();
            outputDiv.innerHTML += `New Number after Multiplication: ${formatNumberWithCommas(currentProduct)}<br><br>`;
            number = currentProduct;
        } else {
            number = currentSum;
        }
    }, 1000); // Repeat every 1 second
}

function convertDecimalToComplexFraction() {
    const input = document.getElementById('decimalNumber').value;
    const outputDiv = document.getElementById('output');
    
    if (isNaN(input) || input.trim() === "") {
        outputDiv.textContent = "Please enter a valid decimal number.";
        return;
    }

    const decimalNumber = parseFloat(input);
    const complexFraction = generateComplexFraction(decimalNumber);
    outputDiv.textContent = `${decimalNumber} = ${complexFraction}`;
}

function generateComplexFraction(decimal) {
    // Determine the magnitude of the decimal number
    const magnitude = Math.abs(decimal);

    // Generate a random scale factor based on the magnitude
    const scaleFactor = Math.max(1000, Math.floor(magnitude * 1000));

    // Generate a random denominator that scales with the number
    const denominator = Math.floor(Math.random() * scaleFactor) + scaleFactor;

    // Create the numerator based on the generated denominator
    const numerator = Math.round(decimal * denominator); // Round to avoid floating-point issues

    return `${numerator}/${denominator}`;
}

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice;

    // Determine the computer's choice to ensure the player always loses
    if (playerChoice === 'rock') {
        computerChoice = 'paper';
    } else if (playerChoice === 'paper') {
        computerChoice = 'scissors';
    } else {
        computerChoice = 'rock';
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<h2>YOU LOST!<br>Computer chose ${computerChoice}. Try again:P</h2>`;
}