/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @author Jorge Hernández Batista
 * @since Feb 28 2022
 * @desc Example of a bad written function
 * @see {@link https://github.com/troppes/pai-presentation/}
 *
 */

'use strict';

/* eslint-disable */
const badFunc = (a,b) => {let r = 1, i = 0; for(;i<b;i++)r*=a;return r};
/* eslint-enable */

/**
  * Checks if the correct number of command line arguments is given
  *  and returns the chose one
  * @param {number} expectedInputs - expected number of argument
  * @param {number} argumentIndex - the wanted argument, starting with 0
  * @return {string} returns the wanted argument
  */
const readInputs = function(expectedInputs, argumentIndex) {
  if (process.argv.length !== expectedInputs + 2) {
    console.log('Wrong number of arguments');
    process.exit(-1);
  }
  return process.argv[argumentIndex + 2];
};

const convertToNumber = function(message) {
  const theNumber = Number(message);
  if (!Number.isNaN(theNumber)) {// It is a number
    return theNumber;
  }
  console.log('The input entered was not a number!');
};

/**
   * main function to create a starting point
   */
function main() {
  const a = convertToNumber(readInputs(2, 0));
  const b = convertToNumber(readInputs(2, 1));
  console.log(badFunc(a, b));
}

if (require.main === module) {
  main();
}
