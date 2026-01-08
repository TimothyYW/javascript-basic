let text = "madam"
let isPalindrome = true

for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
        isPalindrome = false
    }
}

if (isPalindrome) {
    console.log(`${text} → palindrome`)
} else {
    console.log(`${text} → not palindrome`)
}