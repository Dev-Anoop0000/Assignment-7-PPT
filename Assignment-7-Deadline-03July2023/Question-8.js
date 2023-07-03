console.log(`
Question -8 :You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1: 
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

Output: true
`);


//////// Programmmm......

function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0]; // First point

    // Calculate the slope between the first point and each subsequent point
    for (let i = 1; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];

        // If the slope is different from the initial slope, return false
        if ((y - y0) * (x - x0) !== (y0 - coordinates[1][1]) * (x0 - coordinates[1][0])) {
            return false;
        }
    }

    return true;
}

let coordinates = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7]
];

let result = checkStraightLine(coordinates)
console.log(result);