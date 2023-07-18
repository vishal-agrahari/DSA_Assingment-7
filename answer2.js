function isStrobogrammatic(num) {
    const strobogrammaticMap = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftDigit = num[left];
        const rightDigit = num[right];

        if (!(leftDigit in strobogrammaticMap) || strobogrammaticMap[leftDigit] !== rightDigit) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Test Example 1
const num = "69";
console.log(isStrobogrammatic(num)); // Output: true
