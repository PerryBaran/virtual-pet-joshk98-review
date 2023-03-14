const Pet = require('../src/pet');

describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    test('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    test('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    test('incrememnts the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
    test('increments hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    })
    test('increments fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    })
});

