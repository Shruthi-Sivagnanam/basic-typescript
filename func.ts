/*
Functions in typescript
[arrow function]
 */

const calculateMyAge = (birthYear: number): number => {
  console.log(new Date(Date.now()));
  const age: number = new Date(Date.now()).getFullYear() - birthYear;
  return age;
};

//const myAge: number = calculateMyAge(2003);
const myAge = calculateMyAge(2003);

console.log(myAge);
