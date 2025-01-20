class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  // Metodo creato da me per confrontare l'età
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    } else {
      return this.firstName + " ha la stessa età di " + otherUser.firstName;
    }
  }
}

const user1 = new User("Salvatore", "Desole", 26, "Sassari");
const user2 = new User("Giovanni", "Giorgio", 30, "Milano");
const user3 = new User("Ajeje", "Brazorf", 20, "Roma");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user3));
