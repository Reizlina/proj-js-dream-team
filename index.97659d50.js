var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l);var o=l("662h5"),i=l("kyRuT");const a=new(0,o.UnsplashApi),r=document.querySelector("#js-module"),s=document.querySelector("[data-modal]"),c=document.querySelector(".gallery__list");c.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;document.body.insertAdjacentHTML("beforebegin",(0,i.renderSpinner)());const t=e.target.closest("[data-id]").getAttribute("data-id");a.infoAboutFilm(t).then((({data:e})=>{var t;s.classList.toggle("is-hidden"),r.innerHTML=(null===(t=e).poster_path?t.poster_path="https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D1%80%D0%BE-%D0%BD%D0%B0-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D1%8F%D0%B2%D0%B8%D1%82%D1%81%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-retro-%D1%81%D0%B2%D0%B5%D1%82%D1%8F%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BD%D0%B5%D0%BE%D0%BD-159994270.jpg":t.poster_path="https://image.tmdb.org/t/p/w500/"+t.poster_path,t.genre_ids||(t.genre_ids="genre unknown"),`<div class="modal__backcall">\n        <div class="modal__img-box">\n          <img\n            class="modal__img"\n            src=${t.poster_path} alt=${t.original_title}\n          />\n        </div>\n        <div class="modal__text-content">\n          <h2 class="modal__title">${t.title}</h2>\n          <div class="modal__dicr">\n            <ul class="modal__list1">\n              <li class="modal__list-item">Vote / Votes</li>\n              <li class="modal__list-item">Popularity</li>\n              <li class="modal__list-item">Original Title</li>\n              <li class="modal__list-item">Genre</li>\n            </ul>\n            <ul class="modal__list2">\n              <li class="modal__item">\n                <span class="modal__vote1">${t.vote_average}</span> /\n                <span class="modal__vote2">${t.vote_count}</span>\n              </li>\n              <li class="modal__item">${t.popularity}</li>\n              <li class="modal__item">${t.title}</li>\n              <li class="modal__item">${t.genre_ids}</li>\n            </ul>\n          </div>\n          <article class="modal__article">\n            <h3 class="modal__subtitle">About</h3>\n            <p class="modal__text">\n             ${t.overview}\n            </p>\n          </article>\n          <div class="modal__btn-box">\n            <button class="modal__button-org" type="button">\n              add to Watched\n            </button>\n            <button class="modal__button-trans" type="button">\n              add to queue\n            </button>\n          </div>\n        </div>\n  </div>`);const n=document.querySelector(".modal__button-org"),l=document.querySelector(".modal__button-trans");let o=null;try{o=localStorage.getItem("watched"),o=null===o?[]:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}function i(){let t=[];localStorage.getItem("watched")?localStorage.getItem("watched").includes(JSON.stringify(e))?console.log("Watched film list includes this film!"):(t=JSON.parse(localStorage.getItem("watched")),t.push(e),localStorage.setItem("watched",JSON.stringify(t)),n.removeEventListener("click",i),n.textContent="remove from watched",n.addEventListener("click",a)):(t.push(e),localStorage.setItem("watched",JSON.stringify(t)),n.removeEventListener("click",i),n.textContent="remove from watched",n.addEventListener("click",a))}function a(){const t=JSON.parse(localStorage.getItem("watched")),l=t.findIndex((t=>t.id===e.id));t.splice(l,1),localStorage.setItem("watched",JSON.stringify(t)),n.removeEventListener("click",a),n.textContent="add to Watched",n.addEventListener("click",i)}o.find((t=>t.id===e.id))?(n.addEventListener("click",a),n.textContent="remove from watched"):n.addEventListener("click",i);let c=null;try{c=localStorage.getItem("queue"),c=null===c?[]:JSON.parse(c)}catch(e){console.error("Get state error: ",e.message)}function d(){let t=[];localStorage.getItem("queue")?localStorage.getItem("queue").includes(JSON.stringify(e))?console.log("queue film list includes this film!"):(t=JSON.parse(localStorage.getItem("queue")),t.push(e),localStorage.setItem("queue",JSON.stringify(t)),l.removeEventListener("click",d),l.textContent="remove from queue",l.addEventListener("click",u)):(t.push(e),localStorage.setItem("queue",JSON.stringify(t)),l.removeEventListener("click",d),l.textContent="remove from queue",l.addEventListener("click",u))}function u(){const t=JSON.parse(localStorage.getItem("queue")),n=t.findIndex((t=>t.id===e.id));t.splice(n,1),localStorage.setItem("queue",JSON.stringify(t)),l.removeEventListener("click",u),l.textContent="add to queue",l.addEventListener("click",d)}c.find((t=>t.id===e.id))?(l.addEventListener("click",u),l.textContent="remove from queue"):l.addEventListener("click",d)})).finally((()=>{document.querySelector(".backdrop-loader").remove()}));const n=document.querySelector(".close");function l(e){e.target===e.currentTarget&&c()}function o(e){"Escape"===e.code&&c()}function c(){s.classList.toggle("is-hidden"),n.removeEventListener("click",c),window.removeEventListener("keydown",o),s.removeEventListener("click",l)}n.addEventListener("click",c),window.addEventListener("keydown",o),s.addEventListener("click",l)}));
//# sourceMappingURL=index.97659d50.js.map