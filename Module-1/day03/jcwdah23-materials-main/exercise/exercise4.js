// convert number to IDR currency

let numberIDR = 1000000
let str = String(numberIDR)
let result = "" // untuk menampung hasil konversi

// kita akan sisipkan titik setiap 3 digit dari belakang
let count = 0

for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result
    count++
    if (count % 3 === 0 && i !== 0) {
        result = "." + result
    }
}

let currency = "Rp. " + result + ",00"
console.log(currency)