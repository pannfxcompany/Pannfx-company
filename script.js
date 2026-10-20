const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name') || '').trim();
  const contact = String(data.get('contact') || '').trim();
  const topic = String(data.get('topic') || 'Informasi umum');
  const message = `Halo PANNFX, saya ${name}. Keperluan: ${topic}. Kontak saya: ${contact}.`;
  const output = document.getElementById('form-message');
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(message).then(() => output.textContent = 'Pesan disalin. Formulir ini masih berupa demo dan belum mengirim data ke server.').catch(() => output.textContent = message);
  } else {
    output.textContent = message + ' — Formulir ini masih berupa demo dan belum mengirim data ke server.';
  }
});
