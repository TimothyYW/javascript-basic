let text = "hello world"
let result = ""
let capitalize = true

for (let i = 0; i < text.length; i++) {
    let char = text[i]

    if (capitalize && char !== "") {

        // ubah ke huruf besar
        let code = char.charCodeAt(0)
        if (code >= 97 && code <= 122) {
            char = String.fromCharCode(code - 32) // ubah ke uppercase lewat table ascii
        }

        capitalize = false
    } else if (char === " ") {
        capitalize = true
    }

    result += char
}

console.log(result)