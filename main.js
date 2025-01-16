const user = {
  name: `levani`,
  age: 24,
  isSmoker: false,
  sayhello: () => {
    console.log("hello world");
  },
};

// for (let key in user) {
//   console.log(key, "key");
//   console.log(user[key], "value"); //values amogeba
// }

// for (let key in user) {
//   if (typeof user[key] !== `string`) {
//     delete user[key];
//   }
// }
// const keys = Object.keys(user);
// keys.forEach((el) => {
//   if (typeofuser[el] !== `string`) {
//     delete user[el];
//   }
// });
// console.log(user);

// const keyValues = Object.entries(user);

// for (let [key, value] of Object.entries(user)) {
//   console.log(key, `key`);
//   console.log(value, `value`);
// }

// if (user.name === "levani") {
//   console.log("beqs");
// } else {
//   console.log("vokks");
// }
// if (user.hasOwnProperty(`isSmoker`)) {
//   console.log("rane");
// }

// classssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// class Student {
//   name = "levani";
//   age = 21;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayhello() {
//     console.log(`hello ${this.name}`);
//   }
// }

// const student1 = new Student(`levani`, 25);

// console.log(student1.name);

// student1.sayhello();

// const student2 = new Student(`giorgi`, 22);

// console.log(student2.name);

// const student1 = new Student();

// student1.name = `levani`;

// class Animals {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   alive() {
//     console.log(`alive`);
//   }
// }

// class Dog extends Animals {
//   constructor(name, age) {
//     super(name, age);
//   }

//   bark() {
//     console.log("barking");
//   }
// }

// const dog1 = new Dog("jeka", 5);

// class fish {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   swim() {
//     console.log("swimming");
//   }

//   alive() {
//     console.log(`alive`);
//   }
// }
// class chicken {
//   constructor(name) {
//     this.name = name;
//   }

//   flying() {
//     console.log("flying");
//   }

//   alive() {
//     console.log(`alive`);
//   }
// }

// class Calculator {
//   #number = 0;
//   constructor(number) {
//     this.#number = number;
//   }
//   add(num) {
//     this.#number += num;
//     return this;
//   }
//   sub(num) {
//     this.#number -= num;
//     return this;
//   }
//   multy(num) {
//     this.#number *= num;
//     return this;
//   }
//   devide(num) {
//     this.#number /= num;
//     return this;
//   }
//   getResult() {
//     console.log(this.#number);
//   }
// }
// const calc1 = new Calculator(0);

// calc1.add(10).multy(2).sub(12).getResult();

class bankAccount {
  #history = [];
  #balance = 0;
  constructor(history, balance) {
    this.#history = history;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withDraw(amount) {
    if (amount > this.#balance) {
      console.log("cant");
    }
    this.addHistory(`WITHDRAW`, this.#balance);
    this.#balance -= amount;
  }

  getHistory(time, type, amount) {
    {
      time = new Date().toISOString();
      type = "DEPOSIT";
      amount = ``;
      personId = "";
    }
  }
  addHistory(type, amount, personId) {
    const history = {
      type,
      amount,
    };
  }
  tranferMoneyToSomeone(amount, personId) {
    if (amount > this.#balance) {
      console.log("cant");
      return;
    }
    this.#balance -= amount;
  }
  getBalance() {
    console.log(this.#balance);
  }

  getTransactionHistory() {
    console.log(this.#history);
  }
}

const giorgiBank = new bankAccount();
giorgiBank.deposit(1000);
giorgiBank.tranferMoneyToSomeone(300, `0102100220`);
giorgiBank.getTransactionHistory();
giorgiBank.deposit(300);
