/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @author Jorge Hernández Batista
 * @since Feb 28 2022
 * @desc File to test ESLint capabilities
 * @see {@link https://github.com/troppes/pai-presentation/}
 *
 */

'use strict';

// eslint-disable-next-line
const ADMIN_PASSWORD = 'superSecretPassword';

const simpleCalc = (userInput) => {
  console.log(eval(userInput));
};

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

/**
   * main function to create a starting point
   */
function main() {
  simpleCalc(readInputs(1, 0));
}

if (require.main === module) {
  main();
}

