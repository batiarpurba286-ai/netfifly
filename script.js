const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

/*
Untuk menambahkan file yang kamu punya izin distribusikan:
1. Taruh ZIP di folder downloads/
2. Ubah kartu di index.html agar tautan mengarah ke downloads/nama-file.zip
3. Contoh:
   <a class="download-btn" href="downloads/skin-pack.zip" download>
     Download ZIP <span>↗</span>
   </a>
Jangan menautkan file yang tidak kamu miliki hak untuk membagikannya.
*/
