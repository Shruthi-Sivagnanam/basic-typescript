/*
Interface in typescript
 */

interface Student_details {
  name: string;
  rno: number;
  display: () => void;
}

const student: Student_details = {
  name: "abc",
  rno: 12,
  display() {
    console.log("student1");
  },
};

class Attendance implements Student_details {
  name = "";
  rno = 0;
  display() {
    console.log(this.name);
  }
  constructor(name: string, rno: number) {
    this.name = name;
    this.rno = rno;
  }
}
