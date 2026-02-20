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

// === Backend Integration ===

// Fetch programs dynamically
fetch('http://localhost:5000/api/programs')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('#program .cards');
    container.innerHTML = ''; // clear existing cards
    data.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      `;
      container.appendChild(card);

      // Optional: click to show details
      card.addEventListener('click', () => {
        fetch(`http://localhost:5000/api/programs/${p.id}`)
          .then(res => res.json())
          .then(detail => {
            alert(`${detail.title}\n\n${detail.description}\nDuration: ${detail.duration}`);
          });
      });
    });
  });


  fetch('http://localhost:5000/api/about')
  .then(res => res.json())
  .then(data => {
    document.querySelector('#about p').textContent = data.mission;
  });


  fetch('http://localhost:5000/api/schools')
  .then(res => res.json())
  .then(data => {
    const schoolsSection = document.querySelector('#schools');
    let html = '<h2>For Schools</h2>';
    data.forEach(s => {
      html += `<p><strong>${s.name}</strong>: ${s.description}</p>`;
    });
    schoolsSection.innerHTML = html;
  });



const form = document.querySelector('#contact form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch('http://localhost:5000/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message); // Show success message
    form.reset();
  });
});
