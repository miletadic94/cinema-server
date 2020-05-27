const db = require("../database");

module.exports = class User {
  constructor(id, email, firstName, lastName, dateOfBirth, address) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.addres = addres;
  }

  save() {}

  static async fetchAll() {
    const ret = db.execute("SELECT * FROM user");
    return ret;
  }

  static getById() {}
};
