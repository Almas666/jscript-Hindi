const marvel_heros = ["Thor", " Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][12]);

// const all_new_herosmarvel_heros.concat(dc_heros);
// console.log(all_new_herosmarvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

// const another_array = [1, 2, 3, [p4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(infinity);
// console.log(real_another_array);

console.log(Array.isArray("Almas"));
console.log(Array.from("Almas"));
console.log(Array.from({ name: "Almas" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
