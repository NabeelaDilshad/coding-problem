const s = new Map()

// set value to Map
s.set("username", "faizuddin")
s.set("age", 25)

// size of Map
console.log(s.size)

// value exits or not 
s.has("username")    // true
s.has("address")    // false

// get specific value
s.get("age")   // 25

// delete the value 
s.delete("age")

// clear all Map



// entries() function use
const map1 = new Map();
map1.set('0', 'foo');
map1.set(1, 'bar');

for( let [ phla , dushra ] of map1.entries()){
      console.log(phla , dushra)
}

const map2 = new Map();
map2.set('0', 'foo');
map2.set(1, 'bar');

for( let item of map2.values()) {
//     console.log(item) // foo , bar
}