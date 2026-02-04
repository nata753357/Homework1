document.addEventListener('DOMContentLoaded', function() {
  const gameLinks = document.querySelectorAll('.top2-box__card[href^="#"], .top2-box__card2[href^="#"], .top2-box__card3[href^="#"]');
  
  gameLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Рассчитываем положение с учетом возможного фиксированного меню
        const headerOffset = 100; // Настройте этот отступ под вашу шапку
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});