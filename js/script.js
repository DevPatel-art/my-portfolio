(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){ root.setAttribute('data-theme', saved); }
  const toggle = document.getElementById('theme-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if(hamburger && nav){
    hamburger.addEventListener('click', () => {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      hamburger.setAttribute('aria-expanded', (!open).toString());
    });
  }

  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#project-grid .card');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.filter;
    cards.forEach(card => {
      const show = type === 'all' || card.dataset.type === type;
      card.style.display = show ? 'flex' : 'none';
    });
  }));

  function setupResume(id){
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('click', function(e){
      console.log('Resume download clicked');
      this.setAttribute('download', '');
    });
  }
  setupResume('resume-link');
  setupResume('resume-link-hero');
})();
