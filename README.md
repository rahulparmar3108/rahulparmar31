# Rahul Parmar - Developer Portfolio Website

A premium, modern, responsive single-page developer portfolio website built for **Rahul Parmar**, WordPress & Shopify Developer with 4+ years of professional experience. 

Designed specifically for zero-dependency static hosting on **GitHub Pages**.

---

## 🚀 Features

- **Modern Visual Identity**: Sophisticated dark navy styling with glassmorphism cards, glowing borders, smooth micro-animations, and code-style UI components.
- **Developer Hero Visual**: Interactive code window with live tabs for `wp-config.php` and `shopify.liquid`, syntax highlighting, and floating badges.
- **Categorized Technical Toolkit**: Comprehensive skills presentation covering WordPress, WooCommerce, Shopify Liquid, PHP, JavaScript, REST APIs, and modern tools without fake percentage bars.
- **Resume-Grounded Experience Timeline**: Accurate vertical timeline showing positions at **SprybitLLP** and **PeanutSquareLLP**.
- **Separate Project Categories**: Clear separation between 6 WordPress Projects and 5 Shopify Storefront Projects, complete with interactive category filtering (`All`, `WordPress`, `Shopify`).
- **Interactive Contact Form**: Frontend JavaScript validation with error highlighting, success notifications, and ready-to-use placeholders for Formspree / Web3Forms.
- **Full Responsiveness & Accessibility**: Tested for all viewport sizes (mobile, tablet, desktop) with `prefers-reduced-motion` fallbacks and semantic HTML5.

---

## 📁 Repository Folder Structure

```text
rahul-parmar-portfolio/
│
├── index.html                  # Main single-page HTML markup
│
├── css/
│   └── style.css               # Main design tokens, glassmorphism, responsive grid & animations
│
├── js/
│   └── main.js                 # Smooth scroll, navigation spy, project filter & form validation
│
├── assets/
│   ├── rahul-parmar.jpg        # Developer profile picture / avatar
│   ├── Rahul-Parmar-Resume.pdf # Downloadable resume PDF
│   │
│   └── projects/
│       ├── wordpress-fylit.jpg      # Fylit Tax Return Plugin
│       ├── wordpress-timesbull.jpg   # Timesbull Custom Theme
│       ├── wordpress-dharti.jpg     # Dharti Industries Elementor Theme
│       ├── wordpress-marnie.jpg     # Marnie WooCommerce Dashboard
│       ├── wordpress-nest.jpg       # Nest Public School Custom WP
│       ├── wordpress-tirupati.jpg   # Tirupatipolyflex WooCommerce
│       ├── shopify-sax.jpg          # SAX Healthcare Shopify
│       ├── shopify-jullia.jpg       # Jullia Bridal Shopify Dawn
│       ├── shopify-velspices.jpg    # Velspices Grocery Shopify Dawn
│       ├── shopify-girnar.jpg       # Girnar Ayurvedic Multi-Brand
│       └── shopify-pera.jpg         # Pera Luggage Shopify Symmetry
│
└── README.md                   # Setup and deployment documentation
```

---

## ⚙️ Customization & Updates Guide

### 1. Replacing Profile Avatar & Resume
- **Profile Image**: Replace `assets/rahul-parmar.jpg` with your personal portrait photo.
- **Downloadable Resume**: Replace `assets/Rahul-Parmar-Resume.pdf` with your updated resume PDF.

### 2. Updating Project Screenshots & Live Links
- Replace any SVG preview graphic inside `assets/projects/` with real high-resolution screenshots of your projects.
- In `index.html`, locate the project card you wish to edit and update the `href` attribute:
  ```html
  <a href="https://your-project-url.com" target="_blank" rel="noopener" class="project-link">
      View Store <i class="fa-solid fa-arrow-up-right-from-square"></i>
  </a>
  ```

### 3. Updating Social Links & Contact Details
- Open `index.html` and search for `.contact-socials` or `.contact-details-list`.
- Update your email address (`parmarrahul908@gmail.com`), phone number (`+91 9687854723`), LinkedIn URL, and GitHub repository links.

### 4. Configuring Contact Form Backend (e.g., Formspree / Web3Forms)
To receive emails directly from visitors without a backend server:
1. Sign up for a free account at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Get your form endpoint URL (e.g. `https://formspree.io/f/xbjnqkyz`).
3. In `index.html`, update line `<form id="portfolioContactForm" action="#" method="POST">`:
   ```html
   <form id="portfolioContactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🌐 Deploying to GitHub Pages

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Rahul Parmar portfolio"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/USERNAME/rahul-parmar-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your GitHub repository **Settings** tab.
   - On the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Choose branch `main` and folder `/ (root)`, then click **Save**.
   - Your website will automatically be deployed live at `https://USERNAME.github.io/rahul-parmar-portfolio/`!

---

## 📄 License & Credits

Designed & Developed for **Rahul Parmar**. Free for personal use and portfolio deployment.
