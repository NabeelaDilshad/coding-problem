function User(name, age) {
  /**  benhind the sence js do this 
  1- const obj = {};

  2-  Object.setPrototypeOf(obj, User.prototype)


  3- User.call(obj, name, age);
      this.name = name;
      this.age = age;
   
  4 - return obj;

*/

  this.name = name;
  this.age = age;
}

User.prototype.increment = function () {
  this.age += 1;
};

const user = new User("faiz", 25);
user.increment();
console.log(user);

// ES Way modern way

class User1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// User.prototype.greet = function () {
//       console.log(`Hello ${this.name}`);
// };

const user1 = new User1("Faiz", 25);
user1.greet();
console.log(user1);





/**
 *  Encapsulation - Encapsulation is the fundamental programming concept of bundling data (variables)
 * and the methods (functions) that operate on that data into a single unit (such as a class),
 * while restricting direct access to some of the object's components
 *
 */

class BankAccount {
  // Private variable
  #name
  #amount; 
  constructor(name, amount) {
    this.#name = name;
    this.#amount = amount;
  }

  // Deposit money
  deposit(newAmount) {
    if (newAmount <= 0) {
      return "Amount should be greater than 0";
    }

    this.#amount += newAmount;
  }

  // Withdraw money
   withdraw(amount) {
    if (amount > this.#amount) {
      return "Insufficient balance";
    }

    this.#amount -= amount;
  }

  // Get current balance
  currentAmount() {
    return this.#amount;
  }
}

const accountHolder = new BankAccount("Faiz", 1000);

console.log(accountHolder.currentAmount()); // 1000

accountHolder.deposit(500);
// accountHolder.#amount = 0  // we can't access since it's private variable


console.log(accountHolder.currentAmount()); // 1500




/**
 * Abstraction -  is the concept of hiding complex internal implementation details and showing only the essential features to the user
 */

class CoffieMachine{

   #boilMilk(){
      return "milk is boiled"
   }

   #addIngredients(){
      return "Ingredients is added sucessfully"
   }
    
   makeCoffie(){
       this.#boilMilk()
       this.#addIngredients()
       return "your coffie is ready for serve"
   }
}


const coffie = new CoffieMachine()
console.log(coffie.makeCoffie())




/**
 *  inheritance - inherit the properties and behaviors (methods) of an existing class (base or parent class)
 */


class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const dog = new Dog();
console.log("dog", dog)
dog.eat();
dog.bark();



/**  
 *  Javascript doing this behind ths sence 
 * 
  

function Animal() {}

Animal.prototype.eat = function () {
  console.log("Eating...");
};

function Dog() {}

Dog.prototype.bark = function () {
  console.log("Barking...");
};

// Inheritance
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

*/



/**
 * Polymorphism - Same method different behavior.
 * 
 * Method Overriding - also same 
 */


// class Animal {
//   sound() {
//     console.log("Animal Sound");
//   }
// }

// class Dog extends Animal {
//   sound() {
//     console.log("Bark");
//   }
// }

// class Cat extends Animal {
//   sound() {
//     console.log("Meow");
//   }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.sound();
// cat.sound();





/**
 * Super keyword -- Call the parent constructor
 * 
 */


// Parent Class
class Ani {
  constructor(name) {
    this.name = name; // Parent initializes the name
  }
}

// Child Class extending Parent
class Dogg extends Ani{
  constructor(name, breed) {
    // 1. Call the parent constructor using super()
    super(name); 
    
    // 2. Now you can safely use 'this'
    this.breed = breed; 
  }

  introduce() {
    console.log(`I am ${this.name}, and I am a ${this.breed}.`);
  }
}

const myDog = new Dogg("Buddy", "Golden Retriever");
myDog.introduce(); // Output: I am Buddy, and I am a Golden Retriever.
console.log("myDog super keyword ", myDog)



// class Hero {
//   attack() {
//     return "Inflicted 10 damage!";
//   }
// }

// class SuperSoldier extends Hero {
//   attack() {
//     // Call the parent's attack method using super.attack()
//     let basicAttack = super.attack(); 
//     return `${basicAttack} Plus 20 bonus laser damage!`;
//   }
// }

// const cap = new SuperSoldier();
// console.log(cap.attack()); 
// // Output: Inflicted 10 damage! Plus 20 bonus laser damage!









/**
 * static method  -- call on Class
 * 
 */

class Teacher{
    static addMark(){
      // 
    }
}

Teacher.addMark()




/**
 * Getter and Setter
 */

class Payment {

  constructor(amount, status) {
    this._amount = amount;
    this._status = status;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    if (value <= 0) {
      console.log("Payment amount must be greater than 0.");
      return;
    }

    this._amount = value;
  }

  // Getter for status
  get status() {
    return this._status;
  }

  // Setter for status
  set status(value) {
    const validStatuses = ["Pending", "Processing", "Completed", "Failed"];

    if (!validStatuses.includes(value)) {
      console.log("Invalid payment status.");
      return;
    }

    this._status = value;
  }
}

const payment = new Payment(1000, "Pending");

console.log("payment", payment)
console.log(payment.amount); // 1000
console.log(payment.status); // Pending

payment.amount = 1500;
payment.status = "Completed";

console.log(payment.amount); // 1500
console.log(payment.status); // Completed

// Invalid updates
payment.amount = -500;
payment.status = "Success"; // Not a valid status

console.log(payment.amount); // 1500
console.log(payment.status); // Completed