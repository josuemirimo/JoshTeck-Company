// nav-footer.js - Modern Navigation & Footer Component
// Include this file in all your HTML pages

class JoshTeckNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.injectStyles();
        this.injectNavigation();
        this.injectFooter();
        this.setupEventListeners();
        this.setActivePage();
    }

    // Inject CSS styles
    injectStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                padding-top: 72px;
            }

            /* Modern Navigation Styles */
            .site-nav {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(20px);
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                padding: 0 2rem;
                transition: all 0.3s ease;
            }

            .nav-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1400px;
                margin: 0 auto;
                height: 72px;
            }

            .nav-logo {
                height: 60px;
                width: auto;
                transition: transform 0.3s ease;
            }

            .nav-logo:hover {
                transform: scale(1.05);
            }

            .nav-links {
                display: flex;
                align-items: center;
                gap: 2rem;
                list-style: none;
            }

            .nav-links a {
                text-decoration: none;
                color: #333;
                font-weight: 500;
                font-size: 1rem;
                padding: 0.5rem 1rem;
                border-radius: 10px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .nav-links a::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0%;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                transition: left 0.3s ease;
                z-index: -1;
                border-radius: 10px;
            }

            .nav-links a:hover::before {
                left: 0;
            }

            .nav-links a:hover {
                color: white;
                transform: translateY(-2px);
            }

            .nav-links a.active {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }

            .social-nav {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .social-nav a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #f1f5f9;
                color: #64748b;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                text-decoration: none;
            }

            .social-nav a:hover {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                transform: translateY(-2px);
            }

            .nav-toggle {
                display: none;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #374151;
                padding: 0.5rem;
                border-radius: 8px;
                transition: all 0.3s ease;
            }

            .nav-toggle:hover {
                background: #f1f5f9;
            }

            /* Modern Footer Styles */
            .site-footer {
                background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                color: #e2e8f0;
                position: relative;
                overflow: hidden;
                margin-top: auto;
            }

            .site-footer::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, #667eea, transparent);
            }

            .footer-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 4rem 2rem 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 3rem;
            }

            .footer-col h4 {
                color: #f1f5f9;
                font-size: 1.2rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
                position: relative;
            }

            .footer-col h4::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 0;
                width: 40px;
                height: 2px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 2px;
            }

            .footer-logo {
                height: 50px;
                margin-bottom: 1rem;
                filter: brightness(1.2);
            }

            .footer-tagline {
                font-size: 1.1rem;
                font-weight: 500;
                color: #cbd5e1;
                margin-bottom: 1.5rem;
            }

            .contact-info {
                list-style: none;
            }

            .contact-info li {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.5rem 0;
                font-size: 0.95rem;
                color: #cbd5e1;
            }

            .contact-info i {
                color: #667eea;
                font-size: 1.1rem;
                width: 20px;
            }

            .social-icons {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .social-icons a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 45px;
                height: 45px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.1);
                color: #cbd5e1;
                font-size: 1.2rem;
                transition: all 0.3s ease;
                text-decoration: none;
                backdrop-filter: blur(10px);
            }

            .social-icons a:hover {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                transform: translateY(-3px);
            }

            .newsletter {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }

            .newsletter input {
                flex: 1;
                padding: 0.75rem 1rem;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.1);
                color: #e2e8f0;
                font-size: 0.95rem;
                backdrop-filter: blur(10px);
            }

            .newsletter input::placeholder {
                color: #94a3b8;
            }

            .newsletter button {
                padding: 0.75rem 1.5rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .newsletter button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
            }

            .note {
                font-size: 0.85rem;
                color: #94a3b8;
                line-height: 1.4;
            }

            .footer-bottom {
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                padding: 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .footer-links {
                display: flex;
                gap: 2rem;
            }

            .footer-links a {
                color: #94a3b8;
                text-decoration: none;
                font-size: 0.9rem;
                transition: color 0.3s ease;
            }

            .footer-links a:hover {
                color: #667eea;
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                body {
                    padding-top: 70px;
                }

                .site-nav {
                    padding: 0 1rem;
                }

                .nav-container {
                    height: 70px;
                }

                .nav-links {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    flex-direction: column;
                    padding: 2rem 0;
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }

                .nav-links.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }

                .nav-toggle {
                    display: block;
                }

                .social-nav {
                    display: none;
                }

                .footer-container {
                    padding: 3rem 1rem 1rem;
                    gap: 2rem;
                }

                .footer-bottom {
                    flex-direction: column;
                    text-align: center;
                    padding: 1.5rem 1rem;
                }

                .newsletter {
                    flex-direction: column;
                }
            }

            /* Scroll Effect */
            .site-nav.scrolled {
                background: rgba(255, 255, 255, 0.98);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Inject navigation HTML
    injectNavigation() {
        const nav = `
            <nav class="site-nav" id="navbar">
                <div class="nav-container">
                    <div class="nav-left">
                        <a href="index.html">
                            <img src="assets/images/joshteckcompany.png" alt="JoshTeck Company Logo" class="nav-logo">
                        </a>
                    </div>

                    <ul class="nav-links" id="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>

                    <div class="nav-right">
                        <div class="social-nav">
                            <a href="https://www.facebook.com/profile.php?id=61559833940191" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                            <a href="https://www.youtube.com/@joshteckcompany" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                            <a href="https://www.instagram.com/joshteckcompany/" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/joshteckcompany" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                            <a href="https://x.com/joshteckcompany" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                            <a href="https://www.tiktok.com/@joshteckcompany" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
                        </div>
                        <button class="nav-toggle" onclick="window.joshTeckNav.toggleMenu()" aria-label="Toggle Menu">
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `;
        document.body.insertAdjacentHTML('afterbegin', nav);
    }

    // Inject footer HTML
    injectFooter() {
        const footer = `
            <footer class="site-footer">
                <div class="footer-container">
                    <!-- Company Info -->
                    <div class="footer-col">
                        <img src="assets/images/joshteckcompany.png" alt="JoshTeck Company Logo" class="footer-logo">
                        <p class="footer-tagline">Education is the Key to Success</p>
                        <ul class="contact-info">
                            <li><i class="bi bi-envelope"></i> joshteckcompany@gmail.com</li>
                            <li><i class="bi bi-telephone"></i> +256 787 859776</li>
                            <li><i class="bi bi-geo-alt"></i> Kampala, Uganda</li>
                        </ul>
                    </div>

                    <!-- Social Media -->
                    <div class="footer-col">
                        <h4>Follow Us</h4>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61559833940191" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                            <a href="https://www.youtube.com/@joshteckcompany" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                            <a href="https://www.instagram.com/joshteckcompany/" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/joshteckcompany" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                            <a href="https://x.com/joshteckcompany" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                            <a href="https://www.tiktok.com/@joshteckcompany" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="footer-col">
                        <h4>Stay Connected</h4>
                        <form class="newsletter" onsubmit="window.joshTeckNav.handleNewsletter(event)">
                            <input type="email" placeholder="Enter your email" required>
                            <button type="submit">
                                <i class="bi bi-send"></i> Subscribe
                            </button>
                        </form>
                        <p class="note">Join our newsletter for updates on courses and tech insights. No spam, unsubscribe anytime.</p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>© 2025 JoshTeck Company. All Rights Reserved.</p>
                    <div class="footer-links">
                        <a href="privacy.html">Privacy Policy</a>
                        <a href="terms.html">Terms of Service</a>
                    </div>
                </div>
            </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', footer);
    }

    // Setup event listeners
    setupEventListeners() {
        // Handle scroll effects
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Handle mobile menu clicks
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('nav-links').classList.remove('active');
                const toggle = document.querySelector('.nav-toggle i');
                toggle.className = 'bi bi-list';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Set active page
    setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage ||
                (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // Toggle mobile menu
    toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        const toggle = document.querySelector('.nav-toggle i');

        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            toggle.className = 'bi bi-x-lg';
        } else {
            toggle.className = 'bi bi-list';
        }
    }

    // Newsletter subscription
    handleNewsletter(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;

        // Here you would typically send to your backend
        // For now, we'll show a success message
        this.showNotification(`Thank you! We've added ${email} to our newsletter.`, 'success');
        event.target.reset();
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Update social links
    updateSocialLinks(links) {
        const socialNavs = document.querySelectorAll('.social-nav a, .social-icons a');
        const platforms = ['facebook', 'youtube', 'instagram', 'linkedin', 'twitter_x', 'tiktok'];

        socialNavs.forEach((nav, index) => {
            const platform = platforms[index % platforms.length];
            if (links[platform]) {
                nav.href = links[platform];
            }
        });
    }

    // Update contact info
    updateContactInfo(info) {
        const emailEl = document.querySelector('.contact-info li:nth-child(1)');
        const phoneEl = document.querySelector('.contact-info li:nth-child(2)');
        const addressEl = document.querySelector('.contact-info li:nth-child(3)');

        if (info.email) emailEl.innerHTML = `<i class="bi bi-envelope"></i> ${info.email}`;
        if (info.phone) phoneEl.innerHTML = `<i class="bi bi-telephone"></i> ${info.phone}`;
        if (info.address) addressEl.innerHTML = `<i class="bi bi-geo-alt"></i> ${info.address}`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.joshTeckNav = new JoshTeckNavigation();

    // Optional: Update social links and contact info
    window.joshTeckNav.updateSocialLinks({
        facebook: 'https://www.facebook.com/joshteckcompany',
        youtube: 'https://youtube.com/@joshteckcompany',
        instagram: 'https://www.instagram.com/joshteckcompany/',
        linkedin: 'https://linkedin.com/company/joshteckcompany',
        twitter_x: 'https://x.com/joshteckcompany',
        tiktok: 'https://tiktok.com/@joshteckcompany'
    });
});

// Export for module use (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JoshTeckNavigation;
}