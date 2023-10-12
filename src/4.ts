class Key {}

class MyHouse {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  openDoor(enteredKey: Key) {
    if (enteredKey === this.key) {
      console.log("Двері відкрито");
    } else {
      console.log("Вийди звідси розбійник!");
    }
  }

  comeIn(person: Person) {
    console.log("Заходьте дівчата, то є моя хата...");
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
