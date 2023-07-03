console.log(`
Question -6 : Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:

Input: s = "abcde", goal = "cdeab"

Output: true
`);



//// Programmmm....
function canShift(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const concatS = s + s;
    // console.log(concatS);

    return concatS.includes(goal);
}

let s = "abcde",
    goal = "cdeab";
console.log(canShift(s, goal)); // Output: true