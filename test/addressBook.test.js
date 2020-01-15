const chai = require('chai')
const expect = chai.expect

const AdressBook = require('../models/addressBook.js')
const Person = require('../models/person.js')

describe('AdressBook', () => {
  it('should initialise properly', () => {
    const book = new AdressBook();

    expect(book.entries).to.deep.equal([]);
  })

  it('can add people to the book', () => {
    const book = new AdressBook();
    const person1 = new Person('Eliza', 'Hamilton', 'August 9, 1757');
    book.add(person1);

    expect(book.entries.length).to.equal(1);
    expect(book.entries[0].firstName).to.equal('Eliza');
    expect(book.entries[0].surname).to.equal('Hamilton');
  })

  describe('Search methods', ( )=> {
    const book = new AdressBook();
    const person1 = new Person('Eliza', 'Schuyler', 'August 9, 1757');
    const person2 = new Person('Angelica', 'Schuyler', 'February 20, 1756');
    const person3 = new Person('Eliza', 'Doolittle', 'July 2, 1912');

    book.add(person1);
    book.add(person2);
    book.add(person3);

    it('can find a person by firstName', () => {
      const result = book.findByFirstName('Eliza');

      expect(result.length).to.equal(2);
      expect(result[0].firstName).to.equal('Eliza');
      expect(result[1].firstName).to.equal('Eliza');
    })

    it('can find a person by surname', () => {
      const result = book.findBySurname('Schuyler');

      expect(result.length).to.equal(2);
      expect(result[0].surname).to.equal('Schuyler');
      expect(result[1].surname).to.equal('Schuyler');
    })
  })
})
