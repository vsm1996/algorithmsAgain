const factioral = x => {
    let product = 1
    for (let i = x ; i > 0; i--) {
        product *= i
    }
    return product
}

console.log(factioral(3))