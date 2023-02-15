// ###
// # Object destructuring
// ###
console.log(" // ###\n", "// # Object Destructuring\n", "// ###\n");

const person = {
  name: "John",
  age: 32,
  city: "New York",
  country: "USA",
};

console.log("\n๑•ิ.•ั๑ return person\n", person);

const { name, age } = person;
console.log("๑•ิ.•ั๑ That person's name is", name, "and their age is ", age);

// Object destructuring with alias
const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

console.log(
  "\n⋋ The person's name is ",
  firstName,
  "and he loves eat",
  first,
  "&",
  fruits[2],
  "everyday. ⋌"
);

// ###
// # Spread
// ###
console.log("\n // ###\n", "// # Spread\n", "// ###\n");

console.log(
  "\nWhenever you see three dots ... you are merging objects. This is the Spread operator. \n"
);

const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

const obj1 = {
  foo: 4,
};

const newObj = {
  foo: 4,
  ...obj, // when inserting with spread it will be lexically assigned
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }

const literalNewObj = Object.assign({}, obj, obj1);
console.log("\nLiteral Object merging\n", literalNewObj);

// ###
// # Optional Chaining
// ###
console.log("\n // ###\n", "// # Optional Chaining\n", "// ###\n");

const buildingTenent = [
  {
    name: "alice",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  {
    name: "dan",
    location: { street: "123 pine street" },
  },
  {
    name: "marcy",
    location: { street: "123 apple street", timezone: { offset: "+9:00" } },
  },
];

buildingTenent.forEach((tenant) => {
  console.log(tenant.name, tenant.location);
});

buildingTenent.forEach((tenant) => {
  console.log(
    tenant.name,
    "timezone:",
    tenant.location.timezone?.offset || "Not Set"
  ); // Use OR operator '||' to fill undefined with a default value
});

// ###
// # nullish coalescing
// ###
console.log("\n // ###\n", "// # Nullish Coalescing\n", "// ###\n");

let game;
let game2 = null;
let game3 = 'Sonic';

// Check out styling output with CSS
console.log(
    game ?? `%c${game3}`, "color: #0097e6"
);

let user;
console.log( user ?? "%cGuest", "color: #eb4d4b")

let course;
console.log( course ?? '%cPlease select a course', "color: #6ab04c")

// ###
// # Higher Order Functions
// ###
console.log("\n // ###\n", "// # Higher Order Functions\n", "// ###\n");

function hello(s) {
  return `Hello ${s}`
}
console.log('\n',hello('Stephen'))

// setTimeout(
//  function() {
//    console.log('I am a HOF')
//  }
//)

//const fn = function() {
//  console.log('I\'m also a HOF' )
//}
//setTimeout( fn )

const onClick12 = makeClickHandler(12)
const onClick16 = makeClickHandler(16)
const onClick20 = makeClickHandler(20)

function makeClickHandler(size) {
  return function() {
    document.body.style.fontSize = `${size}px`
  }
}


// ###
// # Closures
// ###
console.log("\n // ###\n", "// # Closures\n", "// ###\n");

let statement = 'I am a closure'; 
function someStatement(a) {
  return a + statement;
}
console.log(someStatement('Did you know '))

