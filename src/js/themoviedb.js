import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'c4c535d4c92d9e8cd45d9f8a1dc15d0d';
  #IMG_URL = 'https://image.tmdb.org/t/p/w500';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  // Популярные фильмы

  fetchPopularFilms() {
    return axios.get(
      `${this.#BASE_URL}trending/movie/day?api_key=${this.#API_KEY}`,
      {
        params: {
          page: this.page,
        },
      }
    );
  }

  // Поиск фильмов

  searchFilm(query) {
    return axios.get(
      `${this.#BASE_URL}search/movie?api_key=${this.#API_KEY}&`,
      {
        params: {
          query,
          page: this.page,
        },
      }
    );
  }

  // инфо о фильме для модалки

  infoAboutFilm(movie_id) {
    return axios.get(
      `${this.#BASE_URL}movie/{movie_id}?api_key=${this.#API_KEY}&`
      // {
      // params: {
      //   page: this.page,
      // },
      // }
    );
  }

  //   incrementPage() {
  //     this.page += 1;
  //   }

  //   newPage() {
  //     this.page = 1;
  //   }
}
