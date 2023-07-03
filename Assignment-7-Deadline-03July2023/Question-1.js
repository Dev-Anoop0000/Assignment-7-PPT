console.log(`
Question-1: Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
Example 1:

Input: s = "egg", t = "add"

Output: true
`);


/// Programmm......

function isomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        let char1 = s.charAt(i);

        let char2 = t.charAt(i);



        // console.log(map);
        // console.log(set);

        if (map.has(char1) == true) {
            // console.log(map.has(char1));

            if (map.get(char1) !== char2) {
                return false;
            }
        } else {
            if (set.has(char2)) {
                return false;
            }

            map.set(char1, char2);
            set.add(char2);
        }
        // console.log(map.set(char1, char2))
        // console.log(set.add(char2))
    }

    return true;
}


let s = "egg";
let t = "add";
let result = isomorphic(s, t);
console.log("Is isomorphic : ", result)