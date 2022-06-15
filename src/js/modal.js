import { UnsplashApi } from './themoviedb';

import { renderSpinner } from './spiner';

const unsplashApi = new UnsplashApi();
const modalContainer = document.querySelector('#js-module');
const backdrop = document.querySelector('[data-modal]');
const gallaryList = document.querySelector('.gallery__list');

export function renderFilms(film) {
  if (film.poster_path === null) {
    film.poster_path =
      'https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D1%80%D0%BE-%D0%BD%D0%B0-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D1%8F%D0%B2%D0%B8%D1%82%D1%81%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-retro-%D1%81%D0%B2%D0%B5%D1%82%D1%8F%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BD%D0%B5%D0%BE%D0%BD-159994270.jpg';
  } else {
    film.poster_path = 'https://image.tmdb.org/t/p/w500/' + film.poster_path;
  }

  if (!film.genre_ids) {
    film.genre_ids = 'genre unknown';
  }

  return `<div class="modal__backcall">
        <div class="modal__img-box">
          <img
            class="modal__img"
            src=${film.poster_path} alt=${film.original_title}
          />
        </div>
        <div class="modal__text-content">
          <h2 class="modal__title">${film.title}</h2>
          <div class="modal__dicr">
            <ul class="modal__list1">
              <li class="modal__list-item">Vote / Votes</li>
              <li class="modal__list-item">Popularity</li>
              <li class="modal__list-item">Original Title</li>
              <li class="modal__list-item">Genre</li>
            </ul>
            <ul class="modal__list2">
              <li class="modal__item">
                <span class="modal__vote1">${film.vote_average}</span> /
                <span class="modal__vote2">${film.vote_count}</span>
              </li>
              <li class="modal__item">${film.popularity}</li>
              <li class="modal__item">${film.title}</li>
              <li class="modal__item">${film.genre_ids}</li>
            </ul>
          </div>
          <article class="modal__article">
            <h3 class="modal__subtitle">About</h3>
            <p class="modal__text">
             ${film.overview}
            </p>
          </article>
          <div class="modal__btn-box">
            <button class="modal__button-org" type="button">
              add to Watched
            </button>
            <button class="modal__button-trans" type="button">
              add to queue
            </button>
          </div>
        </div>
  </div>`;
}
// localStorage.setItem('watched', '');
// localStorage.setItem('queue', '');

const WATCHED = 'watched';
const QUEUE = 'queue';

const watched = [];
const queue = [];

function openModal(event) {
  if (event.target.nodeName === 'UL') {
    return;
  }

  document.body.insertAdjacentHTML('beforebegin', renderSpinner());

  const liId = event.target.closest('[data-id]').getAttribute('data-id');

  unsplashApi
    .infoAboutFilm(liId)
    .then(({ data }) => {
      backdrop.classList.toggle('is-hidden');

      modalContainer.innerHTML = renderFilms(data);

      // !!!

      // btn refs
      const btnWatched = document.querySelector('.modal__button-org');
      const btnQueue = document.querySelector('.modal__button-trans');

      btnWatched.addEventListener('click', onHandleWatch);

      function onHandleWatch() {
        let watchedArr = [];
        if (!localStorage.getItem(WATCHED)) {
          watchedArr.push(data);
          localStorage.setItem(WATCHED, JSON.stringify(watchedArr));
          btnWatched.textContent = 'remove from watched';
          btnWatched.removeEventListener('click', onHandleWatch);
          // снять обработчик
        } else if (
          localStorage.getItem(WATCHED).includes(JSON.stringify(data))
        ) {
          console.log('Watched film list includes this film!');
        } else {
          watchedArr = JSON.parse(localStorage.getItem(WATCHED));
          watchedArr.push(data);
          localStorage.setItem(WATCHED, JSON.stringify(watchedArr));
          btnWatched.textContent = 'remove from watched';
          btnWatched.removeEventListener('click', onHandleWatch);
          // снять обработчик
        }
      }

      function onClickQueue() {
        let queueArr = [];
        if (!localStorage.getItem(QUEUE)) {
          queueArr.push(data);
          localStorage.setItem(QUEUE, JSON.stringify(queueArr));
          btnQueue.textContent = 'remove from watched';
          btnQueue.removeEventListener('click', onClickQueue);
          // снять обработчик
        } else if (
          localStorage.getItem(QUEUE).includes(JSON.stringify(data))
        ) {
          console.log('Queue film list includes this film!');
        } else {
          queueArr = JSON.parse(localStorage.getItem(QUEUE));
          queueArr.push(data);
          localStorage.setItem(QUEUE, JSON.stringify(queueArr));
          btnQueue.textContent = 'remove from watched';
          btnQueue.removeEventListener('click', onClickQueue);
          // снять обработчик
        }
      }

      // btns listeners
      btnQueue.addEventListener('click', onClickQueue);

      // !!!
    })
    .finally(() => {
      document.querySelector('.backdrop-loader').remove();
    });

  const closeModalBtn = document.querySelector('.close');

  closeModalBtn.addEventListener('click', toggleModal);

  window.addEventListener('keydown', closeModalEsc);

  backdrop.addEventListener('click', closeModalBackdrop);

  function closeModalBackdrop(event) {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }

  function closeModalEsc(event) {
    if (event.code === 'Escape') {
      toggleModal();
    }
  }

  function toggleModal() {
    backdrop.classList.toggle('is-hidden');
    closeModalBtn.removeEventListener('click', toggleModal);
    window.removeEventListener('keydown', closeModalEsc);
    backdrop.removeEventListener('click', closeModalBackdrop);
  }
}
gallaryList.addEventListener('click', openModal);

// !!!
