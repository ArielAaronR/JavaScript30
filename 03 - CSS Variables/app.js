const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e, input) => {
  const suffix = input.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${input.name}`,
    e.target.value + suffix
  );
};
let isClicked = false;
inputs.forEach((input) => {
  //   input.addEventListener('change', handleUpdate);
  input.addEventListener('change', (e) => handleUpdate(e, input));
  input.addEventListener('mousemove', (e) => handleUpdate(e, input));
});
