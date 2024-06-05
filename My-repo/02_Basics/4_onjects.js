// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "some@gamil.com",
  fullname: {
    userfullname: {
      firstname: "Almas",
      lastname: "keruwala",
    },
  },
};

// console(logregularUser.fullname.userfullname.firstname);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const boj3 = { 5: "a", 6: "b" };

// // const obj3 = { obj1, obj2 };
// const onj3 = Object.assigh { obj1, obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "al@gmail.com",
  },
  {
    id: 1,
    email: "al@gmail.com",
  },
  {
    id: 1,
    email: "al@gmail.com",
  },
];

user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor: instructor } = course;

console.log(instructor);
