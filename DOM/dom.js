/**
 * Demonstrating getAttribute and setAttribute
 */
const username = document.getElementById("user_name");

// Using getAttribute
console.dir(username.getAttribute("id")); // Output: "user_name"

// Using setAttribute to modify attributes
username.setAttribute("name", "faiz_class");
username.setAttribute("id", "update");
// Existing class will be replaced if setAttribute is used
// username.setAttribute("class", "font-15");

/**
 * Using classList for class manipulation
 */
username.classList.add("font-15", "class2"); // Add new classes without replacing existing ones
username.classList.remove("class2");         // Remove a specific class
username.classList.toggle("class1");         // Toggle a class (add/remove based on existence)
console.log(username.classList.contains("class1")); // Check if a class exists (true/false)
username.classList.replace("oldClass", "newClass"); // Replace an existing class
console.log(username.classList.length);             // Get the total number of classes

// Example: Toggling a class on button click
const button = document.getElementById("toggleButton");
button.addEventListener("click", () => {
  button.classList.toggle("active");
});

/**
 * Demonstrating innerHTML, outerHTML, and innerText
 */
const container = document.getElementById("container");

// Get and set HTML content using innerHTML
console.log(container.innerHTML); // Output: Content inside the container
container.innerHTML = "<b>Hi there!</b>";
console.log(container.innerHTML); // Output: "<b>Hi there!</b>"

// Get and replace an element with outerHTML
const div = document.getElementById("example");
console.log(div.outerHTML); 
// Output: "<div id="example"><p>This is a paragraph.</p></div>"

div.outerHTML = '<section id="example">New content in section.</section>';
console.log(document.getElementById("example").outerHTML); 
// Output: "<section id="example">New content in section.</section>"

// Get and set visible text content using innerText
console.log(container.innerText); // Output: Visible text inside the container
container.innerText = "Hi there!";
console.log(container.innerText); // Output: "Hi there!"

/**
 * Create and append dynamic elements to the DOM
 */
let heading = document.createElement("h1");

// Create a paragraph element dynamically
const p = document.createElement("p");
p.innerText = "This is created dynamically"; // Slower than using createTextNode
p.style.color = "red";
p.setAttribute("id", "pera");
p.classList.add("class1", "class2");

// Append the paragraph to the heading, and the heading to the body
heading.appendChild(p);
document.body.appendChild(heading);

// Create another div dynamically and check for attributes
const dynamicDiv = document.createElement("div");
dynamicDiv.setAttribute("id", "myDiv");
dynamicDiv.setAttribute("class", "container");

console.log(dynamicDiv.hasAttributes()); // Output: true
