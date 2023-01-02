/*
Generic in typescript
*/

const func = <T>(args: T) => {
  return args;
};

const user = func<string>("xyz");

console.log(user.toUpperCase());
