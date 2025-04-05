// form.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the form
    const form = document.querySelector('form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();


         /**
          * by get by Id
          * const fullName = document.getElementById("full-name")
          * console.log(fullName.value)
          * 
          * return as Object
         */
         
        /**
         * by get by class name
         * const fullName = document.getElementsByClassName("fullnameclass")
           console.log(Array.from(fullName)[0].value) 
           
           return as HTMLCollection
         */
        

        /**
         * by get by name
          * const fullName = document.getElementsByName("fullName")
            console.log(fullName[0].value)
            return as Nodelist
         */

            
        /**
         * const fullName = document.querySelector(".fullnameclass")
           console.log(fullName)

           return first match 
         */


        /**
         * const fullName = document.querySelectorAll(".fullnameclass")
           console.log(fullName)

           return All match as a NodeList
         */
        

        
        const fullName = document.getElementById("full-name").value
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const age = document.getElementById('age').value;
        const country = document.getElementById('country').value;

        // Collect selected languages (checkboxes)
        const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(checkbox => checkbox.value);

        const phone = document.getElementById('phone').value;
        const comments = document.getElementById('comments').value;
        const resume = document.getElementById('resume').files[0]; // For file input

        // Collect the terms and conditions checkbox
        const termsAccepted = document.getElementById('terms').checked;

        // Create an object to store all the form data
        const formData = {
            fullName,
            email,
            password,
            gender,
            age,
            country,
            languages,
            phone,
            comments,
            resume,
            termsAccepted,
        };

        // Display the form data in the console (you can send this data to a server if needed)
        console.log(formData);

        // Optionally, you can do further actions like sending the data to a server using AJAX

        // for ref
        // https://github.com/hiteshchoudhary/js-hindi-youtube/blob/main/06_dom/three.html
    });
});
