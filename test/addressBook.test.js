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
})
