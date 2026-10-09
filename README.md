# 🌸 Aura Showcase — GitHub Pages Static Web Portal

  <p align="center">
  <img src="https://img.shields.io/badge/GitHub-Pages-22272E?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Live_200_OK-4CAF50?style=for-the-badge" alt="Live Status" />
</p>

An aesthetic, interactive static web deployment portal built for **Elevate Labs Web Development Internship — Task 5: Deploy a Static Website Using GitHub Pages**. 

This portal serves as a central portfolio hub showcasing all 5 completed internship deliverables. Clicking on any task card opens an interactive **Glassmorphic Modal Popup** displaying detailed documentation, key tech stack badges, GitHub repository links, and live demo URLs.

---

## 🔗 Live Links & Repository

* **Live Deployed Portal:** [https://tethi04.github.io/aura-showcase/](https://tethi04.github.io/aura-showcase/)
* **GitHub Repository:** [https://github.com/Tethi04/aura-showcase](https://github.com/Tethi04/aura-showcase)

---

## 🌟 Key Features

* 🪟 **Interactive Task Detail Modals:** Clickable cards open translucent glassmorphic popups providing in-depth descriptions, stack details, and direct GitHub/Live Demo links for each individual task.
* 🚀 **GitHub Pages Deployment:** Hosted globally on GitHub's free Content Delivery Network (CDN) with automatic HTTPS SSL encryption.
* 🕒 **Real-Time Live Clock:** Dynamic 12-hour digital clock header updated every second via Vanilla JavaScript.
* 📋 **One-Click URL Copy:** Built-in interactive clipboard controller with real-time UI feedback (`Copied! ✨`).
* 🎨 **Pastel Glassmorphism Aesthetic:** Translucent frosted card panels (`backdrop-filter: blur()`), floating mesh background blobs, and pulsing live status badges.
* 📱 **Fluid Responsiveness:** Mobile-friendly grid layout adapting seamlessly across mobile, tablet, and desktop viewports.

---

## 🎨 Design System & Color Tokens

The visual layout incorporates a strict pastel design palette:

| Color Token Name | Hex Code | Usage / Context |
| :--- | :--- | :--- |
| **Veranda Blue** | `#6BB1AD` | Buttons, clock pill text, task tags, hover glows |
| **Sky Cloud** | `#A7BCBD` | Background mesh gradient transition |
| **Lychee** | `#EDECDB` | Base card background, modal popup background |
| **Melon** | `#E5A9A9` | Primary CTA button gradient background |
| **Cupid Pink** | `#E6748E` | Active task card border, highlight badges, primary CTA, modal close button |

---

## 📁 Project Directory Structure

```text
aura-showcase/
├── index.html        # Main HTML5 document structure, portfolio grid, & modal container
├── style.css         # Pastel glassmorphism, floating mesh, grid, & modal overlay styles
├── script.js         # Real-time clock timer, clipboard controller, & modal logic data object
└── README.md         # Comprehensive project & deployment documentation
```

---

## 🖼️ Completed Internship Deliverables Summary

| Task # | Deliverable Title | Key Tech Stack | Features & Description |
| :---: | :--- | :--- | :--- |
| **Task 1** | Responsive Landing Page | HTML5, CSS3, Flexbox | Pastel glassmorphic landing page with smooth navigation and adaptive layouts. |
| **Task 2** | Aura Tasks To-Do App | Vanilla JS, LocalStorage, Modal UI | Productivity workspace with CRUD, analytics, localStorage sync, & calendar modal. |
| **Task 3** | Bookstore REST API | Node.js, Express, REST API | Node.js & Express API serving CRUD endpoints with JSON validation. |
| **Task 4** | Mobile Media Queries | Media Queries, Responsive | Responsive website transformation with fluid breakpoints & mobile drawer menu. |
| **Task 5** | GitHub Pages Deployment | Git, GitHub Pages, CI/CD | Production deployment portal hosting all static internship assets on live public infrastructure. |

---

## 🛠️ Step-by-Step Deployment Guide

To deploy or push updates to this project on GitHub Pages:

### 1. Local Staging & Commit
```bash
git add .
git commit -m "Update Aura Showcase with Interactive Task Detail Modals"
```

### 2. Pushing to GitHub
```bash
git branch -M main
git push -u origin main
```

### 3. GitHub Pages Activation
1. Navigate to repository settings: `[https://github.com/Tethi04/aura-showcase/settings/pages](https://github.com/Tethi04/aura-showcase/settings/pages)`.
2. Set **Build and deployment** ➔ **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Click **Save**.

---

## 🔄 Automated Continuous Deployment (CD)

Any new code pushed to the `main` branch automatically triggers GitHub Actions to rebuild and update the live site at `[https://tethi04.github.io/aura-showcase/](https://tethi04.github.io/aura-showcase/)`.

---

<p align="center">
  Designed & Deployed with ❤️ by <strong>Tethi Biswas</strong> — Elevate Labs Web Development Internship
</p>
