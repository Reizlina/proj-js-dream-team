import { UnsplashApi } from './themoviedb';

import { renderSpinner } from './spiner';

const unsplashApi = new UnsplashApi();
const modalContainer = document.querySelector('#js-module');
const backdrop = document.querySelector('[data-modal]');
const gallaryList = document.querySelector('.gallery__list');

export function renderFilms(film) {
  return `<div class="modal__backcall">
        <div class="modal__img-box">
          <img
            class="modal__img"
            src=https://image.tmdb.org/t/p/w500${film.poster_path} alt=${film.original_title}
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
        if (!queue.find(el => el.id === data.id)) {
          queue.push(data);
        }

        localStorage.setItem(QUEUE, JSON.stringify(queue));
      }

      // btns listeners
      btnWatched.addEventListener('click', onClickWatched);
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
