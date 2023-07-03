console.log(`
Question-7 : Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"

Output: true

Explanation: Both s and t become "ac".
`);


///// Programmmm....

function isEqualAfterBackspace(s, t) {
    const processString = (str) => {
        const stack = [];

        for (const char of str) {
            if (char === '#') {
                stack.pop(); // Backspace: remove the last character from the stack
            } else {
                stack.push(char); // Add the character to the stack
            }
        }

        return stack.join('');
    };

    const processedS = processString(s);
    const processedT = processString(t);

    return processedS === processedT;
}

let s = "ab#c",
    t = "ad#c";
console.log("Is equal : ", isEqualAfterBackspace(s, t));