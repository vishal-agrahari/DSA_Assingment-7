function reverseWords(s) {
    const words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }

    return words.join(' ');
}

function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}

// Test Example 1
const s = "Let's take LeetCode contest";
console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
