import Pagination from 'tui-pagination';

// const pagination = new Pagination(container);

var pagination = new Pagination(document.querySelector('#pagination'), {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 5,
  centerAlign: true,
});
