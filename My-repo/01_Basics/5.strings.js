const name = "almas";
const repoCount = 50;

//onsole.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and my repo count is${repoCount}`);

const gameName = new String("Prachi-almas");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1)); //for check position of number in character string
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString);

const newStringOne = "        alams       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hhtps://alams.com /alasms%10keruwala";

console.log(url.replace("%10", "_"));

console.log(url.includes("alasms"));

console.log(gameName.split("-"));
