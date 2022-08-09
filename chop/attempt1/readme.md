# Binary Chop
Write a binary chop method that takes an integer search target and a sorted array of integers. It should return the integer index of the target in the array, or -1 if the target is not in the array. The signature will logically be:

```chop(int, array_of_int)  -> int```

You can assume that the array has less than 100,000 elements. For the purposes of this Kata, time and memory performance are not issues (assuming the chop terminates before you get bored and kill it, and that you have enough RAM to run it).

## Test Data

Here is the Test::Unit code I used when developing my methods. Feel free to add to it. The tests assume that array indices start at zero. You’ll probably have to do a couple of global search-and-replaces to make this compile in your language of choice (unless your enlightened choice happens to be Ruby).

```
def test_chop
assert_equal(-1, chop(3, []))
assert_equal(-1, chop(3, [1]))
assert_equal(0,  chop(1, [1]))
#
assert_equal(0,  chop(1, [1, 3, 5]))
assert_equal(1,  chop(3, [1, 3, 5]))
assert_equal(2,  chop(5, [1, 3, 5]))
assert_equal(-1, chop(0, [1, 3, 5]))
assert_equal(-1, chop(2, [1, 3, 5]))
assert_equal(-1, chop(4, [1, 3, 5]))
assert_equal(-1, chop(6, [1, 3, 5]))
#
assert_equal(0,  chop(1, [1, 3, 5, 7]))
assert_equal(1,  chop(3, [1, 3, 5, 7]))
assert_equal(2,  chop(5, [1, 3, 5, 7]))
assert_equal(3,  chop(7, [1, 3, 5, 7]))
assert_equal(-1, chop(0, [1, 3, 5, 7]))
assert_equal(-1, chop(2, [1, 3, 5, 7]))
assert_equal(-1, chop(4, [1, 3, 5, 7]))
assert_equal(-1, chop(6, [1, 3, 5, 7]))
assert_equal(-1, chop(8, [1, 3, 5, 7]))
end
```

## Reference
Taken from http://codekata.com/kata/kata02-karate-chop/

## Things to try
* instead of slicing and passing a copy modify the original array.
* mutate to see what's missed