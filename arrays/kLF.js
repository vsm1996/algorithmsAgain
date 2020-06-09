function kLF(arr, x) {
    return arr.splice(arr.length-x)
}

let array = [2,4,6,8,10]
console.log(kLF(array, 3))