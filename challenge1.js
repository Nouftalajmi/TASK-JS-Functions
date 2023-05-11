/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
printName("Nouf");
function printName(name) {
  console.log(name);
}
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
//  */
function printAge(birthYear) {
  console.log(2023 - birthYear);
}
printAge(1990);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
//let language = printHello( "hello", "hola", "bonjour", "Merheba");

function printHello(name, language) {
  if (language === "en") {
    console.log(`hello ${name}`);
  } else if (language === "es") {
    console.log(`hola ${name} `);
  } else if (language === "fr") {
    console.log(`bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}

printHello("Nouf", "es");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

let number = printMax(1000, 125);
console.log(number);
function printMax(number1, number2) {
  if (number1 > number2) return number1;
  return number2;
}
