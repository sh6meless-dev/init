document.addEventListener('DOMContentLoaded', () => {
  /** @type {NodeListOf<HTMLElement>} */
  const members = document.querySelectorAll('.member');

  members.forEach((m) => {
    if (!m.querySelector('.matricula')) {
      const id = m.getAttribute('data-matricula') || '';
      const chip = document.createElement('span');
      chip.className = 'matricula';
      chip.textContent = `${id}`;
      m.appendChild(chip);
    }

    m.addEventListener('click', () => m.focus());
  });
});


document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const el = document.activeElement;
  if (el && el.classList && el.classList.contains('member')) {
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 250);
  }
});

