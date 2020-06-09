const sigma = x => {
    let sum = 0
    for (let i = x ; i >= 0; i--) {
        sum += i
    }
    return sum
}

console.log(sigma(3))