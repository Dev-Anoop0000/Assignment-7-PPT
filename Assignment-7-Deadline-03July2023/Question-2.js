console.log(`
Question-2 : Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:

Input: num = "69"

Output: true
`);


//// Programmm.....

function isStrobogrammaticNum(num) {

    const pairs = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let rotatedNum = '';

    // Rotate the number and build the rotatedNum string
    for (let i = num.length - 1; i >= 0; i--) {
        const digit = num[i];

        // If the digit has a strobogrammatic pair, add its pair to the rotatedNum
        if (pairs.hasOwnProperty(digit)) {
            rotatedNum += pairs[digit];
        } else {
            // If any digit doesn't have a strobogrammatic pair, return false
            return false;
        }
    }

    // Return true if the rotatedNum is equal to the original number
    return rotatedNum === num;
}


let number = "69"

console.log("Is Strobogrammatic Number : ", isStrobogrammaticNum(number)); // Output: true