console.log("Before Fetch");

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
fetchPromise
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((error) => {
    console.log(error);
  });
