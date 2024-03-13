function fibonacci(num){
    let fib1 = 0;
    let fib2 = 1;
    while (fib2 < num) {
        [fib1, fib2] = [fib2, fib1 + fib2];
    };

    return fib2 == num;
}

let numero = 55;

if(fibonacci(numero)) {
    console.log(`${numero} pertence a sequência de Fibonacci.`)
} else {
    console.log(`${numero} não pertence a sequência de Fibonacci.`)
};