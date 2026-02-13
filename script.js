// Placeholder for future enhancements
const hero = document.querySelector(".hero");

// Add your 4 images here
const images = [
    "images/pexels-tanhatamannasyed-35673084.png",
    "images/pexels-tanhatamannasyed-35673070.jpg",
    "images/pexels-tanhatamannasyed-35652406.jpg",
    "images/bzjbsjhbajx nm.png",
    
];

let currentIndex = 0;

// Set initial image
hero.style.backgroundImage = `url(${images[0]})`;

// Change image every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
}, 3000);

console.log("Website loaded successfully");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

