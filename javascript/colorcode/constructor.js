// Constructor Functions

function Person(name, gender) {
  this.name = name;
  this.talk = () => {
    return `Hello I am ${this.name}`;
  };
  this.gender = gender;
}

const stephen = new Person("Stephen", "male");
const diane = new Person("Diane", "female");
const barney = new Person("Barney", "male");

function SuperElement(type, content, color) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  document.body.append(this.el);
  this.el.style.color = color;
  this.el.addEventListener("click", () => {
    console.log(this.el);
  });
}

const h1 = new SuperElement("h1", "Helllllo buddy!", "white");

const array = ["a", "b", "c"];
const myElements = array.map((item) => {
  return new SuperElement("p", item, "green");
});

console.log("\n🧪 ### Constructor Functions ### 🧪\n");
console.log(stephen);
