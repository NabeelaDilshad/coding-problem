// learn basic control flow

// if , else , else if ,

function getLocation(location) {
  if (location === "aligarh") {
    //  console.log(`welcome you are in ${location}`)
  } else {
    // console.log(`you are not in aligarh `)
  }
}

getLocation("aligarh");
getLocation("delhi");

/* Quaetion -  age below 18 - your are miner
  if age 18 se 25 - your are young focus your goals;
  if age 25 to 40 - you have focus more time with family;
  else  "do something"

*/

function ageCheck(age) {
  if (age < 18) {
    console.log(`you are miner`);
  } else if (age >= 18 && age < 25) {
    console.log(`your are young focus your goals`);
  } else if (age >= 25 && age <= 45) {
    console.log(`you have focus more time with family`);
  } else {
    console.log(`do something`);
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

function getMonthbyCode(monthCode) {
  const MonthName = {
    1: "jan",
    2: "feb",
    3: "mar",
    4: "apr",
    5: "may",
    6: "jun",
    7: "july",
    8: "aug",
    9: "sep",
    10: "oct",
    11: "nov",
    12: "dec",
  };
//   console.log(MonthName[monthCode])
//   switch (monthCode) {
//     case 1:
//       console.log("jan");
//       break;
//     case 2:
//       console.log("feb");
//       break;
//     case 3:
//       console.log("mar");
//       break;
//     case 4:
//       console.log("aplr");
//       break;
//     case 5:
//       console.log("may");
//       break;
//     case 6:
//       console.log("jun");
//       break;
//     case 7:
//       console.log("jul");
//       break;
//     case 8:
//       console.log("aug");
//       break;
//     case 9:
//       console.log("sep");
//       break;
//     case 10:
//       console.log("oct");
//       break;
//     case 11:
//       console.log("nov");
//       break;
//     case 12:
//       console.log("dec");
//       break;
//     default:
//       console.log("Invalid code ur provide !");
//       break;
//   }
}

getMonthbyCode(1); // Jan
getMonthbyCode(2); // feb
getMonthbyCode(6); // Jun
getMonthbyCode(10); // oct
