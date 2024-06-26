//for of

// ["", "", ""]
//[({}, {}, {})];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = " hello Worls!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//map

const map = new Map();
map.set("IN", "india");
map.set("USA", "United Steate Of America");
map.set("fr", "france");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
