'use client';

import { FormEvent, useEffect, useState } from 'react';

const projects = [
  { no: '01', type: 'Web App', title: 'Ruang Temu', desc: 'Platform reservasi ruang kerja yang membuat proses mencari dan memesan tempat jadi lebih ringkas.', stack: ['Next.js', 'TypeScript', 'Supabase'], color: 'blue', mark: 'RT' },
  { no: '02', type: 'Mobile', title: 'Saku Sehat', desc: 'Aplikasi pencatat kebiasaan harian dengan pengalaman sederhana, hangat, dan tidak menggurui.', stack: ['Flutter', 'Firebase', 'Figma'], color: 'orange', mark: 'SS' },
  { no: '03', type: 'Website', title: 'Arunika Studio', desc: 'Website profil studio arsitektur yang mengutamakan karya, ritme visual, dan detail tipografi.', stack: ['React', 'CSS', 'Framer'], color: 'lime', mark: 'AS' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <main>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <button className="brand" onClick={() => goTo('home')} aria-label="Ke halaman awal"><span>SNA.</span></button>
        <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Navigasi utama">
          {['about', 'skills', 'projects'].map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
          <button className="nav-contact" onClick={() => goTo('contact')}>Let&apos;s talk <span>↗</span></button>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Buka menu"><span /><span /></button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow"><i /> Halo, saya Septian</p>
          <h1>Membuat hal digital<br />yang <em>berguna</em> dan<br /><span>enak dipakai.</span></h1>
          <p className="hero-desc">Mahasiswa Informatika dan developer yang suka mengubah ide rumit menjadi pengalaman digital yang sederhana.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => goTo('projects')}>Lihat karya <span>↓</span></button>
            <button className="text-link" onClick={() => goTo('contact')}>Hubungi saya <span>↗</span></button>
          </div>
        </div>
        <div className="portrait-wrap reveal delay">
          <div className="scribble">based in<br /><b>Malang, ID</b></div>
          <div className="portrait" role="img" aria-label="Placeholder foto profil Septian">
            <div className="portrait-bg" /><div className="portrait-head" /><div className="portrait-body" /><span>FOTO<br />KAMU</span>
          </div>
          <span className="sticker">OPEN TO<br /><b>WORK</b></span>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="about section" id="about">
        <div className="section-tag">01 / TENTANG SAYA</div>
        <div className="about-grid">
          <h2>Saya percaya produk yang baik dimulai dari <em>rasa ingin tahu.</em></h2>
          <div className="about-copy">
            <p>Saya seorang mahasiswa Informatika yang menikmati proses membangun produk dari nol—mulai dari memahami masalah, merancang alur, sampai menulis kode yang rapi.</p>
            <p>Di luar layar, saya suka mencari perspektif baru lewat musik, fotografi jalanan, dan obrolan panjang ditemani kopi.</p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Lebih kenal dengan saya <span>→</span></a>
          </div>
        </div>
        <div className="stats">
          <div><b>02+</b><span>Tahun belajar &<br />membangun</span></div><div><b>08</b><span>Project selesai<br />dan terus bertambah</span></div><div><b>100%</b><span>Rasa penasaran<br />di setiap project</span></div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-tag light">02 / KEMAMPUAN</div>
        <div className="skills-head"><h2>Yang bisa saya<br /><em>bawa ke meja.</em></h2><p>Saya menggabungkan logika teknis dan kepekaan visual untuk membuat produk yang bekerja dengan baik—dan terasa tepat.</p></div>
        <div className="skill-list">
          <article><span>01</span><h3>Frontend Development</h3><p>HTML, CSS, JavaScript, React, Next.js</p><i>↗</i></article>
          <article><span>02</span><h3>Backend Development</h3><p>PHP, Laravel, Node.js, MySQL, REST API</p><i>↗</i></article>
          <article><span>03</span><h3>UI & Product Design</h3><p>Figma, Wireframing, Prototyping, Design System</p><i>↗</i></article>
          <article><span>04</span><h3>Tools & Workflow</h3><p>Git, GitHub, Docker, Postman, Linux</p><i>↗</i></article>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-tag">03 / PROJECT PILIHAN</div>
        <div className="project-heading"><h2>Beberapa hal yang<br />pernah saya <em>buat.</em></h2><p>Project kuliah, eksperimen, dan kolaborasi yang membantu saya tumbuh sebagai developer.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual ${project.color}`}><span className="project-no">{project.no}</span><div className="mock-window"><div className="mock-bar"><i /><i /><i /></div><b>{project.mark}</b><div className="mock-lines"><i /><i /><i /></div></div></div>
              <div className="project-info"><span>{project.type}</span><h3>{project.title}</h3><p>{project.desc}</p><div className="chips">{project.stack.map((item) => <i key={item}>{item}</i>)}</div><button aria-label={`Lihat project ${project.title}`}>Lihat project <span>↗</span></button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro"><div className="section-tag light">04 / KONTAK</div><h2>Punya ide?<br /><em>Mari kita<br />bicarakan.</em></h2><p>Saya selalu terbuka untuk project baru, kesempatan kolaborasi, atau sekadar bertukar cerita.</p><a href="mailto:halo@septian.dev">halo@septian.dev <span>↗</span></a></div>
        <form onSubmit={submit}><label>Nama<input name="name" placeholder="Nama kamu" required /></label><label>Email<input name="email" type="email" placeholder="email@kamu.com" required /></label><label>Ceritakan idemu<textarea name="message" placeholder="Sedikit tentang project atau hal yang ingin kamu obrolkan..." required /></label><button className="btn btn-send" type="submit">Kirim pesan <span>↗</span></button><p className={`form-note ${sent ? 'visible' : ''}`} role="status">Pesan tersimpan—terima kasih! Saya akan segera menghubungi kamu.</p></form>
      </section>

      <footer><button className="brand footer-brand" onClick={() => goTo('home')}>SNA.</button><p>Dirancang & dibangun dengan niat baik.<br />© 2026 Septian.</p><div><a href="#">LinkedIn ↗</a><a href="#">GitHub ↗</a><a href="#">Instagram ↗</a></div></footer>
    </main>
  );
}
