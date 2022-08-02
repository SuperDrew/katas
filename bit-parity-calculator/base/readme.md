# Find the parity outlier
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array entirely comprises odd integers or entirely comprises even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

## Bonus

How would your code change if it needed to handle infinitely long sequences?

In javascript we can use Generators to create sequences, eg.

```
function *parityGenerator() {
    let i = 0;
    while (i++ < 100000000)
        yield 2;
    yield 3;
    while(true) {
        yield 4;
    }
}

// runs forever
for (const i of parityGenerator()) {
  console.log(i)
}
```
