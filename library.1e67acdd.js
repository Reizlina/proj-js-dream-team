!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);new(0,a("54vAX").UnsplashApi);var n=document.querySelector(".gallery__list"),l=null,s=null;try{s=null===(s=localStorage.getItem("queue"))?[]:JSON.parse(s)}catch(e){console.error("Get state error: ",e.message)}try{l=null===(l=localStorage.getItem("watched"))?[]:JSON.parse(l)}catch(e){console.error("Get state error: ",e.message)}s.length&&(c(s),n.innerHTML=i(s));var o={btnWatched:document.querySelector(".buttons__watched"),btnQueue:document.querySelector(".buttons__queue")};o.btnWatched.addEventListener("click",(function(e){e.target.classList.add("is-active"),o.btnQueue.classList.remove("is-active");try{l=null===(l=localStorage.getItem("watched"))?[]:JSON.parse(l)}catch(e){console.error("Get state error: ",e.message)}c(l),n.innerHTML=i(l)}));function c(e){var t=localStorage.getItem("genre_ids"),r=JSON.parse(t);return e.forEach((function(e){e.genres.forEach((function(e,t,a){for(var n=0;n<r.length;n+=1)if(e.id===r[n].id){a[t]=r[n].name;break}})),null===e.poster_path?e.poster_path="https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D1%80%D0%BE-%D0%BD%D0%B0-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D1%8F%D0%B2%D0%B8%D1%82%D1%81%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-retro-%D1%81%D0%B2%D0%B5%D1%82%D1%8F%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BD%D0%B5%D0%BE%D0%BD-159994270.jpg":e.poster_path="https://image.tmdb.org/t/p/w500/"+e.poster_path,e.release_date?e.release_date=e.release_date.slice(0,4):e.release_date="release year unknown",e.genres.length||(e.genres="genre unknown")}))}function i(e){return e.map((function(e){return'<li class="gallery__item" data-id="'.concat(e.id,'">\n      <img class="gallery__img" src="').concat(e.poster_path,'" alt="movie image" height="455px">\n      <h3 class="gallery__title">').concat(e.original_title,'</h3>\n      <p class="gallery__text">\n         ').concat(e.genres,'\n        <span class="gallery__year">').concat(e.release_date,"</span>\n      </p>\n    </li>")})).join("")}o.btnQueue.addEventListener("click",(function(e){e.target.classList.add("is-active"),o.btnWatched.classList.remove("is-active");try{s=null===(s=localStorage.getItem("queue"))?[]:JSON.parse(s)}catch(e){console.error("Get state error: ",e.message)}c(s),n.innerHTML=i(s)}))}();
//# sourceMappingURL=library.1e67acdd.js.map
