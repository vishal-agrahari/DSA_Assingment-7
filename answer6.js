function canShiftToGoal(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const concatenated = s + s;
    return concatenated.includes(goal);
}

// Test Example 1
const s = "abcde";
const goal = "cdeab";
console.log(canShiftToGoal(s, goal)); // Output: true
