import { UnsplashApi } from './themoviedb';
import { createPagination } from './pagination';
import { changeData } from './index';
import { renderFilms } from './modal';
// import { makeMarkup } from './searchfilms';
// import { markup } from './fetch-film';

const unsplashApi = new UnsplashApi();
const savedWatched = JSON.parse(localStorage.getItem('watched'));
console.log(savedWatched);
// const arrFilms = [];
const gallery = document.querySelector('.gallery__list');

// refs
const refs = {
  btnWatched: document.querySelector('.buttons__watched'),
  btnQueue: document.querySelector('.buttons__queue'),
};

// const dataWatched = savedWatched.map(el => {
//   const a = unsplashApi.infoAboutFilm(el).then(({ data }) => {
//     arrFilms.push(data);
//   });
//   return a;
// });
// console.log(arrFilms);
// console.log(dataWatched);

// onBtnWatchedClickIsActive

const onBtnWatchedClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnQueue.classList.remove('is-active');

  // gallery.innerHTML = makeMarkup(savedWatched);

  // unsplashApi.fetchPopularFilms().then(result => {
  //   console.log(result.data.results);
  //   gallery.innerHTML = makeMarkup(result.data.results);
  // });

  // unsplashApi.fetchPopularFilms().then(result => {
  //   changeData(result.data).then(() => {
  //     gallery.innerHTML = makeMarkup(result.data.results);

  //     const pagination = createPagination({
  //       totalItems: result.data.total_results,
  //       page: result.data.page,
  //       totalPages: result.data.total_pages,
  //     });

  //     pagination.on('afterMove', event => {
  //       const currentPage = event.page;
  //       unsplashApi.page = currentPage;

  //       unsplashApi
  //         .searchFilm()
  //         .then(result => {
  //           changeData(result.data).then(() => {
  //             refs.list.innerHTML = makeMarkup(result.data.results);
  //           });
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     });
  //   });
  // });

  unsplashApi.fetchPopularFilms().then(result => {
    changeData(result.data).then(() => {
      console.log(result.data.results);
      gallery.innerHTML = makeMarkup(result.data.results);
    })})

  //  unsplashApi.infoAboutFilm().then(result => {
  //   changeData(result.data).then(() => {
  //     // console.log(result.data.results);
  //     gallery.innerHTML = makeMarkup(result.data.results);
  //   })})
};

function makeMarkup(data) {
  console.log(data);
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

refs.btnWatched.addEventListener('click', onBtnWatchedClickIsActive);

// onBtnQueueClickIsActive

const onBtnQueueClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');
};

refs.btnQueue.addEventListener('click', onBtnQueueClickIsActive);
