function reverseStr(s, k) {
    const n = s.length;
    let result = '';

    for (let i = 0; i < n; i += 2 * k) {
        const chunk = s.slice(i, i + 2 * k);
        const reverseChunk = reverseFirstK(chunk, k);
        result += reverseChunk;
    }

    return result;
}

function reverseFirstK(str, k) {
    let reversedStr = '';
    const kChars = str.slice(0, k);

    for (let i = kChars.length - 1; i >= 0; i--) {
        reversedStr += kChars[i];
    }

    return reversedStr + str.slice(k);
}

// Test Example 1
const s = "abcdefg";
const k = 2;
console.log(reverseStr(s, k)); // Output: "bacdfeg"
