// search string

let mainString = "Hello World"
let search = "ell"
let result = ""

let found = -1

// cari posisi pertama search di dalam mainString
for (let i = 0; i <= mainString.length - search.length; i++) {
    let match = true

    for (let j = 0; j < search.length; j++) {
        if (mainString[i + j] !== search[j]) {
            match = false
        }
    }

    if (match) {
        found = i
    }
}

// bangun string baru tanpa substring yang dicari
if (found !== -1) {
    for (let i = 0; i < mainString.length; i++) {
        if (i >= found && i < found + search.length) {
            continue // lewati karakter search
        }

        result += mainString[i]
    }
} else {
    result = mainString // kalau tidak ketemu
}

console.log(result)