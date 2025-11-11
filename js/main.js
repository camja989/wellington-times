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

// Search functionality
const articles = [
    { title: "Choppalawnz: Wellington's Premier Lawn Care Service", url: "articles/choppalawnz-wellington-lawn-care.html", category: "Business", description: "Local business brings professional lawn care and eco-friendly practices to Wellington homes and businesses" },
    { title: "Labour's Capital Gains Tax: Winners and Losers Among Wellington's Middle Class", url: "articles/labour-capital-gains-tax-wellington.html", category: "Politics", description: "Labour Party announces targeted capital gains tax on investment properties" },
    { title: "Pacific Flashpoint: How a Narrow Waterway Could Determine Asia-Pacific Future", url: "articles/pacific-bashi-channel-taiwan-crisis.html", category: "Politics", description: "The Bashi Channel has become a focal point of US-China military competition" },
    { title: "First Solar: America's Solar Giant Shines Bright Amid NZ's Renewable Revolution", url: "articles/first-solar-america-nz-renewable-energy.html", category: "Business", description: "First Solar's stellar Q3 results and NZ solar capacity surge" },
    { title: "The Hidden Crisis Behind Your Doctor Shortage: Why Final Year Medical Students Are Breaking", url: "articles/medical-student-grant-crisis.html", category: "Opinion", description: "Medical students work 40-60 hour weeks but grants haven't increased since 2006" },
    { title: "100,000 Strong: Workers Rise Up as NZ's Wealthy Elite Ignore the Real Cost of Living", url: "articles/workers-strike-100000-strong.html", category: "Politics", description: "Largest industrial action in 40 years as workers demand fair wages" },
    { title: "Reality Check: Luxon's Trade Boast Rings Hollow as NZ Economy Crashes", url: "articles/luxon-economy-reality-check.html", category: "Politics", description: "PM's Brussels spin ignores worst recession in decades" },
    { title: "Trump Slaps Sanctions on Russian Oil Giants in Ukraine Pressure Play", url: "articles/trump-russia-oil-sanctions.html", category: "World", description: "Rosneft and Lukoil sanctioned as oil prices surge 5%" },
    { title: "Beyond Meat Surges 1,300% in Wild 'Meme Stock' Frenzy", url: "articles/beyond-meat-meme-stock-surge.html", category: "Business", description: "Dubai trader sparks GameStop-style short squeeze before crash" },
    { title: "The Rise of AI Agents: Your Digital Workforce is Closer Than You Think", url: "articles/ai-agents-digital-workforce.html", category: "Technology", description: "AI systems moving beyond chatbots to become digital employees" },
    { title: "Wellington Phoenix Fight Back to Earn Hard-Fought Draw in Perth", url: "articles/wellington-phoenix-perth-glory-draw.html", category: "Sports", description: "Phoenix come from 2-0 down to secure 2-2 draw" },
    { title: "The Careers in New Zealand with the Highest Concentration of Psychopathic Traits", url: "articles/psychopathic-traits-careers-nz.html", category: "Culture", description: "Research reveals which professions attract psychopathic traits" },
    { title: "Education as a Right, Not a Privilege: The Case for Free Tertiary Education", url: "articles/free-tertiary-education-opinion.html", category: "Opinion", description: "Young New Zealanders face crushing debt or miss out on higher education" },
    { title: "It's Time for New Zealand to Embrace Nuclear Power", url: "articles/nz-nuclear-power-opinion.html", category: "Opinion", description: "Reconsidering our nuclear-free stance for climate and energy security" }
];

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }
    
    const results = articles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 8px; text-align: center;">
                <p style="font-size: 18px; color: #666;">No articles found for "${query}"</p>
                <p style="margin-top: 10px; color: #999;">Try different keywords or browse our sections</p>
            </div>
        `;
        searchResults.style.display = 'block';
        return;
    }
    
    let resultsHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; margin-bottom: 20px; color: #333;">Found ${results.length} article${results.length !== 1 ? 's' : ''} for "${query}"</h3>
            <div style="display: grid; gap: 15px;">
    `;
    
    results.forEach(article => {
        const categoryColors = {
            'Business': '#d32f2f',
            'Politics': '#1976d2',
            'Technology': '#2196f3',
            'Sports': '#4caf50',
            'Culture': '#9c27b0',
            'Opinion': '#ff9800',
            'World': '#d32f2f'
        };
        
        resultsHTML += `
            <a href="${article.url}" style="display: block; padding: 20px; border: 1px solid #eee; border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.3s;" onmouseover="this.style.borderColor='#c8102e'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'" onmouseout="this.style.borderColor='#eee'; this.style.boxShadow='none'">
                <div style="margin-bottom: 8px;">
                    <span style="display: inline-block; padding: 4px 12px; background: ${categoryColors[article.category] || '#666'}; color: white; border-radius: 4px; font-size: 12px; font-weight: bold;">${article.category.toUpperCase()}</span>
                </div>
                <h4 style="margin: 0 0 10px 0; font-size: 18px; color: #c8102e;">${article.title}</h4>
                <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">${article.description}</p>
            </a>
        `;
    });
    
    resultsHTML += `
            </div>
        </div>
    `;
    
    searchResults.innerHTML = resultsHTML;
    searchResults.style.display = 'block';
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                const searchResults = document.getElementById('searchResults');
                if (searchResults) {
                    searchResults.style.display = 'none';
                }
            }
        });
    }
});
