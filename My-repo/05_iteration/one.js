//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("25 is best number");
  }
  //console.log(i);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop values ${j} and inneer loop${i} `);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["flasg", "baman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

for (let index = 0; index <= 20; index++) {
  if (index == 10) {
    console.log("Detacted 10");
    continue;
  }
  console.log(`value of i is ${index}`);
}
