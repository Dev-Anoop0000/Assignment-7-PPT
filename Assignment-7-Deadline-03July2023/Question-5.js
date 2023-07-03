console.log(`
Question-5 : Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2

Output: "bacdfeg"
`);


/////// Programmmm.....
function reverseStr(s, k) {
    const arr = s.split(''); // Convert the string to an array of characters

    for (let i = 0; i < arr.length; i += 2 * k) {
        let start = i;
        let end = Math.min(i + k - 1, arr.length - 1);


        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap characters
            start++;
            end--;
        }
    }

    return arr.join('');
}


console.log("Output : ", reverseStr("abcdefg", 2));