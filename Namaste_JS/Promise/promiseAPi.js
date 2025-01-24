
console.log("-------  promise api   -------")

/**
 * Promise.all()
 * Promise.any()
 * Promise.race()
 * Promise.allSettled()
 * 
 * 
 *  Promise.all()	Resolves when all promises in an array are resolved; rejects if one fails.
 *  Promise.allSettled()	Resolves when all promises are settled, returning their results.
 *  Promise.race()	Resolves/rejects as soon as the first promise settles.
 *  Promise.any()	Resolves with the first fulfilled(resolve) promise, ignoring rejections.
 */


// Promise.all()

const p1 = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
                 resolve("Promise 1 resolve")
          }, 1000)
      })
}
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
               reject("Promise 2 resolve")
        }, 1000)
    })
}
const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
               resolve("Promise 3 resolve")
        }, 3000)
    })
}


// Promise.all([p1(), p2(), p3()]).then((data) => {
//      console.log("promise all result ----", data)
// }).catch((error) => {
//      console.log("promise reject value  ----", error)
// })


// Promise.any([p1(), p2(), p3()]).then((data) => {
//     console.log("promise all result ----", data)
// }).catch((error) => {
//     console.log("promise reject value  ----", error)
// })

Promise.allSettled([p1(), p2(), p3()]).then((data) => {
    console.log("promise all result ----", data)
}).catch((error) => {
    console.log("promise reject value  ----", error)
})

// Promise.race([p1(), p2(), p3()]).then((data) => {
//     console.log("promise all result ----", data)
// }).catch((error) => {
//     console.log("promise reject value  ----", error)
// })