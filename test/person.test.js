const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', () => {
  it('should initialise properly', () => {
    var person = new Person('Eliza', 'Hamilton', 'August 9, 1757');

    expect(person.firstName).to.equal('Eliza');
    expect(person.surname).to.equal('Hamilton');
    expect(person.dob).to.equal('August 9, 1757');
    expect(person.emails).to.deep.equal([]);
    expect(person.phoneNumbers).to.deep.equal([])
  })

  it('should capitalise the first name and surname', () => {
    var person = new Person('eliza', 'hamilton', 'August 9, 1757');

    expect(person.firstName).to.equal('Eliza');
    expect(person.surname).to.equal('Hamilton');
  })

  it('should return full name', () => {
    var person = new Person('Angelica', 'Schuyler', 'February 20, 1756');
    const fullName = person.fullName();

    expect(fullName).to.equal('Angelica Schuyler');
  })

  it('should add email into email list', () => {
    var person = new Person('Angelica', 'Schuyler', 'February 20, 1756');
    person.addEmail('neverSatisfied@gmail.com');
    person.addEmail('elizaFan@gmail.com');

    expect(person.emails).to.deep.equal(['neverSatisfied@gmail.com', 'elizaFan@gmail.com']);
  })

  it('should add phones into phone list', () => {
    var person = new Person('Angelica', 'Schuyler', 'February 20, 1756');
    person.addPhone('0687809898687');
    person.addPhone('3897459734589');

    expect(person.phoneNumbers).to.deep.equal(['0687809898687', '3897459734589']);
  })
})
