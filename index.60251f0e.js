var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){t[e]=a},e.parcelRequired7c6=n);var l=n("662h5"),r=n("2nhTy"),o=n("btpe3");document.querySelector("#pagination");const i=document.querySelector(".gallery__list"),s=new(0,l.UnsplashApi);function d(e){return e.map((e=>`\n\n    <li class="gallery__item" data-id="${e.id}">\n      <img class="gallery__img" src="${e.poster_path}" alt=${e.original_title}>\n      <h3 class="gallery__title">${e.title}</h3>\n      <p class="gallery__text">${e.genre_ids}\n        <span class="gallery__year">${e.release_date}</span>\n      </p>\n    </li>`)).join("")}s.fetchPopularFilms().then((e=>{(0,o.changeData)(e.data).then((()=>{i.innerHTML=d(e.data.results);(0,r.createPagination)({totalItems:e.data.total_results,page:e.data.page,totalPages:e.data.total_pages}).on("afterMove",(e=>{const a=e.page;s.page=a,s.fetchPopularFilms().then((e=>{(0,o.changeData)(e.data).then((()=>{i.innerHTML=d(e.data.results)}))})).catch((e=>{console.log(e)}))}))}))}));
//# sourceMappingURL=index.60251f0e.js.map
