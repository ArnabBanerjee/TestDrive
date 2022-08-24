/**
 * Assignment 2. Counter Function
 * Implement the `counter` function according to requirements:
    - Function accepts a number as the first argument. This number represents the initial value for the counter.
    - If no value passed to a function, use `0` as initial value.
    - Function returns array with two function:
        - First function allows us to get the current counter value.
        - Second function increases the internal counter value by one.
    - Multiple calls of `counter` function create independent instances of counter
 */
export const counter = (value: number = 0) => {
    const iterator: IterableIterator<number> = (function* (a: number) {
        while (true) {
            yield a;
            yield ++a;
        }
    })(value);
    const getCounter = () => iterator.next().value;
    const nextCounter = () => iterator.next();
    return [getCounter, nextCounter];
};

const a = counter(1);
console.log(a[0]()); a[1]();
console.log(a[0]()); a[1]();
console.log(a[0]()); a[1]();

const b = counter(10);
console.log(b[0]()); b[1]();
console.log(b[0]()); b[1]();
console.log(b[0]()); b[1]();

const c = counter();
console.log(c[0]()); c[1]();
console.log(c[0]()); c[1]();
console.log(c[0]()); c[1]();
