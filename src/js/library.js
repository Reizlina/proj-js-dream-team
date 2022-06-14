// refs
const refs = {
  btnWatched: document.querySelector('.buttons__watched'),
  btnQueue: document.querySelector('.buttons__queue'),
}

// onBtnWatchedClickIsActive

const onBtnWatchedClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnQueue.classList.remove('is-active');
}

refs.btnWatched.addEventListener('click', onBtnWatchedClickIsActive)

// onBtnQueueClickIsActive

const onBtnQueueClickIsActive = e => {
  e.target.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');
}

refs.btnQueue.addEventListener('click', onBtnQueueClickIsActive);
