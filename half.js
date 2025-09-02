document.addEventListener('DOMContentLoaded', () => {
  const cabIdle = document.querySelector('.cab-idle');
  const cabRide = document.querySelector('.cab-ride');
  const p1 = document.querySelector('.p1');

  cabIdle.addEventListener('click', () => {
   
    p1.classList.add('expanded');

 
    window.scrollTo({ top: 4120, behavior: 'smooth' });

  
    cabIdle.style.display = 'none';
    cabRide.style.display = 'block';
    cabRide.style.transition = 'left 1.5s linear';  
    cabRide.style.left = '150%';


    setTimeout(() => {
      cabRide.style.display = 'none';
      startLoopingCabs();
    }, 500);  
  });

  function startLoopingCabs() {
    setInterval(() => {
      const cab = document.createElement('img');
      cab.src = 'image/Cab_ride.gif';
      cab.style.position = 'absolute';
      cab.style.top = '3400px';
      cab.style.left = '-1200px';
      cab.style.width = '1200px';
      cab.style.animation = 'cabLoop 6s linear forwards'; 
      document.body.appendChild(cab);
      setTimeout(() => cab.remove(), 6000);
    }, 5000); 
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const moon = document.querySelector('.moon-2');
  const moonLight = document.querySelector('.moon-2-light');
  const popUp = document.querySelector('.pop-up');

  function toggleMoon() {
    const isActive = moon.classList.contains('active');

    if (!isActive) {
      // Move and enlarge moon
      moon.classList.add('active');
      moonLight.classList.add('active');

      // Fade in pop-up
      popUp.classList.add('visible');
    } else {
      // Move moon back
      moon.classList.remove('active');
      moonLight.classList.remove('active');

      // Fade out pop-up
      popUp.classList.remove('visible');
    }
  }

  // Both moon images act as buttons
  moon.addEventListener('click', toggleMoon);
  moonLight.addEventListener('click', toggleMoon);
});
