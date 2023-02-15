// Prototype and chaining
class animal {
  wild() {
    return false;
  }
  fur() {
    return true;
  }
  english() {
    return false;
  }
}

class human {
  fur() {
    return false;
  }
  english() {
    return true;
  }
  speak() {
    return "Hello Computer";
  }
}

class dog extends animal {
  dna() {
    return "EEbbddBB";
  }
  legs() {
    //    front: 2, back:2
    return 4;
  }
  speak() {
    return "🐕 woof woof 🦴";
  }
}

console.log(
  '\n🧨 ### Object inheritance with class and creation with the "new" keyword🧨'
);
console.log(
  '\n⛣ We set Object dog to have proto of animal, "class dog extends animal" \n'
);
console.log(
  "⛣ New attributes to dog inherited from animal are:",
  "\n",
  Object.getPrototypeOf(dog),
  "\n"
);

console.log("animal === dog.__proto__ \n");
console.log("Is dog the same as a animal", animal === dog.__proto__, "\n \n");

let nora = new dog();
let kozy = new human();

console.log("dog.prototype === nora.__proto__ \n");
console.log(
  "Is Nora the same as a dog?",
  dog.prototype === nora.__proto__,
  "\n \n"
);
console.log("\nGet prototype of nora\n", Object.getPrototypeOf(nora), "\n");

console.log("\n🧨 ### Defining PersonClass Object with class ### 🧨\n");

class PersonClass {
  talk() {
    return "Talking";
  }
}
const me = new PersonClass();
console.log(me);

console.log(
  "\n🧨 ### Pure object way of creating Objects that have inheritance ### 🧨\n"
);
console.log(
  "After creating Object with const use\n const newSuperPerson = Object.create(superPerson);"
);

const superPerson = {
  talk() {
    return "Talking";
  },
};
const newSuperPerson = Object.create(superPerson);
console.log(newSuperPerson);

console.log(
  "\n🧨 ### Final way to create Objects ### 🧨\n Object.setPrototypeOf(newMe, superPerson)"
);
const newMe = {};
Object.setPrototypeOf(newMe, superPerson);
console.log(newMe);
