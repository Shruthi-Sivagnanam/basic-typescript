/*
Declaration of object and array
*/

//Object

const student: {
  name: string;
  id: number;
  sub: string[];
} = {
  name: "abc",
  id: 10,
  sub: ["math", "science"],
};

//types can be defined separately in typescript

type student = {
  name: string;
  id: number;
  sub: string[];
  mark?: string[]; //optional member.
};

const student_1: student = {
  name: "abc",
  id: 11,
  sub: ["math", "science"],
};

//array of objects

const students: student[] = [student_1];
