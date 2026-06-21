# Loop Practice — Problems with Solutions (JavaScript)

## Low — Beginner (with answers)

1) Sum of 1..N

Problem: Given `N`, return the sum `1+2+...+N`.

Solution:
```js
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}
// Example: sumToN(5) -> 15
```

2) Print even numbers up to N

Problem: Print all even numbers from 2 to `N` (inclusive).

Solution:
```js
function evensUpToN(n) {
  const out = [];
  for (let i = 2; i <= n; i += 2) out.push(i);
  return out; // or console.log(out.join(' '))
}
// Example: evensUpToN(7) -> [2,4,6]
```

3) Count digits

Problem: Given a positive integer, return the number of digits.

Solution:
```js
function countDigits(num) {
  if (num === 0) return 1;
  num = Math.abs(Math.floor(num));
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
// Example: countDigits(12345) -> 5
```

4) Factorial

Problem: Compute `N!` for small `N` (N ≤ 12).

Solution:
```js
function factorial(n) {
  if (n < 0) return null;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
// Example: factorial(5) -> 120
```

5) Reverse an array

Problem: Given an array, return its elements in reverse order.

Solution:
```js
function reverseArray(arr) {
  const out = [];
  for (let i = arr.length - 1; i >= 0; i--) out.push(arr[i]);
  return out;
}
// Example: reverseArray([1,2,3]) -> [3,2,1]
```

## Medium — Intermediate (with answers)

1) Fibonacci up to N terms

Problem: Print first `N` Fibonacci numbers (N up to ~30).

Solution:
```js
function fibN(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) out.push(0);
    else if (i === 1) out.push(1);
    else out.push(out[i - 1] + out[i - 2]);
  }
  return out;
}
// Example: fibN(6) -> [0,1,1,2,3,5]
```

2) First repeating element

Problem: Given an array of integers, return the first value that repeats (left-to-right), or `-1`.

Solution:
```js
function firstRepeat(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return x;
    seen.add(x);
  }
  return -1;
}
// Example: firstRepeat([2,5,3,5,7]) -> 5
```

3) Frequency histogram

Problem: Given an array with values in a small range (e.g., 0..100), return counts for each number that appears.

Solution:
```js
function histogram(arr) {
  const counts = {};
  for (const x of arr) counts[x] = (counts[x] || 0) + 1;
  return counts;
}
// Example: histogram([2,2,3]) -> { '2': 2, '3': 1 }
```

4) Rotate array right by k

Problem: Rotate elements to the right by `k` positions.

Solution:
```js
function rotateRight(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;
  k = k % n;
  if (k < 0) k += n;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}
// Example: rotateRight([1,2,3,4], 2) -> [3,4,1,2]
```

5) Digital root (sum digits until single digit)

Problem: Repeatedly sum the digits of a number until the result is a single digit.

Solution:
```js
function digitalRoot(n) {
  n = Math.abs(Math.floor(n));
  while (n >= 10) {
    let s = 0;
    while (n > 0) {
      s += n % 10;
      n = Math.floor(n / 10);
    }
    n = s;
  }
  return n;
}
// Example: digitalRoot(9875) -> 2
```

6) Number pyramid

Problem: Print a pyramid of numbers with `N` rows; row `i` contains `1..i`.

Solution:
```js
function numberPyramid(n) {
  const lines = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= i; j++) row.push(j);
    lines.push(row.join(' '));
  }
  return lines.join('\n');
}
// Example: numberPyramid(4) prints the 4-row pyramid
```

---

If you want, I can also:
- Add runnable `.js` files for each solution under the `05_Loops` folder.
- Add unit tests or example runs for each function.
