// Function to show the selected tool's content
function openTool(toolId) {
    // Show the tool section
    document.getElementById("tool-section").style.display = "block";

    // Hide all tool content sections
    let toolContents = document.querySelectorAll(".tool-content");
    toolContents.forEach(content => content.style.display = "none");

    // Show the selected tool content
    document.getElementById(toolId).style.display = "block";
}

// 1. Calculator Function
function calculate() {
    let input = document.getElementById("calc-input").value;
    try {
        document.getElementById("calc-result").textContent = eval(input);
    } catch (error) {
        document.getElementById("calc-result").textContent = "Invalid Expression";
    }
}

// 2. Armstrong Number Function
function checkArmstrong() {
    let num = parseInt(document.getElementById("armstrong-input").value);
    if (isNaN(num)) {
        document.getElementById("armstrong-result").textContent = "Invalid Input";
        return;
    }

    let sum = 0, temp = num, digits = num.toString().length;
    
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    document.getElementById("armstrong-result").textContent = 
        sum === num ? "Yes, it's an Armstrong number" : "No, it's not an Armstrong number";
}

// 3. Number System Conversion Functions
function toBinary() {
    let num = parseInt(document.getElementById("conv-input").value);
    document.getElementById("conv-result").textContent = isNaN(num) ? "Invalid Input" : num.toString(2);
}

function toDecimal() {
    let num = document.getElementById("conv-input").value;
    let result = parseInt(num, 2);
    document.getElementById("conv-result").textContent = isNaN(result) ? "Invalid Binary Number" : result;
}

// 4. Palindrome Check Function
function checkPalindrome() {
    let num = document.getElementById("palindrome-input").value;
    let str = num.toString();
    let reversed = str.split("").reverse().join("");

    document.getElementById("palindrome-result").textContent = 
        str === reversed ? "Yes, it's a Palindrome" : "No, it's not a Palindrome";
}

// 5. Quadratic Equation Solver
function solveQuadratic() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        document.getElementById("quad-result").textContent = "Invalid Input";
        return;
    }

    let d = b * b - 4 * a * c;
    if (d > 0) {
        let root1 = (-b + Math.sqrt(d)) / (2 * a);
        let root2 = (-b - Math.sqrt(d)) / (2 * a);
        document.getElementById("quad-result").textContent = `${root1.toFixed(2)}, ${root2.toFixed(2)}`;
    } else if (d === 0) {
        let root = -b / (2 * a);
        document.getElementById("quad-result").textContent = root.toFixed(2);
    } else {
        document.getElementById("quad-result").textContent = "No Real Roots";
    }
}

// 6. Fibonacci Series Generator
function generateFibonacci() {
    let n = parseInt(document.getElementById("fibonacci-input").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("fibonacci-result").textContent = "Enter a valid number";
        return;
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("fibonacci-result").textContent = fib.join(", ");
}

// 7. Math Trivia Generator
function showFact() {
    let facts = [
        "Zero is the only number that cannot be represented in Roman numerals.",
        "A ‘jiffy’ is an actual unit of time: 1/100th of a second.",
        "The sum of angles in a triangle is always 180 degrees.",
        "Pi is an irrational number with infinite decimal places."
    ];
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").textContent = randomFact;
}

// 8. Prime Number Checker
function checkPrime() {
    let num = parseInt(document.getElementById("prime-input").value);
    if (isNaN(num) || num < 2) {
        document.getElementById("prime-result").textContent = "Invalid Input";
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById("prime-result").textContent = 
        isPrime ? "Yes, it's a prime number" : "No, it's not a prime number";
}

// 9. Odd/Even Checker
function checkOddEven() {
    let num = parseInt(document.getElementById("oddeven-input").value);
    if (isNaN(num)) {
        document.getElementById("oddeven-result").textContent = "Invalid Input";
        return;
    }

    document.getElementById("oddeven-result").textContent = 
        num % 2 === 0 ? "Even" : "Odd";
}

// 10. Inverse Function
function calculateInverse() {
    let num = parseFloat(document.getElementById("inverse-input").value);
    if (isNaN(num) || num === 0) {
        document.getElementById("inverse-result").textContent = "Invalid Input";
        return;
    }

    document.getElementById("inverse-result").textContent = (1 / num).toFixed(2);
}

// 11. Complex Number Operations
function addComplex() {
    let real1 = parseFloat(document.getElementById("complex-real1").value);
    let imag1 = parseFloat(document.getElementById("complex-imag1").value);
    let real2 = parseFloat(document.getElementById("complex-real2").value);
    let imag2 = parseFloat(document.getElementById("complex-imag2").value);

    if (isNaN(real1) || isNaN(imag1) || isNaN(real2) || isNaN(imag2)) {
        document.getElementById("complex-result").textContent = "Invalid Input";
        return;
    }

    let resultReal = real1 + real2;
    let resultImag = imag1 + imag2;
    document.getElementById("complex-result").textContent = 
        `${resultReal} + ${resultImag}i`;
}

function subtractComplex() {
    let real1 = parseFloat(document.getElementById("complex-real1").value);
    let imag1 = parseFloat(document.getElementById("complex-imag1").value);
    let real2 = parseFloat(document.getElementById("complex-real2").value);
    let imag2 = parseFloat(document.getElementById("complex-imag2").value);

    if (isNaN(real1) || isNaN(imag1) || isNaN(real2) || isNaN(imag2)) {
        document.getElementById("complex-result").textContent = "Invalid Input";
        return;
    }

    let resultReal = real1 - real2;
    let resultImag = imag1 - imag2;
    document.getElementById("complex-result").textContent = 
        `${resultReal} + ${resultImag}i`;
}

// 12. Factorial Calculator
function calculateFactorial() {
    let num = parseInt(document.getElementById("factorial-input").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("factorial-result").textContent = "Invalid Input";
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("factorial-result").textContent = factorial;
}

// 13. Matrix Operations
function addMatrices() {
    const a11 = parseFloat(document.getElementById('matrix-a11').value);
    const a12 = parseFloat(document.getElementById('matrix-a12').value);
    const a21 = parseFloat(document.getElementById('matrix-a21').value);
    const a22 = parseFloat(document.getElementById('matrix-a22').value);
    const b11 = parseFloat(document.getElementById('matrix-b11').value);
    const b12 = parseFloat(document.getElementById('matrix-b12').value);
    const b21 = parseFloat(document.getElementById('matrix-b21').value);
    const b22 = parseFloat(document.getElementById('matrix-b22').value);

    if ([a11,a12,a21,a22,b11,b12,b21,b22].some(isNaN)) {
        document.getElementById('matrix-result-add').textContent = 'Invalid Input';
        return;
    }

    const c11 = a11 + b11;
    const c12 = a12 + b12;
    const c21 = a21 + b21;
    const c22 = a22 + b22;

    document.getElementById('matrix-result-add').textContent = 
        `[[${c11.toFixed(2)}, ${c12.toFixed(2)}], [${c21.toFixed(2)}, ${c22.toFixed(2)}]]`;
}

function multiplyMatrices() {
    const a11 = parseFloat(document.getElementById('matrix-a11').value);
    const a12 = parseFloat(document.getElementById('matrix-a12').value);
    const a21 = parseFloat(document.getElementById('matrix-a21').value);
    const a22 = parseFloat(document.getElementById('matrix-a22').value);
    const b11 = parseFloat(document.getElementById('matrix-b11').value);
    const b12 = parseFloat(document.getElementById('matrix-b12').value);
    const b21 = parseFloat(document.getElementById('matrix-b21').value);
    const b22 = parseFloat(document.getElementById('matrix-b22').value);

    if ([a11,a12,a21,a22,b11,b12,b21,b22].some(isNaN)) {
        document.getElementById('matrix-result-mult').textContent = 'Invalid Input';
        return;
    }

    const c11 = a11*b11 + a12*b21;
    const c12 = a11*b12 + a12*b22;
    const c21 = a21*b11 + a22*b21;
    const c22 = a21*b12 + a22*b22;

    document.getElementById('matrix-result-mult').textContent = 
        `[[${c11.toFixed(2)}, ${c12.toFixed(2)}], [${c21.toFixed(2)}, ${c22.toFixed(2)}]]`;
}

// 14. Statistics Calculator
function calculateMean() {
    let input = document.getElementById("statistics-input").value;
    let numbers = input.split(",").map(Number);
    if (numbers.some(isNaN)) {
        document.getElementById("statistics-result").textContent = "Invalid Input";
        return;
    }

    let mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById("statistics-result").textContent = mean.toFixed(2);
}

function calculateMedian() {
    let input = document.getElementById("statistics-input").value;
    let numbers = input.split(",").map(Number);

    if (numbers.some(isNaN)) {
        document.getElementById("statistics-result").textContent = "Invalid Input";
        return;
    }

    numbers.sort((a, b) => a - b);

    let median;
    let mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        median = (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
        median = numbers[mid];
    }

    document.getElementById("statistics-result").textContent = median;
}

function calculateMode() {
    let input = document.getElementById("statistics-input").value;
    let numbers = input.split(",").map(Number);

    if (numbers.some(isNaN)) {
        document.getElementById("statistics-result").textContent = "Invalid Input";
        return;
    }

    let frequency = {};
    let maxFreq = 0;
    let mode = [];

    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            mode.push(Number(key));
        }
    }

    document.getElementById("statistics-result").textContent = mode.join(", ");
}

// Search Functionality
document.getElementById("search").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase(); // Get the search query
    let tools = document.querySelectorAll(".tool p"); // Get all tool names

    tools.forEach(tool => {
        let toolName = tool.textContent.toLowerCase(); // Get the tool name
        let toolContainer = tool.closest(".tool"); // Get the parent tool container

        // Show or hide the tool based on the search query
        if (toolName.includes(searchQuery)) {
            toolContainer.style.display = "flex"; // Show the tool
        } else {
            toolContainer.style.display = "none"; // Hide the tool
        }
    });
});