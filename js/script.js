/* =========================================================
   Timothy Tapado - Portfolio scripts
   Feature 1: Skill filter   (event: click on a filter button)
   Feature 2: Dark mode      (event: click on the theme button)
   ========================================================= */

/* ---------- Feature 1: Skill filter ----------
   Event:   "click" on a button inside .filter-bar
   Result:  skill cards fade out, cards outside the chosen group are hidden,
            the matching cards fade back in, and the status text updates.   */

const filterButtons = document.querySelectorAll('.filter-btn');
const skills = document.querySelectorAll('.skill');
const skillStatus = document.getElementById('skillStatus');
const FADE_TIME = 200; // must match the transition time in css/style.css

function filterSkills(category) {
  // 1. Start the fade-out animation on every card
  skills.forEach(function (skill) {
    skill.classList.add('is-fading');
  });

  // 2. When the fade-out ends, hide or show each card, then fade back in
  setTimeout(function () {
    let shown = 0;

    skills.forEach(function (skill) {
      const matches = category === 'all' || skill.dataset.category === category;
      skill.hidden = !matches;
      if (matches) {
        shown++;
      }
    });

    // Wait one frame so the browser applies "hidden" before fading in
    requestAnimationFrame(function () {
      skills.forEach(function (skill) {
        skill.classList.remove('is-fading');
      });
    });

    // 3. Update the status text (screen readers announce it too)
    skillStatus.textContent = category === 'all'
      ? 'Showing all ' + shown + ' skills'
      : 'Showing ' + shown + ' of ' + skills.length + ' skills';
  }, FADE_TIME);
}

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Mark only the clicked button as pressed
    filterButtons.forEach(function (other) {
      other.setAttribute('aria-pressed', 'false');
    });
    button.setAttribute('aria-pressed', 'true');

    filterSkills(button.dataset.filter);
  });
});

/* ---------- Feature 2: Dark mode ----------
   Event:   "click" on #themeToggle
   Result:  the page colors change with a short transition, and the choice
            is remembered for the next visit.                               */

const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

// Load the saved choice (try/catch because storage can be blocked)
let savedTheme = null;
try {
  savedTheme = localStorage.getItem('theme');
} catch (error) {
  savedTheme = null;
}
if (savedTheme === 'dark' || savedTheme === 'light') {
  setTheme(savedTheme);
}

themeToggle.addEventListener('click', function () {
  const current = document.documentElement.getAttribute('data-bs-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (error) {
    // The theme still changes; it just will not be remembered
  }
});

/* ---------- Small helpers ---------- */

// Close the mobile menu after choosing a link
document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const menu = document.getElementById('mainNav');
    if (menu.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
