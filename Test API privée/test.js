function fetchmovie() {
    return fetch('https://api.themoviedb.org/3/movie/406?api_key=&language=fr-FR')
        .then((response) => response.json());
}

async function displaymovie() {
    const data = await fetchmovie();
    document.getElementById("movie").innerHTML = `
    <h1>${data.title}</h1>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}" />
    `;
}

displaymovie();
    
