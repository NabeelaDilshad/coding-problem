


// getAttribute
// const username = document.getElementById("user_name")
// console.dir(username.getAttribute("id"))

// setAttribute
const username = document.getElementById("user_name")
username.setAttribute("name", "faiz_class")
username.setAttribute("id","update")
// username.setAttribute("class", "font-15")  // exising class replace

// to solve this issue we have classList
username.classList.add('font-15', 'class2');          // add new class with replacing the existing clasess
username.classList.remove('class2');                  // remove the class
username.classList.toggle('class1');                  // add class on toggle 
username.classList.contains('class1');               // check class exist or not if exits return true
username.classList.replace('oldClass', 'newClass');  // it will replace existing class
username.classList.length  // return total number of classes




const button = document.getElementById('toggleButton');
button.addEventListener('click', () => {
  button.classList.toggle('active');
});
// Each click will toggle the "active" class on or off


// inner html and inner text
const container = document.getElementById('container');
  // Get HTML content
  console.log(container.innerHTML); // Output: "Hello, <span>World</span>!"
  // Set HTML content
  container.innerHTML = '<b>Hi there!</b>';
  console.log(container.innerHTML); // Output: "<b>Hi there!</b>" 
//  if the element is display none , it will return 
//   // Get visible text content
//   console.log(container.innerText); // Output: "Hello, World!"

//   // Set visible text content
//   container.innerText = 'Hi there!';
//   console.log(container.innerText); // Output: "Hi there!"



/**
 * create dynamic element in dom
 */
  let heading = document.createElement("h1");
  const p = document.createElement("p") 
  p.innerText = "this is created dynamically";  // slower then createTextNode approach
  // or
//   const pText = document.createTextNode('this is created dynamically');
//   p.appendChild(pText); 
  p.style.color = "red"
  p.setAttribute("id", "pera")
  p.classList.add("class1", "class2")
  heading.appendChild(p)
  document.body.appendChild(heading)

  const div = document.createElement('div');
  div.setAttribute('id', 'myDiv');
  div.setAttribute('class', 'container');
  console.log(div.hasAttributes("id")); // Output: true
