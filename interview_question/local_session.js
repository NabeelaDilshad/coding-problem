    // 1. LocalStorage Example

    // Storing data
    localStorage.setItem("username", "Nabeela");

    // Retrieving data
    const user = localStorage.getItem("username");
    console.log(user); // Output: Nabeela

    // Removing data
    localStorage.removeItem("username");

    // Clearing all data
    localStorage.clear();




 


    // 2. SessionStorage Example
    // Storing data
    sessionStorage.setItem("sessionID", "123456");

    // Retrieving data
    const session = sessionStorage.getItem("sessionID");
    console.log(session); // Output: 123456

    // Removing data
    sessionStorage.removeItem("sessionID");

    // Clearing all data
    sessionStorage.clear();



    //  Real-Life Example: Remembering a User's Theme Preference
    //  Scenario: A website allows users to choose between light mode and dark mode. The user's choice should persist even after they close and reopen the browser.

    // Set a cookie to store the user's theme preference
        function setTheme(theme) {
            document.cookie = `theme=${theme}; expires=Fri, 31 Dec 2024 12:00:00 UTC; path=/`;
        }
        
        // Get the stored theme from cookies
        function getTheme() {
            const cookies = document.cookie.split("; ");
            for (let i = 0; i < cookies.length; i++) {
            const [key, value] = cookies[i].split("=");
            if (key === "theme") return value;
            }
            return null;
        }
        
        // Apply the user's theme preference
        const userTheme = getTheme();
        if (userTheme) {
            document.body.className = userTheme; // Apply the saved theme
        }
        
        // Example usage
        setTheme("dark"); // Set to dark mode
        console.log(getTheme()); // Output: "dark"
        