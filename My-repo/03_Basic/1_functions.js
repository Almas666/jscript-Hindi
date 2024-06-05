function sayMyName() {
  console.log("A");
  console.log("L");
  console.log("M");
  console.log("A");
  console.log("S");
}

//sayMyName(); //sayMyName is refenrnce and () is executino

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  // return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log("result:", result);

function loginUserMessage(username = "same") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

//console.log(loginUserMessage("almas"));
// console.log(loginUserMessage("almas"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

//console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "almas",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(gatArray) {
  return grtArray[1];
}
console.log(returnSecondValue([200, 400, 500, 600]));
