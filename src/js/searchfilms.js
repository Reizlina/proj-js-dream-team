import { UnsplashApi } from './themoviedb';
import { changeData } from './index';

// refs
const refs = {
  form: document.querySelector('.search-films'),
  list: document.querySelector('.gallery__list'),
  errSr: document.querySelector('.err-sr'),
};

// variables
const unsplashApi = new UnsplashApi();

// make markup
const onSubmitSearchFilms = async e => {
  e.preventDefault();
  let searchQueryValue = e.currentTarget.elements.searchQuery.value;
  unsplashApi.searchQuery = searchQueryValue;
  console.log(searchQueryValue);
  try {
    const { data } = await unsplashApi.searchFilm();

    console.log(data.results);

    if (data.total_pages === 0 || searchQueryValue.length === 0) {
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

refs.form.addEventListener('input', onSubmitSearchFilms);
refs.form.addEventListener('submit', onSubmitSearchFilms);


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
