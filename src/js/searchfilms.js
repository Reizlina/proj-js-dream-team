import { UnsplashApi } from './themoviedb';
import { changeData } from './index';
import debounce from 'lodash.debounce';

// refs
const refs = {
  form: document.querySelector('.search-films'),
  list: document.querySelector('.gallery__list'),
  errSr: document.querySelector('.err-sr'),
  input: document.querySelector('.search-films__query'),
};

// variables
const unsplashApi = new UnsplashApi();

// make markup
const onSubmitSearchFilms = async e => {
  e.preventDefault();
  unsplashApi.fetchPopularFilms().then(result => {
    changeData(result.data);
    refs.list.innerHTML = makeMarkup(result.data.results);
  });
  refs.errSr.style.opacity = 0;

  const value = refs.input.value.trim().toLowerCase();
  console.log(value);

  unsplashApi.searchQuery = value;

  // let searchQueryValue = e.currentTarget.elements.searchQuery.value;
  // unsplashApi.searchQuery = searchQueryValue;
  // console.log(searchQueryValue);

  try {
    const { data } = await unsplashApi.searchFilm();

    console.log(data.results);

    if (data.total_pages === 0) {
      refs.errSr.style.opacity = 1;
    } else {
      changeData(data);
      refs.list.innerHTML = makeMarkup(data.results);
      refs.errSr.style.opacity = 0;
    }
  } catch (err) {
    console.log(err);
  }
};

refs.form.addEventListener('input', debounce(onSubmitSearchFilms, 300));
// refs.form.addEventListener('submit', onSubmitSearchFilms);

// markup function

function makeMarkup(data) {
  let markup = data
    .map(
      data => `<li class="gallery__item">
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
