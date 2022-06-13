import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'c4c535d4c92d9e8cd45d9f8a1dc15d0d';
  #IMG_URL = 'https://image.tmdb.org/t/p/w500';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  // ids
  findGenre(arr) {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=c4c535d4c92d9e8cd45d9f8a1dc15d0d&language=en-US'
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data.genres);
        localStorage.setItem("ganre_ids", JSON.stringify(data.genres));

        // let names = [];
        // let str = '';

        // for (let el of data.genres) {
        //   if (arr.includes(el.id)) {
        //     console.log(el.name);
        //     names.push(el);
        //   }
        // }
        // console.log(names);
        // const namesArr = names.map(name => name.name);
        // console.log(namesArr);
        // return namesArr;
        // str = namesArr.join(' ');
        // console.log(str);
        // return str;
      })
      .catch(error => {
        console.log(error);
      });
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
