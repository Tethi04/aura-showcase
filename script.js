document.addEventListener('DOMContentLoaded', () => {

  // 1. Live Clock Timer
  const timePill = document.getElementById('live-time');
  function updateTime() {
    if (!timePill) return;
    const now = new Date();
    timePill.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  setInterval(updateTime, 1000);
  updateTime();

  // 2. Copy Live URL Helper
  const copyBtn = document.getElementById('copy-btn');
  const siteUrlInput = document.getElementById('site-url');

  if (copyBtn && siteUrlInput) {
    copyBtn.addEventListener('click', () => {
      siteUrlInput.select();
      navigator.clipboard.writeText(siteUrlInput.value).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✨';
        copyBtn.style.background = '#4caf50';

        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = '';
        }, 2000);
      });
    });
  }

  // 3. Task Details Data Object
  const taskDetails = {
    1: {
      tag: "Task 1",
      title: "Responsive Landing Page",
      desc: "A beautifully crafted pastel glassmorphic landing page designed for Elevate Labs Task 1. Features smooth scrolling navigation, structured service cards, hero CTA, and adaptive layout structure.",
      tech: ["HTML5", "CSS3", "Flexbox", "Glassmorphism"],
      repo: "https://github.com/Tethi04/elevate-web-development-task-1",
      live: "tethi04.github.io/elevate-web-development-task-1/"
    },
    2: {
      tag: "Task 2",
      title: "Aura Tasks To-Do App",
      desc: "A feature-rich productivity workspace built with Vanilla JS. Includes real-time progress analytics, local persistence (localStorage), search/filter tools, confetti celebrations, and a dynamic modal calendar for task scheduling.",
      tech: ["Vanilla JS", "LocalStorage", "CSS Grid", "Modal UI"],
      repo: "https://github.com/Tethi04/elevate-web-development-task-2",
      live: "tethi04.github.io/elevate-web-development-task-2/"
    },
    3: {
      tag: "Task 3",
      title: "Bookstore REST API",
      desc: "A backend server built using Node.js and Express.js implementing complete CRUD operations (GET, POST, PUT, DELETE) for book management with input validation, CORS support, and error handling middleware.",
      tech: ["Node.js", "Express.js", "REST API", "JSON"],
      repo: "https://github.com/Tethi04/bookstore-rest-api"
    },
    4: {
      tag: "Task 4",
      title: "Mobile Media Queries",
      desc: "A mobile-first responsive website transformation utilizing CSS media queries, fluid typography, flexible column stacking, and an interactive hamburger drawer menu for mobile screens.",
      tech: ["CSS Media Queries", "Mobile First", "Flexbox", "Responsive"],
      repo: "https://github.com/Tethi04/mobile-friendly-glassmorphic-site",
      live: "tethi04.github.io/mobile-friendly-glassmorphic-site/"
    },
    5: {
      tag: "Task 5",
      title: "GitHub Pages Deployment",
      desc: "Production deployment portal hosting static internship assets on GitHub infrastructure. Features automated continuous deployment (CD), HTTPS encryption, real-time live clock, and dynamic URL sharing.",
      tech: ["Git", "GitHub Pages", "CI/CD", "Static Hosting"],
      repo: "https://github.com/Tethi04/aura-showcase",
      live: "tethi04.github.io/aura-showcase/"
    }
  };

  // 4. Modal Element Selections
  const taskModal = document.getElementById('task-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalTech = document.getElementById('modal-tech');
  const modalRepoLink = document.getElementById('modal-repo-link');
  const modalLiveLink = document.getElementById('modal-live-link');

  // Open Modal Function
  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
      const taskId = card.dataset.task;
      const data = taskDetails[taskId];

      if (!data) return;

      modalTag.textContent = data.tag;
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;

      // Populate Tech Stack
      modalTech.innerHTML = '';
      data.tech.forEach(t => {
        const badge = document.createElement('span');
        badge.textContent = t;
        modalTech.appendChild(badge);
      });

      // Set Links
      modalRepoLink.href = data.repo;
      modalLiveLink.href = data.live;

      // Show Modal
      taskModal.classList.remove('hidden');
    });
  });

  // Close Modal Functionality
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (taskModal) {
    taskModal.addEventListener('click', (e) => {
      if (e.target === taskModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && taskModal && !taskModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function closeModal() {
    taskModal.classList.add('hidden');
  }

});
