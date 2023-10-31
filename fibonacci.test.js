const fibonacci = require('./fibonacci')

test('Test Case 1 for Fibonacci Sequence', () => {
    expect(fibonacci(10)).toBe(34) 
})

test('Test Case 2 for Fibonacci Sequence', () => {
    expect(fibonacci(11)).toBe(55) 
})

test('Test Case 3 for Fibonacci Sequence', () => {
    expect(fibonacci(1)).toBe(0) 
})

test('Test Case 4 for Fibonacci Sequence', () => {
    expect(fibonacci(3)).toBe(1) 
})

test('Test Case 5 for Fibonacci Sequence', () => {
    expect(fibonacci(6)).toBe(5) 
})

test('Test Case 6 for Fibonacci Sequence', () => {
    expect(fibonacci(19)).toBe(2584) 
})