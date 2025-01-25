
function getUser(location,mobilenumber){
    console.log(`your name is ${this.fname} and age is ${this.age} and address is ${location} ${mobilenumber}`)
}
getUser()

const obj = {
     fname :"faiz",
     age :24
}
getUser.call(obj, 'kuhinagar','9847543543' )
getUser.apply(obj, ['kuhinagar','9847543543'])



// bind
const bindfun = getUser.bind(obj, 'kuhinagar','9847543543')
bindfun()