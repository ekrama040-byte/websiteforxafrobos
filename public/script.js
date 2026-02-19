// Placeholder for future enhancements
const hero = document.querySelector(".hero");

// Add your 4 images here
const images = [
    "images/imge1.jpg",
    "images/image.jpg",
    "images/elegoologo.jpg",
    
];

let currentIndex = 0;

// Set initial image
hero.style.backgroundImage = `url(${images[0]})`;

// Change image every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
}, 5000);

console.log("Website loaded successfully");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

