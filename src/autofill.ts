// autofill.js
(function() {
  const fields = [
    { id: 'input-age', value: '22' },
    { id: 'input-gender', value: 'Male' },
    { id: 'input-website', value: 'https://maxarnold.dev' },
    { id: 'input-github', value: 'https://github.com/maxarnold' },
    { id: 'input-twitter', value: 'https://x.com/maxarnold' },
    { id: 'input-fhack', value: 'I once optimized a university process by creating a student-run scheduling system, saving hundreds of hours for my peers.' },
    { id: 'input-test-scores', value: 'SAT: 1550/1600, TOEFL: 117/120, Abitur: 1.0' },
    { id: 'input-fability', value: 'Built an AI procurement assistant at Porsche AG, scaled to 700+ users and received a full-time offer.' },
    { id: 'input-projects', value: 'sterna.studio (SaaS for wind energy), AR market research for Deutsche Telekom, RAG system for Intel, open source at github.com/maxarnold' },
    { id: 'input-awards', value: 'Deutsche Telekom XR-Challenge Winner (€50k), Samsung Solve for Tomorrow Finalist, Intel AI Challenge Winner' },
    { id: 'input-clubs', value: 'MotionLab.Berlin IoT Scholar, CODE Entrepreneurship Club' },
    { id: 'input-summer-plans', value: 'Working at Porsche AG in Stuttgart, Germany' }
  ];
  // Autofill input and textarea fields
  fields.forEach(({id, value}) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.value = localStorage.getItem(id) || value;
      el.addEventListener('input', () => {
        localStorage.setItem(id, el.value);
      });
    }
  });
  // Autofill name and email spans
  const name = 'Max Arnold';
  const email = 'maximilian.arnold@code.berlin';
  const nameEl = document.getElementById('autofill-name');
  if (nameEl) nameEl.textContent = name;
  const emailEl = document.getElementById('autofill-email');
  if (emailEl) emailEl.textContent = email;
})();
