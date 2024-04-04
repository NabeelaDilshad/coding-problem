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
function findAge(age) {
    if (age < 18) {
        console.log(`you are below 18 `)
    }
    else if (age > 40 && age < 25) {
        console.log(`you are young `)
    }
    else {
        console.log("do anything")
    }
}

findAge(20)
findAge(30)
findAge(12)




