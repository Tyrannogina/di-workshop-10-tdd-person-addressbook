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
    person.addPhone('07712345678');
    person.addPhone('07654321987');

    expect(person.phoneNumbers).to.deep.equal(['07712345678', '07654321987']);
  })

  it('should return formatted details', () => {
    var person = new Person('Angelica', 'Schuyler', 'February 20, 1756');
    person.addEmail('neverSatisfied@gmail.com');
    person.addEmail('elizaFan@gmail.com');
    person.addPhone('07712345678');
    person.addPhone('07654321987');
    var result = person.returnFormattedDetails();
    var lines = result.split('\n');
    expect(lines[0]).to.equal('Angelica Schuyler');
    expect(lines[1]).to.equal('----------');
    expect(lines[2]).to.equal('DOB: February 20, 1756');
    expect(lines[4]).to.equal('Email Addresses:');
    expect(lines[5]).to.equal('- neverSatisfied@gmail.com');
    expect(lines[6]).to.equal('- elizaFan@gmail.com');
    expect(lines[8]).to.equal('Phone Numbers:');
    expect(lines[9]).to.equal('- 07712345678');
    expect(lines[10]).to.equal('- 07654321987');
  })
})
