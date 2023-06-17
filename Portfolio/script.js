//defines the status of the image card, and the click function
const imageItems = document.querySelectorAll('.image-item');

imageItems.forEach(function(item) {
  item.addEventListener('click', function() {
    const card = item.querySelector('.image-card');
    const front = item.querySelector('.image-front');
    const back = item.querySelector('.image-back');
    
    if (card.classList.contains('flipped')) {
      card.classList.remove('flipped');
      front.style.display = 'block';
      back.style.display = 'none';
    } else {
      card.classList.add('flipped');
      front.style.display = 'none';
      back.style.display = 'block';
    }
    
    item.classList.toggle('clicked');
  });
});