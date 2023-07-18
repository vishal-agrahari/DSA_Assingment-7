function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
        return true; // If there are two or fewer points, they will always form a straight line.
    }

    // Calculate the slope between the first two points.
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const initialSlope = (y2 - y1) / (x2 - x1);

    // Check the slope between the other points with the initial slope.
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        const slope = (y - y1) / (x - x1);
        if (slope !== initialSlope) {
            return false;
        }
    }

    return true;
}

// Test Example 1
const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
console.log(checkStraightLine(coordinates)); // Output: true
