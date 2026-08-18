/**
 * RAHUL PARMAR - DEVELOPER PORTFOLIO JAVASCRIPT
 * Interactive functionality, scroll spy, filtering, animations, and validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. STICKY HEADER & SCROLL DETECTION
    // ----------------------------------------------------------------------
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to Top visibility
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------------------------
    // 2. MOBILE NAVIGATION DRAWER
    // ----------------------------------------------------------------------
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navBackdrop = document.getElementById('navBackdrop');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navBackdrop.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ----------------------------------------------------------------------
    // 3. SCROLLSPY - HIGHLIGHT ACTIVE NAVIGATION ITEM
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // ----------------------------------------------------------------------
    // 4. PROJECT CATEGORY FILTERING (ALL / WORDPRESS / SHOPIFY)
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const wpGroupTitle = document.getElementById('wpGroupTitle');
    const shopifyGroupTitle = document.getElementById('shopifyGroupTitle');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Handle Group Titles visibility
            if (wpGroupTitle && shopifyGroupTitle) {
                if (filterValue === 'all') {
                    wpGroupTitle.style.display = 'flex';
                    shopifyGroupTitle.style.display = 'flex';
                } else if (filterValue === 'wordpress') {
                    wpGroupTitle.style.display = 'flex';
                    shopifyGroupTitle.style.display = 'none';
                } else if (filterValue === 'shopify') {
                    wpGroupTitle.style.display = 'none';
                    shopifyGroupTitle.style.display = 'flex';
                }
            }

            // Filter Project Cards
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px) scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 5. INTERSECTION OBSERVER - SCROLL REVEAL ANIMATIONS
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------------------------
    // 6. HERO CODE TERMINAL TAB SWITCHER
    // ----------------------------------------------------------------------
    const tabBtns = document.querySelectorAll('.terminal-tabs .tab-btn');
    const terminalBody = document.getElementById('terminalCodeBody');

    const snippets = {
        wordpress: `
<span class="line-num">01</span><span class="code-content"><span class="token-comment">// Custom WordPress Plugin & WooCommerce Integration</span></span>
<span class="line-num">02</span><span class="code-content"><span class="token-keyword">class</span> <span class="token-function">Rahul_WordPress_Engine</span> {</span>
<span class="line-num">03</span><span class="code-content">    <span class="token-keyword">public</span> <span class="token-keyword">function</span> <span class="token-function">__construct</span>() {</span>
<span class="line-num">04</span><span class="code-content">        <span class="token-function">add_action</span>(<span class="token-string">'init'</span>, [$this, <span class="token-string">'register_acf_fields'</span>]);</span>
<span class="line-num">05</span><span class="code-content">        <span class="token-function">add_filter</span>(<span class="token-string">'woocommerce_get_price'</span>, [$this, <span class="token-string">'dynamic_pricing'</span>]);</span>
<span class="line-num">06</span><span class="code-content">    }</span>
<span class="line-num">07</span><span class="code-content">}</span>
<span class="line-num">08</span><span class="code-content"><span class="token-keyword">new</span> <span class="token-function">Rahul_WordPress_Engine</span>();</span>
        `.trim(),
        shopify: `
<span class="line-num">01</span><span class="code-content"><span class="token-comment">{% comment %} Custom Shopify Dawn Section {% endcomment %}</span></span>
<span class="line-num">02</span><span class="code-content"><span class="token-keyword">{%</span> <span class="token-function">if</span> customer.tags contains <span class="token-string">'VIP'</span> <span class="token-keyword">%}</span></span>
<span class="line-num">03</span><span class="code-content">  <span class="token-keyword">&lt;div</span> <span class="token-property">class</span>=<span class="token-string">"vip-badge"</span><span class="token-keyword">&gt;</span>Exclusive VIP Pricing Applied<span class="token-keyword">&lt;/div&gt;</span></span>
<span class="line-num">04</span><span class="code-content"><span class="token-keyword">{%</span> <span class="token-function">endif</span> <span class="token-keyword">%}</span></span>
<span class="line-num">05</span><span class="code-content"><span class="token-keyword">{%</span> <span class="token-function">render</span> <span class="token-string">'custom-mega-menu'</span>, section: section <span class="token-keyword">%}</span></span>
        `.trim()
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabKey = btn.getAttribute('data-tab');
            if (snippets[tabKey] && terminalBody) {
                terminalBody.innerHTML = snippets[tabKey];
            }
        });
    });

    // ----------------------------------------------------------------------
    // 7. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('portfolioContactForm');
    const successAlert = document.getElementById('formSuccessAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const messageInput = document.getElementById('contactMessage');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Reset errors
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            messageError.style.display = 'none';

            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your full name.';
                nameError.style.display = 'block';
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter your email address.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter your project details or message.';
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Show interactive success alert
                if (successAlert) {
                    successAlert.style.display = 'block';
                    successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                // Reset form
                contactForm.reset();

                // Hide success message after 6 seconds
                setTimeout(() => {
                    if (successAlert) {
                        successAlert.style.display = 'none';
                    }
                }, 6000);
            }
        });
    }
});
