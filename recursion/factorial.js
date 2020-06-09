function factorial(num) {
    if (num === 2 ) {
        return num
    }
    return num * fact1(num-1)
}

function fact2(num) {
    let prod = 1;
    for(let i = num; i >= 2 ; i--) {
        prod*=i
    }
    return prod
}

console.log(factorial(3))
console.log(fact2(5))