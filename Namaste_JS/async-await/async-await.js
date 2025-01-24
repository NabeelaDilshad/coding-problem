
async function getuser(){
     return 5
}
// or rquivalent
// function getuser(){
//     return new Promise((resolve, reject) =>{
//        resolve(5)
//     })
// }


const r = getuser();
r.then((data) => {
    //  console.log(data)
})




// how  await work 

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
             resolve("Promise 2 resolve")
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


console.log("start !!!")

async function callingApi() {
        const presult1 =  await p1();
        /**
         *  p1() is called, which returns a Promise that resolves after 1 seconds.
            The await keyword pauses the execution of callingApi until the p1 promise is resolved. 
            and all the code which is comming after the p1 promise is suspended
            Meanwhile, the JavaScript engine moves to other tasks call. outside of this function (callingApi)

         */
        const presult2 =  await p2();
        const presult3 =  await p2();
        console.log("promise api calling !!!")
        return [presult1, presult2, presult3]
}
callingApi().then(data =>{
     console.log(data)
}).catch((error) =>{
    console.log(error)
})


console.log("end !!!")


/**
        • Async/await used for handling promises
        • Async always return a promise
        ° Await can only used inside an async function
        ° Can only write await keyword infront of a promise
        ° While awaiting JS Engine does not actually wait rather the function is suspended and call stack is free for other stuffs but it looks like program is waiting at that point
        ° Use try catch for Error handling and can also use  . Catch() method
 */




        // error handing with try catch

   console.log(" ------  learning try catch ------")
   async function trycallingApi() {
             try{
                const presult1 =  await p1();
                const presult2 =  await p2();
                const presult3 =  await p2();
                console.log(presult1, presult2, presult3)
             }
             catch(err) {
                    console.log(err)
             }
             finally{
                  console.log("it will always be executed either resolve or reject !!!")
             }
    }
    trycallingApi();



    
    /**
     *  how is fetch working
     */
    
    const API_URL = "https://api.github.com/users/faizuddin53";
     async function getGithubProfile(){
        try{
            const resposce = await fetch(API_URL )
            const jsonData = await resposce.json()
            console.log(jsonData)
        }
        catch(err){
            console.log(err)
        }
    }
    getGithubProfile()