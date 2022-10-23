const fib = (num: number, memo: Map<number, number> = new Map()) => {

    if (num === 1 || num === 2) return 1;

    const cachedValue = memo.get(num);
    if (cachedValue) return cachedValue;

    let newVal = fib(num - 1, memo) + fib(num - 2, memo);
    memo.set(num, newVal)
    return newVal;
}

console.log(fib(8))