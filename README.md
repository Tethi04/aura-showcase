# 🌸 Aura Showcase — GitHub Pages Static Web Portal

<p align="center">
  <img src="https://img.shields.io/badge/GitHub-Pages-22272E?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Live_200_OK-4CAF50?style=for-the-badge" alt="Live Status" />
</p>

An aesthetic, responsive static web deployment portal built for **Elevate Labs Web Development Internship — Task 5: Deploy a Static Website Using GitHub Pages**. 

This application serves as a live portfolio hub showcasing all 5 completed internship deliverables wrapped in a signature pastel glassmorphic design system.

---

## 🔗 Live Links & Repository

* **Live Hosted Web Portal:** [https://tethi04.github.io/aura-showcase/](https://tethi04.github.io/aura-showcase/)
* **GitHub Repository:** [https://github.com/Tethi04/aura-showcase](https://github.com/Tethi04/aura-showcase)

---

## 🌟 Key Features

* 🚀 **GitHub Pages Deployment:** Hosted globally on GitHub's free Content Delivery Network (CDN) with automatic HTTPS SSL encryption.
* 🕒 **Real-Time Live Clock:** Dynamic 12-hour digital clock header updated every second via Vanilla JavaScript.
* 📋 **One-Click URL Copy:** Built-in interactive clipboard controller with real-time UI feedback (`Copied! ✨`).
* 🎨 **Pastel Glassmorphism Aesthetic:** Translucent frosted card panels (`backdrop-filter: blur()`), floating mesh background blobs, and pulsing live status badges.
* 📦 **Internship Deliverables Grid:** Comprehensive showcase grid covering Tasks 1 through 5 with active highlight indicators.
* 📱 **Fluid Responsiveness:** Mobile-friendly grid layout adapting seamlessly across mobile, tablet, and desktop viewports.

---

## 🎨 Design System & Color Tokens

The visual layout incorporates a strict pastel design palette:

| Color Token Name | Hex Code | Usage / Context |
| :--- | :--- | :--- |
| **Veranda Blue** | `#6BB1AD` | Buttons, clock pill text, task tags |
| **Sky Cloud** | `#A7BCBD` | Background mesh gradient transition |
| **Lychee** | `#EDECDB` | Base card background, brand icon badges |
| **Melon** | `#E5A9A9` | Primary CTA button gradient background |
| **Cupid Pink** | `#E6748E` | Active task card border, highlight badges, primary CTA |

---

## 📁 Project Directory Structure

```text
aura-showcase/
├── index.html        # Main HTML5 document structure & portfolio grid
├── style.css         # Pastel glassmorphism, floating mesh, & grid styles
├── script.js         # Real-time clock timer & clipboard copy handling
└── README.md         # Comprehensive project & deployment documentation
```

---

## 🖼️ Internship Deliverables Summary

| Task # | Deliverable Title | Tech Stack Used | Description |
| :---: | :--- | :--- | :--- |
| **Task 1** | Responsive Landing Page | HTML5, CSS3, Flexbox | Pastel glassmorphic landing page with smooth navigation. |
| **Task 2** | Aura Tasks To-Do App | Vanilla JS, LocalStorage, Modal UI | Task manager featuring dynamic CRUD & interactive calendar modal. |
| **Task 3** | Bookstore REST API | Node.js, Express, REST API | Node.js & Express API serving book CRUD endpoints. |
| **Task 4** | Mobile Media Queries | Media Queries, Responsive | Responsive design transformation with mobile breakpoints. |
| **Task 5** | GitHub Pages Deployment | Git, GitHub Pages, CI/CD | Production deployment of static assets to live public infrastructure. |

---

## 🛠️ Step-by-Step Deployment Instructions

To deploy or update this project on GitHub Pages:

### 1. Local Initialization & Staging
```bash
git init
git add .
git commit -m "Deploy Task 5 Aura Showcase website"
```

### 2. Linking Remote Repository & Pushing
```bash
git branch -M main
git remote add origin [https://github.com/Tethi04/aura-showcase.git](https://github.com/Tethi04/aura-showcase.git)
git push -u origin main
```

### 3. Enabling GitHub Pages
1. Navigate to your GitHub repository: `https://github.com/Tethi04/aura-showcase`.
2. Click **Settings** ➔ **Pages** (under Code and automation).
3. Set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` and folder to `/ (root)`.
5. Click **Save**.

---

## 🔄 Automated Continuous Deployment (CD)

Any future code changes pushed to the `main` branch automatically trigger an updated deployment on GitHub Pages:

```bash
git add .
git commit -m "Update showcase assets"
git push origin main
```

---

<p align="center">
  Designed & Deployed with ❤️ by <strong>Tethi Biswas</strong> — Elevate Labs Web Development Internship
</p>
