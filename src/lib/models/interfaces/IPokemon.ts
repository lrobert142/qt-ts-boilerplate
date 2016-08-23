namespace Interface {

    /**
     * Interface representing basic Pokemon functionality
     * 
     * @export
     * @interface IPokemon
    */
    export interface IPokemon {
        /**
         * Gets the national pokedex number of the pokemon
         * 
         * @returns {string} National pokedex number
        */
        nationalDexNumber(): string;

        /**
         * Gets all names of the pokemon in various languages
         * 
         * @returns {Array<ILocaleName>} All names for the pokemon
        */
        names(): Array<ILocaleName>;

        /**
         * Gets the name of the pokemon in the specified language
         * 
         * @param {string} [languageCode] Two letter code of the language of the pokemon's name
         * @returns {ILocaleName} The pokemon's name in the specified langauge locale
         * @throws {NameNotFoundException} If a name cannot be found, or the language code doesn't exist
        */
        name(languageCode?: string): ILocaleName;

        /**
         * Gets all sprites for the pokemon
         * 
         * @returns {Array<Object>} All available sprites
        */
        sprites(): Array<Object>;

        /**
         * Gets the default front sprite for the pokemon
         * 
         * @returns {string} The URL of the frontal sprite
        */
        defaultFrontSpriteUrl(): string;

        /**
         * Gets the raw height of the pokemon
         * 
         * @returns {number}
        */
        height(): number;

        /**
         * Gets the height of the pokemon in meters
         * 
         * @returns {number} Height of the pokemon in meters
        */
        heightInMeters(): number;

        /**
         * Gets the raw weight of the pokemon
         *  
         * @returns {number}
        */
        weight(): number;

        /**
         * Gets the weight of the pokemon in kilograms
         * 
         * @returns {number} Weight of the pokemon in kilograms
        */
        weightInKg(): number;

        /**
         * Gets all stats of the pokemon
         * 
         * @returns {Array<Object>} All available stats
        */
        stats(): Array<Object>;

        /**
         * Gets the stat with the specified name
         * 
         * @param {string} statName The name of the stat to retrieve
         * @returns {number} Value of the found stat
         * @throws {StatNotFoundException} If a stat cannot be found with that name
        */
        stat(statName: string): number;

        /**
         * Gets the effort values earned by defeating this type of pokemon
         * 
         * @returns {Array<Object>} All found effort values
        */
        evWorth(): Array<Object>;

        /**
         * Gets all egg groups this pokemon belongs to
         * 
         * @returns {Array<String>} All egg groups this pokemon belongs to
        */
        eggGroups(): Array<String>;
    }

    export class FakePokemon implements IPokemon {
        constructor() { }

        nationalDexNumber(): string {
            return "-001";
        }

        names(): Array<Object> {
            return [{ name: "Fake" }, { name: "Pokemon" }];
        }

        name(languageCode: string = "en"): string {
            if (languageCode === "en") {
                return "FakePokemon";
            } else {
                throw new Exception.NameNotFoundException(`Name for language code "${languageCode}" not found.`);
            }
        }

        sprites(): Array<Object> {
            return [{ type: "front", url: "http://www.FakePokemon.com/front" }, { type: "back", url: "http://www.FakePokemon.com/back" }];
        }

        defaultFrontSpriteUrl(): string {
            return "http://www.FakePokemon.com/front_default";
        }

        height(): number {
            return -1;
        }

        heightInMeters(): number {
            return -1;
        }

        weight(): number {
            return -1;
        }

        weightInKg(): number {
            return -1;
        }

        stats(): Array<Object> {
            return [{ name: "attack", value: -1 }, { name: "hp", value: -1 }];
        }

        stat(statName: string): number {
            if (statName === "attack") {
                return -1;
            } else {
                throw new Exception.StatNotFoundException(`Stat with name "${statName}" not found.`);
            }
        }

        evWorth(): Array<Object> {
            return [{ "attack": -1 }, { "defense": -1 }];
        }

        eggGroups(): Array<String> {
            return ["FakeEggGroup1", "FakeEggGroup2"];
        }
    }

}