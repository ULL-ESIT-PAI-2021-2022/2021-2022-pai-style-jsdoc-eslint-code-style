/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Hdez. Batista
 * @author Florian Reitz
 * @since Feb 28 2022
 * @desc Documentation
 * This is the way we should comment a header, so all the information is added
 * During this file, you'll find an example of how we can use the tool JSDoc.
 *
 * @see {@link https://jsdoc.app}
 */

/* eslint-disable no-unused-vars */

/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */


/**
 * Set the magic number.
 * @param {NumberLike} number - The magic number.
 */
function setMagicNumber(number) {
  /**
   * @const
   * @type {string}
   * @default
   */
  const RED = 'FF0000';
  // ...
}


/**
 * @class Pokemon
 * @classdesc Class representing a Pokémon
 * @property {string} name
 * @property {string} [nickname]
 */
class Pokemon {
  /**
   * Name is a property that contains the name of a Pokémon
   * @param {string} pokedex The pokedex entry number of the pokemon
   * @param {string} number The number of the pokemon
   * @param {string} nickname The nickname of the pokemon
   * @type {string}
   * @public
   */
  constructor(pokedex, number, nickname = '') {
    this.name = pokedex.name(number);

    /**
     * Nickname is an optional property that may contains the
     * name the trainer gived to his pokémon
     * @type {string}
     * @public
     */
    this.nickname = nickname;
    // ...
  }

  /**
   * Pokemon attacks another pokémon with an attack
   * @override
   */
  attack(move, opponent) {
    // ...
  }
}

/**
 * @class Pikachu
 * @classdesc Class representing a Pikachu
 * @extends Pokemon
 */
class Pikachu extends Pokemon {
  // ...
  /**
   * Pikachu attacks another pokémon with thunderbolt
   * @override
   */
  attack(opponent) {
    move = 'Thunderbolt';
  }
}
