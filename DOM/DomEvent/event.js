function sayHello() {
    alert("Hello from inline!");
  }
  
  const btn = document.querySelector("button");

 //   Overwrites previous onclick handler.
 //  Only one handler can be assigned this way.
 btn.onclick = function () {
    alert("Hello from onclick!");
}; 


  // recommened to use this ways
    btn.addEventListener("click", function () {
    alert("Hello from addEventListener!");
  });


 