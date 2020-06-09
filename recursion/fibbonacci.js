function fibbonacci(num) {
    if( num === 1) {
        return num
    }

    return num + fibbonacci(num-1)
}


console.log(fibbonacci(8))