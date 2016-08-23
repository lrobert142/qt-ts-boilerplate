const chai = require('chai');
const expect = chai.expect;
const Pokemon = require("../../../build/lib.js").Model.Pokemon;
const ModelValidationException = require("../../../build/lib.js").Exception.ModelValidationException;
const NameNotFoundException = require("../../../build/lib.js").Exception.NameNotFoundException;
const StatNotFoundException = require("../../../build/lib.js").Exception.StatNotFoundException;


describe("Pokemon", () => {

    describe("Constructor", () => {
        it("Should throw an error if any data is missing", () => {
            expect(() => {
                let pokemon = new Pokemon({});
            }).to.throw(ModelValidationException, "nationalDexNumber,names,sprites,height,weight,stats,eggGroups field(s) missing.");
        });

        it("Should throw an error if any data is of the wrong type", () => {
            expect(() => {
                let pokemon = new Pokemon({
                    nationalDexNumber: 1,
                    names: [],
                    sprites: [],
                    height: 1,
                    weight: 1,
                    stats: [],
                    eggGroups: []
                });
            }).to.throw(ModelValidationException, 'Value "nationalDexNumber" of type "number" does not match schema type "string"');
        });

        it("Should create a new instance of Pokemon", () => {
            let pokemon = new Pokemon({
                nationalDexNumber: "001",
                names: [{ name: "UnitTest", languageCode: "en" }],
                sprites: [],
                height: 1,
                weight: 1,
                stats: [],
                eggGroups: []
            });

            expect(pokemon.nationalDexNumber()).to.equal("001");
            expect(pokemon.names()[0].toJSON()).to.deep.equal({ name: "UnitTest", languageCode: "en" });
            expect(pokemon.sprites()).to.deep.equal([]);
            expect(pokemon.height()).to.equal(1);
            expect(pokemon.weight()).to.equal(1);
            expect(pokemon.stats()).to.deep.equal([]);
            expect(pokemon.eggGroups()).to.deep.equal([]);
        });
    });

    describe("#nationalDexNumber", () => {
        it("Should return the given national pokedex number", () => {
            let pokemon = new Pokemon({
                nationalDexNumber: "001",
                names: [{ name: "UnitTest", languageCode: "en" }],
                sprites: [],
                height: 1,
                weight: 1,
                stats: [],
                eggGroups: []
            });

            expect(pokemon.nationalDexNumber()).to.equal("001");
        });
    });

    describe("#names", () => {
        it("Should return an all names", () => {
            let pokemon = new Pokemon({
                nationalDexNumber: "001",
                names: [{ name: "UnitTest", languageCode: "en" }],
                sprites: [],
                height: 1,
                weight: 1,
                stats: [],
                eggGroups: []
            });
            let names = pokemon.names();

            expect(names.length).to.equal(1);
            expect(names[0].toJSON()).to.deep.equal({ name: "UnitTest", languageCode: "en" })
        });
    });

});