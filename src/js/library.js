import { UnsplashApi } from './themoviedb';
// import { createPagination } from './pagination';
import { changeData } from './index';
import { makeMarkup } from './searchfilms';

const unsplashApi = new UnsplashApi();
const savedWatched = JSON.parse(localStorage.getItem('watched'));
const arrFilms = [];
const gallery = document.querySelector('.gallery__list');

const dataWatched = savedWatched.forEach(el => {
  unsplashApi.infoAboutFilm(el).then(({ data }) => {
    arrFilms.push(data);
  });
});
console.log(arrFilms);

// refs
const refs = {
  btnWatched: document.querySelector('.buttons__watched'),
  btnQueue: document.querySelector('.buttons__queue'),
};

// onBtnWatchedClickIsActive

const onBtnWatchedClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnQueue.classList.remove('is-active');

  gallery.innerHTML = makeMarkup(dataWatched);
};

refs.btnWatched.addEventListener('click', onBtnWatchedClickIsActive);

// onBtnQueueClickIsActive

const onBtnQueueClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');
};

refs.btnQueue.addEventListener('click', onBtnQueueClickIsActive);
