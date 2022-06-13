import { UnsplashApi } from './themoviedb';
import axios from 'axios';

// refs
const refs = {
  form: document.querySelector('.search-films'),
  list: document.querySelector('.gallery__list'),
  errSr: document.querySelector('.err-sr'),
};

// variables
const unsplashApi = new UnsplashApi();


unsplashApi.findIds();
const a = localStorage.setItem

// local storage SET 'ganre_ids'
// unsplashApi.findGenre();
// const a = localStorage.getItem('ganre_ids');
// console.log(a);
// const b = JSON.parse(a);
// console.log(b);


// make markup
const onSubmitSearchFilms = async e => {
  e.preventDefault();
  unsplashApi.searchQuery = e.currentTarget.elements.searchQuery.value;

  try {
    const { data } = await unsplashApi.searchFilm();

    console.log(data);


    if (data.total_pages === 0) {
      refs.errSr.style.opacity = 1;
    } else {
      makeMarkup(data.results);
      refs.errSr.style.opacity = 0;
    }
  } catch (err) {
    console.log(err);
  }
};

refs.form.addEventListener('submit', onSubmitSearchFilms);

// markup function

function makeMarkup(data) {
  let markup = data
    .map(
      data => `<li class="gallery__item">
      <img class="gallery__img" src="https://image.tmdb.org/t/p/w500${
        data.poster_path
      }" alt="movie image">
      <h3 class="gallery__title">${data.original_title}</h3>
      <p class="gallery__text">
         ${data.genre_ids}
        <span class="gallery__year">${data.release_date.slice(0, 4)}</span>
      </p>
    </li>`
    )
    .join('');
  return (refs.list.innerHTML = markup);
}
