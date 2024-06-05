// singleton
// objects create

// objrct litersl

const mySym = Symbol("Key1"); //sybmol data type

const JsUser = {
  name: "Almas",
  "Full name": "Keruwala Almas ",
  [mySym]: "mykey1",
  ag: 18,
  location: "Ahemdabad",
  email: "itsamlas12212@gamil.com",
  isLogedIn: false,
  lsatLogedinDays: ["Monday", " Saturday"],
};

// console.log(JsUser);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "amucgat.com";
//Object.freeze(JsUser);
JsUser.email = "amuasus.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log(`Hello Js User,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
