const user = {
  username: "Almas",
  price: 999,

  WelcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    // console.log(this);
  },
};

// user.WelcomeMessage();
// user.username = "sam";
// user.WelcomeMessage();
// console.log(this);

// function chai() {
//   let username = "Almas";
//   console.log(this.username);
// }
// chai();

// const chai = function name(params) {
//   let username = "Almas";
//   console.log(this.username);
// };

const chai = () => {
  //arrao function
  let username = "Almas";
  console.log(this);
};
//chai();

//() => {}; this is a Basic syntex of arrow function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: "Almas" });

console.log(addTwo(3, 4));

// const myArray = [2, 3, 4, 5, 6, 7];

// myArray.forEach(()=>);
