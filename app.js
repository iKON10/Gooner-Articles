const toggleButton = document.querySelector('.toggle-articles');
const articleList = document.getElementById('article-list');

toggleButton.addEventListener('click', () => {
    articleList.classList.toggle('hidden');  // Add/remove 'hidden' class
  });

const readButtons = document.querySelectorAll('.read-article');

readButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.open(button.href, '_blank'); // Open link in new tab
  });
});




