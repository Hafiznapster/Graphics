// Services data
const services = [
    {
        title: 'Visual Effects',
        description: 'Cutting-edge VFX for films and TV shows using the latest technology',
        icon: '🌐',
        color: '#00bfff',
        features: ['High-end compositing', 'Particle systems', 'Digital environments', 'Character effects']
    },
    {
        title: '3D Animation',
        description: 'Full-service 3D animation from concept to final delivery',
        icon: '📊',
        color: '#f5b95f',
        features: ['Character animation', 'Motion graphics', 'Product visualization', 'Architectural visualization']
    },
    {
        title: 'Motion Design',
        description: 'Creative motion design solutions for digital platforms',
        icon: '🎨',
        color: '#e8a948',
        features: ['Logo animation', 'UI motion', 'Title sequences', 'Social media content']
    },
    {
        title: 'Color Grading',
        description: 'Professional color correction and grading services',
        icon: '🎨',
        color: '#ff6b6b',
        features: ['Color correction', 'Look development', 'HDR grading', 'Final delivery']
    },
    {
        title: 'Compositing',
        description: 'Seamless integration of visual elements',
        icon: '📱',
        color: '#4facfe',
        features: ['Green screen', 'Rotoscoping', 'Tracking', 'Beauty work']
    },
    {
        title: 'Pre-visualization',
        description: 'Detailed pre-visualization for complex sequences',
        icon: '🔒',
        color: '#7d5fff',
        features: ['Storyboarding', '3D previsualization', 'Technical planning', 'Shot design']
    }
];

// Portfolio data
const portfolioItems = [
    {
        image: '../arcane.jpg',
        category: 'animation',
        title: 'Arcane',
        description: 'Award-winning animated series'
    },
    {
        image: '../batman.jpg',
        category: 'film',
        title: 'The Batman',
        description: 'Dark and atmospheric cinematography'
    },
    {
        image: '../interstelllar.jpg',
        category: 'vfx',
        title: 'Interstellar',
        description: 'Groundbreaking space visualization'
    },
    {
        image: '../spiderman.jpg',
        category: 'vfx',
        title: 'Spider-Man',
        description: 'Cutting-edge visual effects'
    },
    {
        image: '../minalmurali.jpg',
        category: 'vfx',
        title: 'Minnal Murali',
        description: 'Superhero action with stunning VFX'
    },
    {
        image: '../thalllumala.jpg',
        category: 'film',
        title: 'Thallumala',
        description: 'High-energy action choreography'
    },
    {
        image: '../shawshank redemption.jpg',
        category: 'film',
        title: 'Shawshank Redemption',
        description: 'Classic cinematography'
    },
    {
        image: '../the green knight.jpg',
        category: 'film',
        title: 'The Green Knight',
        description: 'Visually stunning fantasy'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show the container with animation
    setTimeout(() => {
        document.querySelector('.container').classList.add('loaded');
    }, 100);

    // Initialize services
    initializeServices();

    // Initialize portfolio
    initializePortfolio();

    // Initialize category filters
    initializeCategoryFilters();
});

// Initialize services section
function initializeServices() {
    const servicesGrid = document.querySelector('.services-grid');
    
    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon" style="background: ${service.color}15; color: ${service.color}">
                ${service.icon}
            </div>
            <h3 style="color: ${service.color}">${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-features">
                ${service.features.map(feature => `
                    <div class="feature">
                        <span class="feature-icon" style="color: ${service.color}">✓</span>
                        ${feature}
                    </div>
                `).join('')}
            </div>
            <div class="service-number">0${index + 1}</div>
        `;

        // Add hover effect styles
        serviceCard.style.cssText = `
            background: var(--card-bg-color);
            border-radius: var(--card-border-radius);
            padding: 2.5rem 2rem;
            position: relative;
            overflow: hidden;
            transition: var(--transition-smooth);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
        `;

        // Add hover effects
        serviceCard.addEventListener('mouseenter', () => {
            serviceCard.style.transform = 'translateY(-10px)';
            serviceCard.style.boxShadow = `0 25px 50px rgba(0, 0, 0, 0.3), 0 0 40px ${service.color}40`;
            serviceCard.style.borderColor = `${service.color}40`;
        });

        serviceCard.addEventListener('mouseleave', () => {
            serviceCard.style.transform = 'translateY(0)';
            serviceCard.style.boxShadow = 'none';
            serviceCard.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        });

        servicesGrid.appendChild(serviceCard);
    });
}

// Initialize portfolio section
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.category = item.category;
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <span class="portfolio-category">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;

        // Add hover effect styles
        portfolioItem.style.cssText = `
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            transition: var(--transition-smooth);
        `;

        // Add 3D hover effects
        portfolioItem.addEventListener('mousemove', (e) => {
            const rect = portfolioItem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xRotation = ((y - rect.height / 2) / rect.height) * 20;
            const yRotation = ((x - rect.width / 2) / rect.width) * 20;
            
            portfolioItem.style.transform = `
                perspective(1000px)
                scale(1.1)
                rotateX(${-xRotation}deg)
                rotateY(${yRotation}deg)
            `;
            portfolioItem.style.boxShadow = 'var(--card-hover-shadow)';
        });

        portfolioItem.addEventListener('mouseleave', () => {
            portfolioItem.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            portfolioItem.style.boxShadow = 'none';
            portfolioItem.style.transition = 'all 0.5s ease';
        });

        portfolioItem.addEventListener('mouseenter', () => {
            portfolioItem.style.transition = 'all 0.1s ease';
        });

        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize category filters
function initializeCategoryFilters() {
    const categories = document.querySelectorAll('.portfolio-category');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Update active state
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');

            const selectedCategory = category.dataset.category;

            // Filter items
            portfolioItems.forEach(item => {
                if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Add smooth scrolling for navigation
document.querySelectorAll('.nav-menu span').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.textContent.toLowerCase();
        const target = document.querySelector(`.${section}-section`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active navigation item on scroll
window.addEventListener('scroll', () => {
    const sections = ['hero', 'services', 'portfolio'];
    const navItems = document.querySelectorAll('.nav-menu span');
    
    let current = '';
    
    sections.forEach(section => {
        const element = document.querySelector(`.${section}-section`);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section;
            }
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.toLowerCase() === current) {
            item.classList.add('active');
        }
    });
});