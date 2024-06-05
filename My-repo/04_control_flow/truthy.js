const userEmail = "alm@gmail.com";
b;

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email ");
}

// false nvalues

// false .0,-0,BigInt 0n ,"", null.undefined ,NaN

//true values

// "0".'faise ', " ", [] ,{},function(){},

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("onj is empty");
}
