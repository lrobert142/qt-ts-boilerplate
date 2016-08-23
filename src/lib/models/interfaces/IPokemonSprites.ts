namespace Interface {

    /**
     * Interface representing minimum required functionality for pokemon sprites
     * 
     * @export
     * @class IPokemonSprites
    */
    export interface IPokemonSprites {
        /**
         * Gets the back view of the default sprite
         * 
         * @returns {string}
        */
        backDefault(): string;

        /**
         * Gets the back view of a female sprite
         * 
         * @returns {string}
        */
        backFemale(): string;

        /**
         * Gets the back view of the shiny sprite
         * 
         * @returns {string}
        */
        backShiny(): string;

        /**
         * Gets the back view of the shiny, female sprite
         * 
         * @returns {string}
        */
        backShinyFemale(): string;

        /**
         * Gets the front view of the default sprite
         * 
         * @returns {string}
        */
        frontDefault(): string;

        /**
         * Gets the front view of a female sprite
         * 
         * @returns {string}
        */
        frontFemale(): string;

        /**
         * Gets the front view of the shiny sprite
         * 
         * @returns {string}
        */
        frontShiny(): string;

        /**
         * Gets the front view of the shiny, female sprite
         * 
         * @returns {string}
        */
        frontShinyFemale(): string;

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object;
    }

    export class FakePokemonSprites implements IPokemonSprites {
        constructor() { }

        backDefault(): string {
            return "http://www.fake.com/backDefault";
        }

        backFemale(): string {
            return "http://www.fake.com/backFemale";
        }

        backShiny(): string {
            return "http://www.fake.com/backShiny";
        }

        backShinyFemale(): string {
            return "http://www.fake.com/backShinyFemale";
        }

        frontDefault(): string {
            return "http://www.fake.com/frontDefault";
        }

        frontFemale(): string {
            return "http://www.fake.com/frontFemale";
        }

        frontShiny(): string {
            return "http://www.fake.com/frontShiny";
        }

        frontShinyFemale(): string {
            return "http://www.fake.com/frontShinyFemale";
        }

        toJSON(): Object {
            return {
                backDefault: "http://www.fake.com/backDefault", backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny", backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault", frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny", frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            };
        }
    }
}