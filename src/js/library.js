import { UnsplashApi } from './themoviedb';
// variables
const unsplashApi = new UnsplashApi();
const gallery = document.querySelector('.gallery__list');
let savedWatched = null;
let savedQueue = null;

try {
  savedQueue = localStorage.getItem('queue');
  savedQueue = savedQueue === null ? [] : JSON.parse(savedQueue);
} catch (error) {
  console.error('Get state error: ', error.message);
}

try {
  savedWatched = localStorage.getItem('watched');
  savedWatched = savedWatched === null ? [] : JSON.parse(savedWatched);
} catch (error) {
  console.error('Get state error: ', error.message);
}

// queue first render
if (savedQueue.length) {
  changedData(savedQueue);
  gallery.innerHTML = makeMarkup(savedQueue);
}

// refs
const refs = {
  btnWatched: document.querySelector('.buttons__watched'),
  btnQueue: document.querySelector('.buttons__queue'),
};

// onBtnWatchedClickIsActive

const onBtnWatchedClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnQueue.classList.remove('is-active');

  try {
    savedWatched = localStorage.getItem('watched');
    savedWatched = savedWatched === null ? [] : JSON.parse(savedWatched);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  changedData(savedWatched);
  gallery.innerHTML = makeMarkup(savedWatched);
};

refs.btnWatched.addEventListener('click', onBtnWatchedClickIsActive);

// onBtnQueueClickIsActive

const onBtnQueueClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');

  try {
    savedQueue = localStorage.getItem('queue');
    savedQueue = savedQueue === null ? [] : JSON.parse(savedQueue);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  changedData(savedQueue);
  gallery.innerHTML = makeMarkup(savedQueue);
};

refs.btnQueue.addEventListener('click', onBtnQueueClickIsActive);

// markup functions

function changedData(params) {
  const getIds = localStorage.getItem('genre_ids');
  const parseIds = JSON.parse(getIds);
  return params.forEach(param => {
    param.genres.forEach((genre, ind, arr) => {
      for (let i = 0; i < parseIds.length; i += 1) {
        if (genre.id === parseIds[i].id) {
          arr[ind] = parseIds[i].name;
          break;
        }
      }
    });

    if (param.poster_path === null) {
      param.poster_path =
        'https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D1%80%D0%BE-%D0%BD%D0%B0-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D1%8F%D0%B2%D0%B8%D1%82%D1%81%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-retro-%D1%81%D0%B2%D0%B5%D1%82%D1%8F%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BD%D0%B5%D0%BE%D0%BD-159994270.jpg';
    } else {
      param.poster_path =
        'https://image.tmdb.org/t/p/w500/' + param.poster_path;
    }

    if (param.release_date) {
      param.release_date = param.release_date.slice(0, 4);
    } else {
      param.release_date = 'release year unknown';
    }

    if (!param.genres.length) {
      param.genres = 'genre unknown';
    }
  });
}

function makeMarkup(data) {
  // console.log(data);
  let markup = data
    .map(
      data => `<li class="gallery__item" data-id="${data.id}">
      <img class="gallery__img" src="${data.poster_path}" alt="movie image" height="455px">
      <h3 class="gallery__title">${data.original_title}</h3>
      <p class="gallery__text">
         ${data.genres}
        <span class="gallery__year">${data.release_date}</span>
      </p>
    </li>`
    )
    .join('');
  return markup;
}
