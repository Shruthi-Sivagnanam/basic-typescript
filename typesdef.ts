/*
How define vaiables amd constants in typescript.

string number.

*/

const username: string = "xyz";

//username='abc'   --- this would produce an error.

let user = "abc";

//user is auto declared as string by seeing the initialize.

console.log(user);

/*
A variable can have more than two no of datatypes
*/

let id: string | number;

id = 10;
console.log(id);

id = "abc";
console.log(id);
