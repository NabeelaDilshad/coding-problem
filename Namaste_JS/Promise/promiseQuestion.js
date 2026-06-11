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

