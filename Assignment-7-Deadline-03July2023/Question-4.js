console.log(`
Question -4 : Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"

Output: "s'teL ekat edoCteeL tsetnoc"
`);


////// Programmmmm......
function reverseWords(s) {
    const words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }

    return words.join(' ');
}

let s = "Let's take LeetCode contest"
console.log("Output : ", reverseWords(s));