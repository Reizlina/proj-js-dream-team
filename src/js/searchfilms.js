import { UnsplashApi } from './themoviedb';
import { changeData } from './index';
import { createPagination } from './pagination';
import debounce from 'lodash.debounce';

// refs
const refs = {
  form: document.querySelector('.search-films'),
  list: document.querySelector('.gallery__list'),
  errSr: document.querySelector('.err-sr'),
  input: document.querySelector('.search-films__query'),
};
const containerPagination = document.querySelector('#pagination');

// variables
const unsplashApi = new UnsplashApi();

// make markup
const onSubmitSearchFilms = async e => {
  e.preventDefault();
  const value = refs.input.value.trim().toLowerCase();
  unsplashApi.searchQuery = value;

  unsplashApi.searchFilm().then(result => {
    // console.log(result.data)
    changeData(result.data).then(() => {
      refs.list.innerHTML = makeMarkup(result.data.results);

      const pagination = createPagination({
        totalItems: result.data.total_results,
        page: result.data.page,
        totalPages: result.data.total_pages,
      });

      pagination.on('afterMove', event => {
        const currentPage = event.page;
        unsplashApi.page = currentPage;

        unsplashApi
          .searchFilm()
          .then(result => {
            changeData(result.data).then(() => {
              refs.list.innerHTML = makeMarkup(result.data.results);
            });
          })
          .catch(error => {
            console.log(error);
          });
      });
    });
  });
  refs.errSr.style.opacity = 0;
};

refs.form.addEventListener('submit', onSubmitSearchFilms);

export function makeMarkup(data) {
  let markup = data
    .map(
      data => `<li class="gallery__item" data-id="${data.id}">
      <img class="gallery__img" src="${data.poster_path}" alt="movie image" height="455px">
      <h3 class="gallery__title">${data.original_title}</h3>
      <p class="gallery__text">
         ${data.genre_ids}
        <span class="gallery__year">${data.release_date}</span>
      </p>
    </li>`
    )
    .join('');
  return markup;
}
