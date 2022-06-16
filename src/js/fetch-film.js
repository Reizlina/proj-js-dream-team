import { UnsplashApi } from './themoviedb';
import { createPagination } from './pagination';
import { changeData } from './index';
import { renderSpinner } from './spiner';

const containerPagination = document.querySelector('#pagination');

const gall = document.querySelector('.gallery__list');

const unsplashApi = new UnsplashApi();
document.body.insertAdjacentHTML('beforebegin', renderSpinner());
unsplashApi.fetchPopularFilms().then(result => {
  // document.body.insertAdjacentHTML('beforebegin', renderSpinner());
  changeData(result.data)
    .then(() => {
      gall.innerHTML = markup(result.data.results);

      const pagination = createPagination({
        totalItems: result.data.total_results,
        page: result.data.page,
        totalPages: result.data.total_pages,
      });

      pagination.on('afterMove', event => {
        const currentPage = event.page;
        unsplashApi.page = currentPage;

        unsplashApi
          .fetchPopularFilms()
          .then(result => {
            changeData(result.data).then(() => {
              gall.innerHTML = markup(result.data.results);
            });
          })
          .catch(error => {
            console.log(error);
          });
      });
    })
    .finally(() => {
      document.querySelector('.backdrop-loader').remove();
    });
});

export function markup(elements) {
  return elements
    .map(el => {
      return `

    <li class="gallery__item" data-id="${el.id}">
      <img class="gallery__img" src="${el.poster_path}" alt=${el.original_title}>
      <h3 class="gallery__title">${el.title}</h3>
      <p class="gallery__text">${el.genre_ids}
        <span class="gallery__year">${el.release_date}</span>
      </p>
    </li>`;
    })
    .join('');
}
