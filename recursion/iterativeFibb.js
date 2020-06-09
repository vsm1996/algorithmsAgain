function fibonacciIterativeRecursive(n) {
    if(n < 2) {
        return n;
    }

    return fibonacciIterativeRecursive(n-1) + fibonacciIterativeRecursive(n-2)
}

console.log(fibonacciIterativeRecursive(3))