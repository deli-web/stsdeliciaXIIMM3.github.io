/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.', {
  origin: 'top',
});

ScrollReveal().reveal('.video-container video, .video-container h3, .image img', {
  origin: 'bottom',
});

ScrollReveal().reveal('.content h3', {
  origin: 'left',
});

ScrollReveal().reveal('.content p, .box-container a', {
  origin: 'right',
});
