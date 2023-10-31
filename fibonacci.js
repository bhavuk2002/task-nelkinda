function fibonacci(n) {
    if(n == 1 || n == 2) return n - 1
    let a = 0, b = 1
    for(let i = 3; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
}

module.exports = fibonacci

// console.log(fibonacci(11))