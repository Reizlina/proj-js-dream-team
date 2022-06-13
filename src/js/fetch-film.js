import axios from 'axios';
import { UnsplashApi } from './themoviedb';
import { createPagination } from './pagination';

const paginationBtn = document.querySelector('.tui-page-btn');

const gall = document.querySelector('.gallery__list');

const unsplashApi = new UnsplashApi();

const filmsPromise = unsplashApi.fetchPopularFilms();

const filmGenres = unsplashApi.findGenre();

filmsPromise.then(result => {
  const films = result.data;
  renderFilms(films);
  // console.log(films[0].genre_ids);
});

function renderFilms(films) {
  // filmGenres.then(result => {
  //   const genre = result.data.genres;
  //   const genName = genre.map(genre => genre);
  //   // const genId = genre.map(genre => genre.id);
  //   console.log(genName);
  //   // console.log(genId);
  //   localStorage.setItem('genId', genName);
  // });

  console.log(films);
  createPagination(films);

  // onPageBtnClick

  const markup = films.results
    .map(film => {
      return `
      <li class="gallery__item">
        <img class="gallery__img" src=https://image.tmdb.org/t/p/w500${
          film.poster_path
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

// const onPageBtnClick = async event => {
//   try {
//    if(paginationBtn.textContent === )
//   } catch (err) {
//     console.log(err);
//   }
// };

// paginationBtn.addEventListener('click', onPageBtnClick);

// console.log(paginationBtn);
