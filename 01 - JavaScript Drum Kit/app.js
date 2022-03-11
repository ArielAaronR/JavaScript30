window.addEventListener('keydown', (e) => {
  let keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //
  audio.play();
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

const removeTransition = (e, key) => {
  if (e.propertyName !== 'transform') return;
  key.classList.remove('playing');
};

keys.forEach(
  (key) =>
    key.addEventListener('transitionend', (e) => removeTransition(e, key)) //transition end event
);
