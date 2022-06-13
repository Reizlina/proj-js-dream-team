// refs
const refs = {
  btnWatched: document.querySelector('.button__watched'),
  btnQueue: document.querySelector('.button__queue'),
}

// onBtnWatchedClickIsActive

const onBtnWatchedClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnQueue.classList.remove('is-active');
  console.log('waaaa');
}

refs.btnWatched.addEventListener('click', onBtnWatchedClickIsActive)

// onBtnQueueClickIsActive

const onBtnQueueClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');
}

refs.btnQueue.addEventListener('click', onBtnQueueClickIsActive);
