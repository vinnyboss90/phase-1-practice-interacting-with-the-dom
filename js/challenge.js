const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const comments = document.getElementById('list');
let count = 0;
let isPaused = false;

function incrementCounter() {
  count++;
  counter.textContent = count;
}

function decrementCounter() {
  count--;
  counter.textContent = count;
}

function likeNumber() {
  const li = document.createElement('li');
  li.textContent = `Number ${count} has been liked`;
  comments.appendChild(li);
}

function pauseCounter() {
  if (!isPaused) {
    isPaused = true;
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.textContent = 'resume';
    clearInterval(intervalId);
  } else {
    isPaused = false;
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.textContent = 'pause';
    intervalId = setInterval(incrementCounter, 1000);
  }
}

function restartCounter() {
  count = 0;
  counter.textContent = count;
  comments.innerHTML = '';
}

function addComment(event) {
  event.preventDefault();
  const comment = commentInput.value;
  const li = document.createElement('li');
  li.textContent = comment;
  comments.appendChild(li);
  commentInput.value = '';
}

let intervalId = setInterval(incrementCounter, 1000);

minus.addEventListener('click', decrementCounter);
plus.addEventListener('click', incrementCounter);
heart.addEventListener('click', likeNumber);
pause.addEventListener('click', pauseCounter);
restart.addEventListener('click', restartCounter);
commentForm.addEventListener('submit', addComment);