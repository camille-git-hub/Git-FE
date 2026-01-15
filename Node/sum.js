let a = 5;
let b = 10;
console.log("The sum is:", a + b);

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.log("Please provide exactly two numbers.");
    return;
    }

    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);
    
    if (isNaN(num1) || isNaN(num2)) {
    console.error("Both arguments must be numbers.");
    return;
    }

    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}.`);   
    return;

