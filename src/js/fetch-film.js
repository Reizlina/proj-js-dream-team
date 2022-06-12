import axios from 'axios';
import { UnsplashApi } from './themoviedb';

const gall = document.querySelector('.gallery__list');

const unsplashApi = new UnsplashApi();

const filmsPromise = unsplashApi.fetchPopularFilms();

filmsPromise.then(result => {
  const films = result.data.results;
  renderFilms(films);

  console.log(films[0].genre_ids);
});

function renderFilms(films) {
  const markup = films
    .map(film => {
      return `
      <li class="gallery__item">
        <img class="gallery__img" src=https://image.tmdb.org/t/p/w500${
          film.backdrop_path
        } alt=${film.original_title}>
        <h3 class="gallery__title">${film.title}</h3>
        <p class="gallery__text">${film.genre_ids}
          <span class="gallery__year">${film.release_date.slice(0, 4)}</span>
        </p>
      </li>`;
    })
    .join('');
  return (gall.innerHTML = markup);
}


