const acc = document.getElementById('acc-js');
acc.addEventListener('click', e => {
  const btn = e.target.closest('.acc-btn');
  if (!btn) return;
  const item = btn.parentElement, open = !item.classList.contains('open');
  acc.querySelectorAll('.acc-item').forEach(i => {
    i.classList.remove('open');
    i.firstElementChild.setAttribute('aria-expanded', false);
  });
  item.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
});

const tabs = document.getElementById('tabs-js');
tabs.addEventListener('click', e => {
  const tab = e.target.closest('[role=tab]');
  if (!tab) return;
  tabs.querySelectorAll('[role=tab]').forEach(t => {
    t.classList.toggle('on', t === tab);
    t.setAttribute('aria-selected', t === tab);
  });
  tabs.querySelectorAll('[role=tabpanel]').forEach(p =>
    p.classList.toggle('on', p.id === tab.getAttribute('aria-controls')));
});
