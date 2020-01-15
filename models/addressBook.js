class AdressBook {
  constructor() {
    this.entries = [];
  }

  /**
   * add - Adds a person to the book entries
   *
   * @param  {Person} person
   * @return {void}
   */
  add(person) {
    this.entries.push(person);
  }
}

module.exports = AdressBook;
