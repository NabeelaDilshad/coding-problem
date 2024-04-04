// learn basic control flow

// if , else , else if , 


function getLocation(location) {
    if (location === 'aligarh') {
        //  console.log(`welcome you are in ${location}`)
    }
    else {
        // console.log(`you are not in aligarh `)
    }
};

getLocation('aligarh');
getLocation('delhi');


/* Quaetion -  age below 18 - your are miner
  if age 18 se 25 - your are young focus your goals;
  if age 25 to 40 - you have focus more time with family;
  else  "do something"

*/

function ageCheck(age) {
    if (age < 18) {
        console.log(`you are miner`)
    }
    else if (age >= 18 && age < 25) {
        console.log(`your are young focus your goals`)

    }
    else if (age >= 25 && age <= 45) {
        console.log(`you have focus more time with family`)
    }
    else {
        console.log(`do something`)
    }
}

// ageCheck(16);
// ageCheck(20);
// ageCheck(30);
// ageCheck(50);

function ageCheck(age) {
    switch (true) {
        case age < 18:
            console.log(`You are a minor`);
            break;
        case age >= 18 && age < 25:
            console.log(`You are young, focus on your goals`);
            break;
        case age >= 25 && age <= 45:
            console.log(`You have to focus more time with family`);
            break;
        default:
            console.log(`Do something`);
            break;
    }
}

// ageCheck(10);
// ageCheck(20);
// ageCheck(30);
// ageCheck(50);

// whenever we are using switch(true) then  case will check condition for that ,
// if we pass swicth(value) then case will check value only

function ageCheck(age) {
    switch (true) {
        case age == 10:
            console.log(`You are a minor`);
            break;
        case age == 20:
            console.log(`You are young, focus on your goals`);
            break;
        case age == 30:
            console.log(`You have to focus more time with family`);
            break;
        default:
            console.log(`Do something`);
            break;
    }
}

// ageCheck(10);
// ageCheck(20);
// ageCheck(30);
// ageCheck(50);


// loop , while loop  10 se 20 k beech k odd num



// for(let i=10 ;  i<=20 ; i++){
//    if(i % 2 != 0){
//        console.log(i)
//    }
// }

// let number = 10;

// while(number <= 20){      // false
//       if(number % 2 != 0){
//         console.log(` odd number ${number}`)
//       }
//       number++;
// }

// let str = "fai_zud_din";
// console.log(str.split('_'))
