function buildString(str) {
    const stack = [];
    for (const char of str) {
        if (char !== '#') {
            stack.push(char);
        } else if (stack.length > 0) {
            stack.pop();
        }
    }
    return stack.join('');
}

function backspaceCompare(s, t) {
    const processedS = buildString(s);
    const processedT = buildString(t);
    return processedS === processedT;
}

// Test Example 1
const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t)); // Output: true
