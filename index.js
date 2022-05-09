
const refs = {
  input: document.querySelector('input'),
  start: document.querySelector('.btn-start'),
  clickMe: document.querySelector('.btn-click'),
  currentPoint: document.querySelector('.btn-current'),
  bestPoint: document.querySelector('.btn-best'),
};

refs.clickMe.setAttribute('disabled', 'disablet')
refs.start.setAttribute('disabled', 'disablet')
const STORAGE_KEY = 'Current Point';

refs.input.addEventListener('input', _.debounce(addPlayerName, 500))
refs.start.addEventListener('click', onStart)
refs.clickMe.addEventListener('click', onClick)
refs.currentPoint.addEventListener('click', onCurrent)
refs.bestPoint.addEventListener('click', bestPoint)

let counter = 0;

function addPlayerName(evt) {
  if (refs.input.value.trim().length != 0) {
    refs.start.removeAttribute('disabled')
  } else {
    refs.start.setAttribute('disabled', 'disablet')
  }
};

function onCurrent() {
  const currentPoint = JSON.parse(sessionStorage.getItem(STORAGE_KEY))
};

function onClick() {
  counter += 1
};

function onStart() {
  refs.clickMe.removeAttribute('disabled')
  counter = 0
  setTimeout(() => {
    refs.clickMe.setAttribute('disabled', 'disablet')
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(counter))
    refs.currentPoint.textContent = `${STORAGE_KEY} : ${counter}`
    const bestScore = JSON.parse(localStorage.getItem('Best score'))
    if (counter >= bestScore) {
      localStorage.setItem('Best score', JSON.stringify(counter))
      refs.bestPoint.textContent = `Best score : ${counter}`
    }

  }, 3000);
};
function bestPoint() {
};
