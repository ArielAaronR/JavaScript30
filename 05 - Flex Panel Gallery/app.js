const panels = document.querySelectorAll('.panel');

const toggleOpen = (panel) => {
  panel.classList.toggle('open');
};
const isActive = (e, panel) => {
  if (e.propertyName.includes('flex')) {
    panel.classList.toggle('open-active');
  }
};

panels.forEach((panel) =>
  panel.addEventListener('click', () => {
    toggleOpen(panel);
  })
);
panels.forEach((panel) =>
  panel.addEventListener('transitionend', (e) => {
    isActive(e, panel);
  })
);
