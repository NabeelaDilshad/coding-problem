/**  ------------------------    Question 1  ------------------------   */

console.log("Start");

const promise = new Promise((resolve) => {
  console.log("Promise");
  resolve();
});

promise.then(() => {
  console.log("Then");
});

console.log("End");

// Start
// Promise
// End
// Then


/**  ------------------------    Question 2  ------------------------   */

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Start
// End
// Promise
// Timeout



/**  ------------------------    Question 3  ------------------------   */

Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    console.log(x);
  });

// 1
// 2
// 3


/**  ------------------------    Question 4  ------------------------   */

Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.log(err.message);
  });

//   Something went wrong



/**  ------------------------    Question 5  ------------------------   */

Promise.resolve()
  .then(() => {
    throw new Error("Error");
  })
  .catch(() => {
    console.log("Caught");
  })
  .then(() => {
    console.log("After Catch");
  });

//   Caught
// After Catch



/**  ------------------------    Question 6  ------------------------   */

Promise.resolve("Success")
  .finally(() => {
    console.log("Finally");
  })
  .then((data) => {
    console.log(data);
  });

//   Finally
// Success



/**  ------------------------    Question 7  ------------------------   */

Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  console.log,
);

// [1, 2, 3]



/**  ------------------------    Question 8  ------------------------   */

Promise.all([Promise.resolve(1), Promise.reject("Error"), Promise.resolve(3)])
  .then(console.log)
  .catch(console.log);

// Error



/**  ------------------------    Question 9  ------------------------   */

Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("A"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("B"), 500)),
]).then(console.log);

// B



/**  ------------------------    Question 10  ------------------------   */

Promise.any([
  Promise.reject("A"),
  Promise.reject("B"),
  Promise.resolve("C"),
]).then(console.log);

// C



/**  ------------------------    Question 11  ------------------------   */

Promise.allSettled([Promise.resolve("Success"), Promise.reject("Failed")]).then(
  console.log,
);

// [
//   { status: 'fulfilled', value: 'Success' },
//   { status: 'rejected', reason: 'Failed' }
// ]



/**  ------------------------    Question 12  ------------------------   */

Promise.resolve()
  .then(() => {
    return Promise.resolve("Hello");
  })
  .then(console.log);

// Hello



/**  ------------------------    Question 13  ------------------------   */

Promise.resolve()
  .then(() => {
    return Promise.resolve(Promise.resolve("Nested"));
  })
  .then(console.log);

// Nested

/**  ------------------------    Question 14  ------------------------   */

Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x * 2;
  })
  .then((x) => {
    throw new Error("Error");
  })
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(err.message);
  });

// 1
// Error



/**  ------------------------    Question 15  ------------------------   */

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

queueMicrotask(() => console.log("4"));

console.log("5");

// 1
// 5
// 3
// 4
// 2


                            // Async Await Questions


/**  ------------------------    Question 16  ------------------------   */

console.log("Start");

async function test() {
  console.log("Inside")
  return 5
}

test().then((d) => console.log(d))

console.log("End");

// Start
// Inside
// End
// 5


/**  ------------------------    Question 17  ------------------------   */

console.log("Start");

async function test() {
  console.log("Inside");

  await Promise.resolve();

  console.log("After Await");
}

test();

console.log("End");

// Start
// Inside
// End
// After Await


/**  ------------------------    Question 18  ------------------------   */


async function test() {
  return 10;
}

console.log(test());

// Promise { 10 }


/**  ------------------------    Question 19  ------------------------   */


console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);

// 1
// 4
// 3
// 2

/**  ------------------------    Question 20  ------------------------   */

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

const p = new Promise((res, rej) =>{
     console.log("hey")
     return res("3")
})

p.then((f) => {
  console.log(f);
});

console.log(4);

// 1
// hey
// 4
// 3
// 2


/**  ------------------------    Question 21  ------------------------   */

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");


// A
// C
// B


/**  ------------------------    Question 22  ------------------------   */


async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");

  await Promise.resolve();

  console.log("3");
}

test();

console.log("4");

// 1
// 4
// 2
// 3



/**  ------------------------    Question 23  ------------------------   */


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

async function test() {
  console.log("Async Start");

  await Promise.resolve();

  console.log("Async End");
}

test();

console.log("End");


// start
// Async Start
// End
// Async End
// "Timeout"



/**  ------------------------    Question 24  ------------------------   */

async function test() {
  return await Promise.resolve(5);
}

test().then(console.log);

// 5




/**  ------------------------    Question 25  ------------------------   */

async function test() {
  throw new Error("Failed");
}

test().catch(console.log);

// Error: Failed , throw inside async function becomes rejected promise.



/**  ------------------------    Question 26  ------------------------   */


console.log("A");

async function test() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

// A
// B
// E
// C
// D



/**  ------------------------    Question 27  ------------------------   */

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");

  Promise.resolve().then(() => {
    console.log("4");
  });
});

console.log("5");

// 1
// 5
// 3
// 4
// 2


/**  ------------------------    Question 28  ------------------------   */


async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);
}

test();

queueMicrotask(() => {
  console.log(3);
});

console.log(4);

// 1
// 4
// 2
// 3


/**  ------------------------    Question 29  ------------------------   */

console.log("Start");   

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise1");
});

(async () => {
  console.log("Async1");

  await Promise.resolve();

  console.log("Async2");
})();

Promise.resolve().then(() => {
  console.log("Promise2");
});

console.log("End");

// Start
// Async1
// End
// Promise1
// Async2
// Promise2
// Timeout


/**  ------------------------    Question 30  ------------------------   */

async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");

  await Promise.resolve();

  console.log("3");
}

Promise.resolve().then(() => {
  console.log("4");
});

test();

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");

// 1
// 6
// 4
// 2
// 5
// 3

/**  ------------------------    Question 31  ------------------------   */


console.log("A");

async function getData() {
  console.log("B");

  await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log("C");
}

getData();

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");


// A
// B
// E
// D
// C