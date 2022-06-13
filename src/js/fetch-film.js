import axios from 'axios';
import { UnsplashApi } from './themoviedb';
import { createPagination } from './pagination';

const containerPagination = document.querySelector('#pagination');

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
  filmGenres.then(result => {
    const genre = result.data.genres;
    // const genName = genre.map(genre => {genre});

    // console.log(genre);
    localStorage.setItem('genres', JSON.stringify(genre));
  });

  // console.log(films);
  const pagination = createPagination(films);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    unsplashApi.page = currentPage;
    // запрос за пейджем и в запросе мой каррент будет равен карент пейджу
    // console.log(currentPage);
    // console.log(unsplashApi.page);

    unsplashApi
      .fetchPopularFilms()
      .then(value => {
        // value.page
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
    // вернет промис его нужно обработать
  });

  const markup = films.results
    .map(film => {
      return `
      <li class="gallery__item" data-id="${film.id}">
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
//   console.log(event.target);
//   // try {
//   //  if(paginationBtn.textContent === )
//   // } catch (err) {
//   //   console.log(err);
//   // }
// };

// containerPagination.addEventListener('click', onPageBtnClick);

// console.log(paginationBtn);
