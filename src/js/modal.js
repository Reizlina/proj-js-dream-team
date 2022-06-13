import { UnsplashApi } from './themoviedb';
const unsplashApi = new UnsplashApi();
const modalContainer = document.querySelector('#js-module');
const backdrop = document.querySelector('[data-modal]');
const gallaryList = document.querySelector('.gallery__list');

function renderFilms(film) {
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
function openModal(event) {
  const liId = event.target.closest('[data-id]').getAttribute('data-id');

  unsplashApi.infoAboutFilm(liId).then(({ data }) => {
    modalContainer.innerHTML = renderFilms(data);
  });
  backdrop.classList.toggle('is-hidden');

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
