(()=>{const e={openModalBtn:document.querySelector("[data-team-open]"),closeModalBtn:document.querySelector("[data-team-close]"),modal:document.querySelector("[data-team]")};function t(){e.modal.classList.toggle("backdrops--hidden"),window.addEventListener("keydown",n),e.modal.removeEventListener("click",d)}function n(e){"Escape"===e.code&&t()}function d(e){e.target===e.currentTarget&&t()}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",d),e.modal.addEventListener("click",(function(e){if(!e.target.classList.contains("backdrops--hidden"))return;t()}))})();
//# sourceMappingURL=index.434b5e82.js.map
