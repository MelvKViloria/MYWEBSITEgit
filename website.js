// Home Page

// This code will display a message when the user clicks the "Learn More" button
var learnMoreButton = document.querySelector('#learn-more-button');
var message = document.querySelector('#message');

learnMoreButton.addEventListener('click', function() {
  message.textContent = "Valorant is a team-based tactical shooter and first-person shooter set in the near-future. The game was developed and published by Riot Games for Microsoft Windows.";
});

// About Page

// This code will change the background color when the user hovers over the "Our Team" section
var ourTeamSection = document.querySelector('#our-team');

ourTeamSection.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#ff4d4d';
});

ourTeamSection.addEventListener('mouseleave', function() {
  this.style.backgroundColor = 'transparent';
});

// Contact Page

// This code will display an alert when the user submits the contact form
var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thanks for your message! We will get back to you as soon as possible.');
});
