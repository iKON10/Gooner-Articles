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

const dropdownToggle = document.querySelector('.dropdown-toggle');
const menuContent = document.querySelector('.menu-content');

dropdownToggle.addEventListener('click', function() {
  console.log("Dropdown clicked!");

  menuContent.classList.toggle('show'); // Toggle 'show' class
});

const loginButton = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');

loginButton.addEventListener('click', function() {
  console.log('Login clicked');
  loginForm.classList.toggle('show'); // Toggle 'show' class for visibility
});