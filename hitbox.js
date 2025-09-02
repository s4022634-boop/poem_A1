const shadow = document.querySelector('.shadow');
const hitbox = document.querySelector('.flashlight-hitbox');

hitbox.addEventListener('mouseenter', () => shadow.classList.add('active'));
hitbox.addEventListener('mouseleave', () => shadow.classList.remove('active'));

hitbox.addEventListener('mousemove', (e) => {
  const rect = hitbox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  shadow.style.setProperty('--x', `${x}px`);
  shadow.style.setProperty('--y', `${y}px`);
});
