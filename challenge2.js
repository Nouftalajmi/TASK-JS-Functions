/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
greet("Hamza");
function greet(name) {
  console.log("hello", name);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function is0dd(n) {
  if (n % 2 === 1) {
    return "true";
  } else if (n % 2 === 0) {
    return "False";
  }
}
console.log(is0dd(20));
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  if (n % 2 == 1) {
    console.log((n - 1) / 2);
  } else if (n % 2 == 0) {
    console.log(n / 2);
  }
}
oddsSmallerThan(15);
// oddsSmallerThan((7 - 1) / 2);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 == 1) {
    console.log(n * n);
  } else if (n % 2 == 0) {
    console.log(2 * n);
  }
}
squareOrDouble(3);
