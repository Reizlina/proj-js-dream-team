!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a);var o=a("54vAX"),l=a("jcFG7"),r=a("5TAx9"),i=a("diaKp"),c=(document.querySelector("#pagination"),document.querySelector(".gallery__list")),s=new(0,o.UnsplashApi);function d(e){return e.map((function(e){return'\n\n    <li class="gallery__item" data-id="'.concat(e.id,'">\n      <img class="gallery__img" src="').concat(e.poster_path,'" alt=').concat(e.original_title,'>\n      <h3 class="gallery__title">').concat(e.title,'</h3>\n      <p class="gallery__text">').concat(e.genre_ids,'\n        <span class="gallery__year">').concat(e.release_date,"</span>\n      </p>\n    </li>")})).join("")}document.body.insertAdjacentHTML("beforebegin",(0,i.renderSpinner)()),s.fetchPopularFilms().then((function(e){(0,r.changeData)(e.data).then((function(){c.innerHTML=d(e.data.results),(0,l.createPagination)({totalItems:e.data.total_results,page:e.data.page,totalPages:e.data.total_pages}).on("afterMove",(function(e){var n=e.page;s.page=n,s.fetchPopularFilms().then((function(e){(0,r.changeData)(e.data).then((function(){c.innerHTML=d(e.data.results)}))})).catch((function(e){console.log(e)}))}))})).finally((function(){document.querySelector(".backdrop-loader").remove()}))}))}();
//# sourceMappingURL=index.5532dd3f.js.map