console.log("-------  promise api   -------");

/**
JavaScript me 6 major Promise APIs hoti hain:
    Promise.all()
    Promise.allSettled()
    Promise.race()
    Promise.any()
    Promise.resolve()
    Promise.reject()
 * 
 * 
 *  Promise.all()	        Resolves when all promises in an array are resolved; rejects if one fails.
 *  Promise.allSettled()	Resolves when all promises are settled, returning their results.
 *  Promise.race()	        Resolves/rejects as soon as the first promise settles.
 *  Promise.any()	        Resolves with the first fulfilled(resolve) promise, ignoring rejections.
 *  Promise.resolve()	    Creates a resolved promise with a given value.
 *  Promise.reject()	    Creates a rejected promise with a given reason.
 */


/** ------------------------- --------------------- ---------------- ----------------- ----------------- */

/**
 *  Promise.all()
 */
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Posts");
const p3 = Promise.resolve("Comments");

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// output - ["User", "Posts", "Comments"];

//   ➡️ if reject of the promise
const p1 = Promise.resolve("User");
const p2 = Promise.reject("API Failed");
const p3 = Promise.resolve("Comments");

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// output - API Failed;



/** ------------------------- --------------------- ---------------- ----------------- ----------------- */


/**
 *  Promise.allSettled()
 */

const p1 = Promise.resolve("User");
const p2 = Promise.reject("API Failed");
const p3 = Promise.resolve("Comments");

Promise.allSettled([p1, p2, p3]).then((result) => console.log(result));

//   [
//   { status: "fulfilled", value: "User" },
//   { status: "rejected", reason: "API Failed" },
//   { status: "fulfilled", value: "Comments" }
// ]




/** ------------------------- --------------------- ---------------- ----------------- ----------------- */



/**
 *  Promise.race()
 */

const p1 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));

const p2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Fast"), 1000),
);

Promise.race([p1, p2])
  .then((d) => console.log(d))
  .catch((d) => {
    console.log(d); // output - Fast
  });

// Real-world use case
// API Timeout

const apiCall = fetch("/users");

const timeout = new Promise((_, reject) =>
  setTimeout(() => reject("Timeout"), 5000),
);

Promise.race([apiCall, timeout]); // If API responds within 5 seconds, it resolves; otherwise, it rejects with "Timeout".


/** ------------------------- --------------------- ---------------- ----------------- ----------------- */

/**
 *  Promise.any()
 */

const p1 = Promise.reject("Server 1 Down");

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Server 2 Data"), 1000),
);

const p3 = Promise.resolve("Server 3 Data");

Promise.any([p1, p2, p3]).then(console.log); // output - Server 3 Data (because it resolves first)



/** ------------------------- --------------------- ---------------- ----------------- ----------------- */

/**
 * Promise.resolve() and Promise.reject()
 */

// Promise.resolve() 👉 Turant resolved promise banata hai.
// Promise.reject() 👉 Turant rejected promise banata hai.

const p = Promise.resolve("Hello");
p.then(console.log);

Promise.reject("Error occurred").catch(console.log);


/** 
                Interview Summary
      Promise.all()
      → Sab success hone chahiye.

      Promise.allSettled()
      → Sabka result chahiye.

      Promise.race()
      → Jo pehle settle ho (resolve/reject).

      Promise.any()
      → Jo pehle resolve ho.

      Promise.resolve()
      → Resolved promise create karta hai.

      Promise.reject()
      → Rejected promise create karta hai.

*/