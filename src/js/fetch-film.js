import axios from 'axios';
import { UnsplashApi } from './themoviedb';

const gall = document.querySelector('.gallery__list');

const unsplashApi = new UnsplashApi();

const filmsPromise = unsplashApi.fetchPopularFilms();

console.log(filmsPromise);

const filmGenres = unsplashApi.findGenre();

filmsPromise.then(result => {
  const films = result.data.results;
  renderFilms(films);
});

function renderFilms(films) {
  
  filmGenres.then(result => {
    const genre = result.data.genres;
    const genName = genre.map(genre => genre.name);
    const genId = genre.map(genre => genre.id);
    console.log(genName);
    console.log(genId);
    localStorage.setItem(genId, genName);
  });

  const markup = films
    .map(film => {
      return `
      <li class="gallery__item">
        <img class="gallery__img" src=https://image.tmdb.org/t/p/w500${
          film.poster_path
        } alt=${film.original_title}>
        <h3 class="gallery__title">${film.title}</h3>
        <p class="gallery__text">${localStorage.getItem(film)}
          <span class="gallery__year">${film.release_date.slice(0, 4)}</span>
        </p>
      </li>`;
    })
    .join('');
  return (gall.innerHTML = markup);
}
