import Pagination from 'tui-pagination';
import { UnsplashApi } from '../js/themoviedb';

const unsplashApi = new UnsplashApi();
const containerPagination = document.getElementById('pagination');
// console.log(unsplashApi.fetchPopularFilms());

// const createPagination = ({ el }) => {
//   const options = {
//     totalItems: el.total_results,
//     itemsPerPage: el.total_results / el.total_pages,
//     visiblePages: 5,
//     page: 1,
//     centerAlign: true,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage:
//         '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>',
//     },
//   };
//   const pagination = new Pagination('containerPagination', options);
//   // paganation.on('afterMove', event => {
//   //   const currentPage = event.page;
//   //   console.log(currentPage);
//   // });
// };

// !
const container = document.getElementById('pagination');
const options = {
  // below default value of options
  totalItems: 2000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const pagination = new Pagination(container, options);
