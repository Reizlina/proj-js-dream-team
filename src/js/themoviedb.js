import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'c4c535d4c92d9e8cd45d9f8a1dc15d0d';
  #IMG_URL = 'https://image.tmdb.org/t/p/w500';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  // НЕ УДАЛЯТЬ !!!

  findIds() {
    return fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=c4c535d4c92d9e8cd45d9f8a1dc15d0d&language=en-US'
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('genre_ids', JSON.stringify(data.genres));
      })
      .catch(err => {
        console.log(err);
      });
  }

  // ids

  findGenre() {
    return axios.get(
      `${this.#BASE_URL}genre/movie/list?api_key=${this.#API_KEY}`,
      {
        params: {
          name: this.name,
        },
      }
    );
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
          query: this.searchQuery,
          page: this.page,
        },
      }
    );
  }

  // инфо о фильме для модалки

  infoAboutFilm(movie_id) {
    return axios.get(
      `${this.#BASE_URL}movie/${movie_id}?api_key=${this.#API_KEY}&`
    );
  }
}

// library markup

  // libraryMarkup(arr_obj) {

  // }
