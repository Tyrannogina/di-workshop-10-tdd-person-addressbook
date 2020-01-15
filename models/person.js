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
   * returnFormattedDetails - Returns the formatted details in this manner:
   * Angelica Schuyler
   * ----------
   * DOB: February 20, 1756
   *
   * Email Addresses:
   * - neverSatisfied@gmail.com
   * - elizaFan@gmail.com
   *
   * Phone Numbers:
   * - 07712345678
   * - 07654321987
   *
   * @return {string} formatted details
   */
  returnFormattedDetails() {
    const lines = [
      this.fullName(),
      '----------',
      `DOB: ${this.dob}`,
      '',
    ];

    lines.push('Email Addresses:');
    this.emails.forEach(email => {
      lines.push(`- ${email}`);
    })

    lines.push('');
    lines.push('Phone Numbers:');
    this.phoneNumbers.forEach(phoneNumber => {
      lines.push(`- ${phoneNumber}`);
    })

    return lines.join('\n')


  }
}

module.exports = Person
