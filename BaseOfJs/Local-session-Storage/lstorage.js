/**
 * 
Local Storage

        Local Storage is a browser storage mechanism that stores data with no expiration time. 
        The data remains available even after the browser or tab is closed, until it is explicitly removed.

Session Storage
        Session Storage is a browser storage mechanism that stores data only for the duration of a browser tab or window.
         The data is automatically removed when the tab or browser is closed.
 */



/*=========================================
            LOCAL STORAGE
=========================================*/

// 1. setItem(key, value)



// Add or Update

localStorage.setItem("name", "Faiz");
localStorage.setItem("age", "25");

//------------------------------------------

// 2. getItem(key)
// Read Value

console.log(localStorage.getItem("name"));

//------------------------------------------

// 3. removeItem(key)
// Remove Single Item

localStorage.removeItem("age");

//------------------------------------------

// 4. clear()
// Remove Everything

// localStorage.clear();

//------------------------------------------

// 5. key(index)
// Get Key by Index

console.log(localStorage.key(0));

//------------------------------------------

// 6. length
// Total Number of Items

console.log(localStorage.length);

//------------------------------------------

// 7. Store Object

const user = {
  id: 1,
  name: "Faiz",
  city: "Lucknow",
};

localStorage.setItem("user", JSON.stringify(user));

//------------------------------------------

// 8. Read Object

const userData = JSON.parse(localStorage.getItem("user"));

console.log(userData);

//------------------------------------------

// 9. Store Array

const skills = ["HTML", "CSS", "JavaScript", "React"];

localStorage.setItem("skills", JSON.stringify(skills));

//------------------------------------------

// 10. Read Array

const skillData = JSON.parse(localStorage.getItem("skills"));

console.log(skillData);

//------------------------------------------

// 11. Check Key Exists

if (localStorage.getItem("name")) {
  console.log("Key Exists");
} else {
  console.log("Key Not Found");
}

//------------------------------------------

// 12. Update Existing Value

localStorage.setItem("name", "Faizuddin");

//------------------------------------------

// 13. Iterate All Keys

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  const value = localStorage.getItem(key);

  console.log(key, value);
}

//------------------------------------------

// 14. for...in (Not Recommended)

for (const key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    console.log(key, localStorage.getItem(key));
  }
}

//------------------------------------------

// 15. Convert LocalStorage into Object

const allData = {};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  allData[key] = localStorage.getItem(key);
}

console.log(allData);

/*=========================================
          SESSION STORAGE
=========================================*/

// 1. setItem()

sessionStorage.setItem("username", "Faiz");

//------------------------------------------

// 2. getItem()

console.log(sessionStorage.getItem("username"));

//------------------------------------------

// 3. removeItem()

sessionStorage.removeItem("username");

//------------------------------------------

// 4. clear()

// sessionStorage.clear();

//------------------------------------------

// 5. key()

console.log(sessionStorage.key(0));

//------------------------------------------

// 6. length

console.log(sessionStorage.length);

//------------------------------------------

// 7. Store Object

const employee = {
  id: 101,

  name: "John",
};

sessionStorage.setItem(
  "employee",

  JSON.stringify(employee),
);

//------------------------------------------

// 8. Read Object

const emp = JSON.parse(sessionStorage.getItem("employee"));

console.log(emp);

//------------------------------------------

// 9. Store Array

sessionStorage.setItem(
  "colors",

  JSON.stringify(["Red", "Blue", "Green"]),
);

//------------------------------------------

// 10. Read Array

const colors = JSON.parse(sessionStorage.getItem("colors"));

console.log(colors);

//------------------------------------------

// 11. Iterate Session Storage

for (let i = 0; i < sessionStorage.length; i++) {
  const key = sessionStorage.key(i);

  const value = sessionStorage.getItem(key);

  console.log(key, value);
}

/*=========================================
         STORAGE EVENT
=========================================*/

window.addEventListener(
  "storage",

  (event) => {
    console.log("Key :", event.key);

    console.log("Old :", event.oldValue);

    console.log("New :", event.newValue);

    console.log("Storage :", event.storageArea);

    console.log("URL :", event.url);
  },
);

/*=========================================
        BONUS UTILITY FUNCTIONS
=========================================*/

// Save Any Data

function save(key, value) {
  localStorage.setItem(
    key,

    JSON.stringify(value),
  );
}

// Read Any Data

function read(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Delete

function remove(key) {
  localStorage.removeItem(key);
}

// Clear

function clearAll() {
  localStorage.clear();
}

// Usage

save("country", "India");

console.log(read("country"));

remove("country");

// clearAll();



/**
 * The storage event is fired on other browser tabs or windows of 
 * the same origin when localStorage is modified in one tab. 
 * It is commonly used to synchronize application state across multiple tabs, 
 * such as logout, theme changes, language updates, and shopping cart synchronization.
 */

// Tab 1
localStorage.setItem("theme", "dark");

// Tab 2
window.addEventListener("storage", (event) => {
    console.log(event.key);      // theme
    console.log(event.newValue); // dark
});

