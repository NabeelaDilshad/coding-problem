fetch('https://api.example.com/data', {
    method: 'GET',                  // HTTP method
    headers: {                      // Request headers
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),     // Request body (for POST/PUT)
    mode: 'cors',                   // CORS mode: 'cors', 'no-cors', 'same-origin'
    cache: 'default',               // Cache mode
    credentials: 'include',         // Include cookies: 'omit', 'same-origin', 'include'
    redirect: 'follow',             // How redirects are handled
    referrer: 'client',             // Referrer info
    signal: abortController.signal  // For cancelling request
  });
  

  axios({
    url: 'https://api.example.com/data',
    method: 'post',                 // HTTP method
    baseURL: 'https://api.example.com', // Optional base URL
    headers: {                      // Custom headers
      'Authorization': 'Bearer token'
    },
    data: { name: 'John' },         // Request body (POST/PUT)
    params: { id: 1 },              // URL query parameters
    timeout: 5000,                  // Timeout in ms
    withCredentials: true,         // Send cookies
    responseType: 'json',          // Response format: 'json', 'blob', 'text', etc.
    signal: abortController.signal // For cancelling requests (modern way)
  });
  