function soaringIQ() {
    let iq = 101
    let count = 0.01
    let inc = 1

    while( inc <= 98 ) {
        iq += count;
        count++
        inc++
    }
    
    return iq
}

console.log(soaringIQ())