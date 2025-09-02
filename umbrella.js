document.addEventListener('DOMContentLoaded', () => {
  const umbrellas = document.querySelectorAll('.umbrella, .umbrella1, .umbrella2');

  umbrellas.forEach(umbrella => {
    let backTimeout;

    umbrella.addEventListener('mouseenter', () => {
      // Cancel any return timer if the mouse comes back quickly
      clearTimeout(backTimeout);

      // Start "move out" animation
      umbrella.classList.remove('animate-back');
      umbrella.classList.add('animate-out');
    });

    umbrella.addEventListener('mouseleave', () => {
      // Wait 1 second before moving back
      backTimeout = setTimeout(() => {
        umbrella.classList.remove('animate-out');
        umbrella.classList.add('animate-back');
      }, 1000); // Delay before returning (1s)
    });

    // Remove animation classes after animations finish, so it can retrigger
    umbrella.addEventListener('animationend', () => {
      if (umbrella.classList.contains('animate-back')) {
        umbrella.classList.remove('animate-back');
      }
    });
  });
});
