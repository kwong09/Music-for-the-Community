document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll('.filter-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      
      buttons.forEach(btn => btn.classList.remove('active'));

      button.classList.add('active');


      const genre = button.getAttribute('data-name');
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        if (genre === 'all' || card.getAttribute('data-name') === genre) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});