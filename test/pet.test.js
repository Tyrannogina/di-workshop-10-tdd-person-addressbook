const chai = require('chai')
const expect = chai.expect

const Pet = require('../models/pet.js')

describe('Pet', () => {
  it('should initialise properly', () => {
    const pet = new Pet('Garfield', 'cat');

    expect(pet.name).to.equal('Garfield');
    expect(pet.type).to.equal('cat');
  })

  it("should return 'Not an allowed pet type' when pet types is not cat, dog or goldfish", () => {
    pet1 = new Pet('Garfield', 'cat')
    pet2 = new Pet('Odie', 'dog')
    pet2 = new Pet('Nemo', 'goldfish')

  })

  it('should bark if it is a dog', () => {
    const pet = new Pet('Odie', 'dog')

    expect(pet.sound()).to.equal('Woof');
  })

  it('should meow if it is a cat', () => {
    const pet = new Pet('Garfield', 'cat')

    expect(pet.sound()).to.equal('Meow');
  })

  it('should blub if it is a goldfish', () => {
    const pet = new Pet('Nemo', 'goldfish')

    expect(pet.sound()).to.equal('Blub');
  })
})
