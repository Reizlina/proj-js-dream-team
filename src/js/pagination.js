import Pagination from 'tui-pagination';
import { UnsplashApi } from '../js/themoviedb';

const unsplashApi = new UnsplashApi();
const containerPagination = document.querySelector('#pagination');
// console.log(unsplashApi.fetchPopularFilms());

export const createPagination = ({ totalItems, totalPages, page } = {}) => {
  console.log(totalItems);
  console.log(totalPages);

  const options = {
    totalItems,
    itemsPerPage: totalItems / totalPages,
    visiblePages: 5,
    page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    // template: {
    //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    //   currentPage:
    //     '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    //   moveButton:
    //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
    //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //     '</a>',
    //   disabledMoveButton:
    //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
    //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //     '</span>',
    //   moreButton:
    //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
    //     '<span class="tui-ico-ellip">...</span>' +
    //     '</a>',
    // },
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      disabledMoveButton(event) {
        if (event.type === 'first' || event.type === 'last') {
          return '<span></span>';
        }

        return `<span class="tui-page-btn tui-is-disabled tui-${event.type}"><span class="tui-ico-${event.type}">${event.type}</span></span>`;
      },
      moveButton(event) {
        if (event.type === 'first' || event.type === 'last') {
          return '<span></span>';
        }

        return `<a href="#" class="tui-page-btn tui-${event.type}"><span class="tui-ico-${event.type}">${event.type}</span></a>`;
      },
    },
  };
  const pagination = new Pagination(containerPagination, options);

  console.log(pagination);
  // paganation.on('afterMove', event => {
  //   const currentPage = event.page;
  //   console.log(currentPage);
  // });
  return pagination;
};
