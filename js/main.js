// Set current date
function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = today.toLocaleDateString('en-NZ', options);
    }
    
    const featuredDateElement = document.getElementById('featuredDate');
    if (featuredDateElement) {
        featuredDateElement.textContent = today.toLocaleDateString('en-NZ', { month: 'short', day: 'numeric', year: 'numeric' });
    }
}

// Update weather
function updateWeather() {
    const weatherConditions = [
        { temp: 16, condition: 'Partly Cloudy', icon: '☁' },
        { temp: 14, condition: 'Light Rain', icon: '🌧' },
        { temp: 18, condition: 'Sunny', icon: '☀' },
        { temp: 12, condition: 'Windy', icon: '💨' }
    ];
    
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const weatherElement = document.getElementById('weather');
    if (weatherElement) {
        weatherElement.textContent = `Wellington: ${randomWeather.temp}°C, ${randomWeather.condition}`;
    }
}

// Handle newsletter subscription
function handleSubscribe(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing!\n\nWelcome to The Wellington Times daily newsletter. We'll send updates to: ${email}`);
    event.target.reset();
}

// Simulate live breaking news updates
function simulateLiveUpdate() {
    const updates = [
        "Wellington City Council approves new waterfront development plan",
        "All Blacks announce squad for upcoming test series",
        "Tech hub initiative launched to boost Wellington's digital economy",
        "Severe weather warning issued for Wellington region",
        "Wellington Phoenix sign international striker",
        "New ferry service to connect Wellington suburbs",
        "Te Papa announces record visitor numbers",
        "Wellington Airport expansion receives government backing"
    ];
    
    const breakingText = document.querySelector('.breaking-text');
    if (breakingText) {
        const randomUpdates = updates.sort(() => 0.5 - Math.random()).slice(0, 3);
        breakingText.textContent = randomUpdates.join(' • ');
    }
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes(currentPage) || (currentPage === 'index.html' && href.includes('index.html')))) {
            link.classList.add('active');
        }
    });
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    setActiveNavLink();
    
    // Update weather every 30 seconds (simulated)
    setInterval(updateWeather, 30000);
    
    // Update breaking news every minute
    setInterval(simulateLiveUpdate, 60000);
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add dynamic loading animation for images
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.style.opacity = '0';
        setTimeout(() => {
            placeholder.style.transition = 'opacity 0.5s';
            placeholder.style.opacity = '1';
        }, Math.random() * 1000);
    });
});
