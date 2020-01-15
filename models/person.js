class Person {
  constructor(firstName, surname, dob) {
    this.firstName = this.capitalise(firstName);
    this.surname = this.capitalise(surname);
    this.dob = dob;
    this.emails = [];
    this.phoneNumbers = [];
  }

  /**
   * ensureFirstLetterIsUppercase - description
   *
   * @param  {string} word Any word
   * @return {string} Word with the first letter uppercase
   */
  capitalise(word) {
    let newWord = word;

    if (word[0] !== word[0].toUpperCase()) {
      newWord = word[0].toUpperCase() + word.substring(1);
    }

    return newWord;
  }

  /**
   * Return full full name
   * @return {string}
   */
  fullName() {
    return `${this.firstName} ${this.surname}`;
  }

  /**
   * Adds email to email list.
   *
   * @param {string} email
   * @return {void}
   */
  addEmail(email) {
    this.emails.push(email);
  }


  /**
   * Adds phone number to array of phone numbers.
   *
   * @param  {string} phoneNumber
   * @return {void}
   */
  addPhone(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }


  /**
   * printDetails - Prints the details of the person.
   *
   * @return {void}
   */
  printDetails() {

  }
}

module.exports = Person
