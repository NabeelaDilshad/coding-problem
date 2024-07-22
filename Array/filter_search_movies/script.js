// script.js
const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "Goodfellas",
    "Star Wars: Episode IV - A New Hope",
    "Seven",
    "The Silence of the Lambs",
    "The Usual Suspects",
    "Saving Private Ryan"
];

const movieList = document.getElementById('movieList');
const searchInput = document.getElementById('searchInput');

// Function to display the list of movies
function displayMovies(filteredMovies) {
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        li.classList.add('movie');
        movieList.appendChild(li);
    });
}

// Display all movies initially
displayMovies(movies);

// Add event listener to the search input
searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.toLowerCase().includes(filter));
    displayMovies(filteredMovies);
});