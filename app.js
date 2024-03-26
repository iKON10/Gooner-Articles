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

const emailButton = document.querySelector('.mail');
emailButton.addEventListener('click', emailLink)
function emailLink(){
  const emailAddress = "netxikon10@gmail.com";
  const subject = "Inquiry from Kefa's Guide To Arsenal FC";

  //Construct email link with pre-filled details
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
   //Open the link in a new tab
   window.open(mailtoLink, 'blank');
}

const whatsappButton = document.querySelector('.whatsapp')
function whatsappLink() {
  const whatsappUrl = "https://wa.me/+254793815657/";
  window.open(whatsappUrl, '_blank');
}

