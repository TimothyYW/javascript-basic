/* Class Declaration */
class User {
  greeting() {
    console.log('Hello, User 01!');
  }
}

/* Class Expression */
const Guest = class {
  greeting() {
    console.log('Hi, User 01!');
  }
};

const user1 = new User();
user1.greeting();

const guest1 = new Guest();
guest1.greeting();

class Student {
  fullname;
  program;

  constructor(_fullname, _program) {
    this.fullname = _fullname;
    this.program = _program;
  }
}

const student1 = new Student('Defryan', 'Web Development');
console.log(student1);
