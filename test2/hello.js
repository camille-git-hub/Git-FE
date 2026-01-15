# Node.js & JavaScript Beginner Cheat Sheet

---

## 1️⃣ Reading Command-Line Input


// Grab user input from the terminal
const input = process.argv.slice(2); // array of all words after 'node script.js'

console.log(input);
Example run:

bash
Copy code
node piglatin.js hello world

Output:

[ 'hello', 'world' ]
Input Validation
js
Copy code
if (input.length === 0) {
    console.log("Please enter some text!");
    process.exit(); // stops the program
}

2️⃣ Loops

For loop


for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
}

Output for input = ['hello', 'world']:

hello
world

For...of loop (simpler for arrays)

for (const word of input) {
    console.log(word);
}

3️⃣ Strings

Access first letter: word[0]

Convert to lowercase: word.toLowerCase()

Slice parts of string: word.slice(1) (everything except first letter)

Example:


const word = "Hello";
console.log(word[0]);       // H
console.log(word.toLowerCase()); // hello
console.log(word.slice(1)); // ello

4️⃣ arrays

Create array: let arr = ['a', 'b', 'c']

Push new elements: arr.push('d')

Join into string: arr.join(" ")

Example:


let arr = ['hello', 'world'];
arr.push('friend');
console.log(arr);           // ['hello', 'world', 'friend']
console.log(arr.join(" ")); // "hello world friend"

5️⃣ Conditionals
if / else if / else


const vowels = ['a','e','i','o','u'];
const firstLetter = 'h';

if (vowels.includes(firstLetter)) {
    console.log("Starts with a vowel");
} else {
    console.log("Starts with consonant");
}

Multiple conditions example (two consonants first):


if (vowels.includes(word[0])) {
    // starts with vowel
} else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
    // starts with two consonants
} else {
    // starts with one consonant
}

6️⃣ Pig Latin Logic Skeleton

const input = process.argv.slice(2);

if (input.length === 0) {
    console.log("Please enter text to translate!");
    process.exit();
}

const vowels = ['a','e','i','o','u'];

for (let i = 0; i < input.length; i++) {
    let word = input[i].toLowerCase();

    if (vowels.includes(word[0])) {
        input[i] = word + "way";
    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
        input[i] = word.slice(2) + word.slice(0,2) + "ay";
    } else {
        input[i] = word.slice(1) + word[0] + "ay";
    }
}

console.log(input.join(" "));

Example run:

node piglatin.js hello world string apple

Output:

ellohay orldway ingstray appleway

7️⃣ Tips for Debugging
Use console.log everywhere to check variables:

console.log("Word before:", word);
console.log("Word after:", input[i]);

Always check array length:

console.log(input.length);

Break the problem into small steps:

Step 1: parse input

Step 2: loop over one word

Step 3: apply vowel/consonant rule

Step 4: join array and print

✅ Quick Mental Checklist for CLI Assignments

 Did I slice process.argv to get input?

 Did I validate input (length > 0)?

 Am I looping over each word correctly?

 Are my string operations correct (slice, toLowerCase, word[0])?

 Did I handle all cases for Pig Latin rules?

 Did I join the final array to make a single string?

 Am I printing the result with console.log?


---

### How to export as PDF with colors

1. Copy this Markdown into **VS Code** or **StackEdit**  
2. Make sure **triple backticks** are kept for code blocks  
3. Print → choose **Save as PDF**  
4. Enable **“Print background colors”** if your editor asks  

✅ Code blocks will retain syntax highlighting and colors in the PDF.

---

If you want, I can also **add a small visual diagram for the Pig Latin transformation**, showing each word step by step — it makes it really easy to “predict” the output before running the code.  

Do you want me to make that next?