const movieEl = document.querySelector(".movie__info");
const id = localStorage.getItem("id");

async function main() {
  const movie = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=20ec7831/${id}`);
  const movieData = await movie.json();

  movieEl.innerHTML = `<div class="movie__header">
    <h1 class="movie__info--title">${movieData.title}</h1>
    <h5 class="movie__info--japanese-title">
      ${movieData.original_title} (${movieData.original_title_romanised})
    </h5>
    <div class="movie__subheader">
      <h3 class="movie__release-date">${movieData.release_date}</h3>
      <h3 class="movie__runtime">${movieData.running_time} minutes</h3>
    </div>
  </div>
  <div class="movie__info--img-wrapper">
    <figure class="movie__banner--wrapper">
      <img
        src="${movieData.movie_banner}"
        alt=""
        class="movie__banner"
      />
    </figure>
    <figure class="movie__poster--wrapper">
      <img
        src="${movieData.image}"
        alt=""
        class="movie__poster"
      />
    </figure>
  </div>
  <p class="movie__para">
  ${movieData.description}
  </p>
  <ul class="movie__metadata--list">
    <li class="movie__metadata--item">
      <h3 class="movie__director">Director:</h3>&nbsp;${movieData.director}
    </li>
    <li class="movie__metadata--item">
      <h3 class="movie__producer">Producer:</h3>&nbsp;${movieData.producer}
    </li>
    <li class="movie__metadata--item">
      <h3 class="movie__rt-score">${movieData.rt_score}%</h3>&nbsp;on Rotten Tomatoes
    </li>
  </ul>`;
}

main();