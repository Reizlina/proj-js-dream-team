import { UnsplashApi } from './themoviedb';
import { createPagination } from './pagination';
import { changeData } from './index';

const containerPagination = document.querySelector('#pagination');

const gall = document.querySelector('.gallery__list');

const unsplashApi = new UnsplashApi();

const filmsPromise = unsplashApi.fetchPopularFilms();

filmsPromise.then(result => {
  changeData(result.data);
  gall.innerHTML = markup(result.data.results);

  const pagination = createPagination({
    totalItems: result.data.total_results,
    page: result.data.page,
    totalPages: result.data.total_pages,
  });


  pagination.on('afterMove', event => {
    const currentPage = event.page;
    unsplashApi.page = currentPage;
    // запрос за пейджем и в запросе мой каррент будет равен карент пейджу
    // console.log(currentPage);
    // console.log(unsplashApi.page);

    unsplashApi
      .fetchPopularFilms()
      .then(value => {
        // value.page
        console.log(value);
        markup(value.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    // вернет промис его нужно обработать
  });
});

// function renderFilms(films) {
//   filmGenres.then(result => {
//     const genre = result.data.genres;
//     // const genName = genre.map(genre => {genre});

//     // console.log(genre);
//     localStorage.setItem('genres', JSON.stringify(genre));
//   });
//   // console.log(films);
//   const pagination = createPagination(films);

//   pagination.on('afterMove', event => {
//     const currentPage = event.page;
//     unsplashApi.page = currentPage;
//     // запрос за пейджем и в запросе мой каррент будет равен карент пейджу
//     // console.log(currentPage);
//     // console.log(unsplashApi.page);

//     unsplashApi
//       .fetchPopularFilms()
//       .then(value => {
//         // value.page
//         console.log(value);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     // вернет промис его нужно обработать
//   });
// }

function markup(elements) {
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

// const onPageBtnClick = async event => {
//   console.log(event.target);
//   // try {
//   //  if(paginationBtn.textContent === )
//   // } catch (err) {
//   //   console.log(err);
//   // }
// };

// containerPagination.addEventListener('click', onPageBtnClick);

// console.log(paginationBtn);
