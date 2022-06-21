class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }

  walk(speed) {
    console.log(this._name + " walking" + speed);
  }
}

class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  get lang() {
    return this.language;
  }

  set lang(language) {
    this.language = javascript;
  }

  writeCode(dev) {
    console.log(dev + " writing the code" + this.language);
  }
}

const devFrontend = new Programmer("John", "Javascript-ES6");
devFrontend.writeCode("Gunny");
devFrontend.walk(" fast");
