//let var const  // sope is {}
var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("INNNER:", a);
}

// console.log(a);
//  console.log(b);
// console.log(c);

function one() {
  const username = "Almas";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //  console.log(website);

  two();
}

//one();

if (true) {
  const username = "almas";
  if (username === "almas") {
    const website = "youteb";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++ intersting ++++++++++++++
console.log(addone(5));

function add(num) {
  return num + 1;
}
asddTwo(5);
const addTwo = function (num) {
  return num + 2;
};
