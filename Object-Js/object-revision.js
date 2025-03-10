const obj = { name: "faizuddin" }
const ageinformation = { age: 25 }
const validAddress = { state: "UP", city: "kushinagar" }
const isAdmin = false
const isValidAddress = true


function mergeObject(isAdmincheck, isValidAddresscheck) {
    // let newobj = {}
    if (isAdmincheck) {
        for(let key in ageinformation){
         obj[key] = ageinformation[key] // ageinformation['age']
        }
        // newobj = { ...obj, ...ageinformation}
    }
    if (isValidAddresscheck) {
        // newobj = { ...obj,...newobj, ...validAddress }
         for(let key in validAddress){
             obj[key] = validAddress[key]
        }
    }
    if(!isValidAddresscheck && !isValidAddresscheck){
         return obj
    }
    return obj
}
console.log(mergeObject(isAdmin,isValidAddress))









