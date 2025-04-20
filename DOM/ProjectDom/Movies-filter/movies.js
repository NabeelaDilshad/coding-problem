const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Inception",
    "Fight Club",
    "Forrest Gump",
    "The Matrix",
    "The Lord of the Rings: The Return of the King",
    "Interstellar",
    "Gladiator",
    "The Silence of the Lambs",
    "Saving Private Ryan",
    "The Green Mile",
    "Parasite",
    "Avengers: Endgame",
    "Titanic",
    "Goodfellas",
    "Whiplash",
    "The Departed"
  ];


  const movieslist = document.getElementById("movieslist");

  function renderList(list){
    movieslist.innerHTML = ""
    list.forEach(movie => {
        const li = document.createElement("li")
        li.textContent = movie
        li.style.listStyleType = "none"
        movieslist.appendChild(li)
    })
  }

  document.addEventListener("DOMContentLoaded", function(){
       renderList(movies)
  })

  function searchMovies(event){
     const value = event.target.value
     const filterMovies = movies.filter((movie) => movie.includes(value))
     renderList(filterMovies)
  }