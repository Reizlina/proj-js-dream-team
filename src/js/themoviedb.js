import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'c4c535d4c92d9e8cd45d9f8a1dc15d0d';

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
          //   per_page: 40,
          page: this.page,
        },
      }
    );
  }

  // Поиск фильмов

  searchFilm() {
    return axios.get(
      `${this.#BASE_URL}search/movie?api_key=${this.#API_KEY}&`,
      {
        params: {
          language: 'en-US',
          query: '',
          page: this.page,
          include_adult: false,
        },
      }
    );
  }

  // инфо о фильме для модалки

  infoAboutFilm() {
    return axios.get(
      `${this.#BASE_URL}movie/{movie_id}?api_key=${this.#API_KEY}&`,
      {
        params: {
          language: 'en-US',
          //   page: this.page,
        },
      }
    );
  }

  //   incrementPage() {
  //     this.page += 1;
  //   }

  //   newPage() {
  //     this.page = 1;
  //   }
}
