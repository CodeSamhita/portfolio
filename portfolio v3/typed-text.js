const phrases = [
  " FULL STACK DEVELOPER... ",
  " INNOVATOR... ",
  " TECH ENTHUSIAST... ",
];
const typedTextElement = document.getElementById("typed-text");
let phraseIndex = 0,
  charIndex = 0,
  isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typedTextElement.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typedTextElement.textContent = currentPhrase.substring(0, charIndex++);
  }
  let typingSpeed = isDeleting ? 20 : 90;
  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 650;
  }
  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Fun Fact Rotator (added to existing typed-text.js for simplicity)
const funFacts = [
  "I enjoy building systems that are efficient, responsive, and dependable.",
  "My first code was written in C++ for an Arduino.",
  "I'm a big fan of open-source hardware and software.",
  "I thrive in practical, collaborative environments."
];
let currentFactIndex = 0;
const funFactElement = document.getElementById('funFact');

function rotateFunFact() {
    if (funFactElement) {
        funFactElement.textContent = `Fun fact: ${funFacts[currentFactIndex]}`;
        currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    }
    setTimeout(rotateFunFact, 7000); // Change fact every 7 seconds
}
document.addEventListener('DOMContentLoaded', rotateFunFact);
