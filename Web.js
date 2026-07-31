

:root{

--blue: #2563EB;

--blue-dark: #1D4ED8;

--blue-light: #EFF6FF;

--white: #FFFFFF;

--ink: #0F172A;

--slate: #475569;

--slate-light: #94A3B8;

--border: #E2E8F0;

--radius: 16px;

--max: 1120px;

} *{ box-sizing: border-box; margin:0; padding:0; } html{ scroll-behavior: smooth; } body{ font-family: 'Inter', sans-serif; color: var(--ink); background: var(--white); line-height: 1.6; -webkit-font-smoothing: antialiased; } h1,h2,h3,.logo{ font-family: 'Poppins', sans-serif; } a{ text-decoration:none; color: inherit; } .wrap{ max-width: var(--max); margin: 0 auto; padding: 0 24px; } /* ---------- NAVBAR ---------- */ header{ position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.85); backdrop-filter: saturate(180%) blur(12px); border-bottom: 1px solid var(--border); } .nav{ max-width: var(--max); margin: 0 auto; padding: 18px 24px; display:flex; align-items:center; justify-content:space-between; } .logo{ font-weight: 700; font-size: 1.05rem; color: var(--ink); letter-spacing: -0.02em; }

.logo span{ color: var(--blue); } .nav-links{ display:flex; gap: 32px; list-style:none; } .nav-links a{ font-size: 0.92rem; font-weight: 500; color: var(--slate); transition: color .2s ease; position:relative; }

.nav-links a:hover, .nav-links a:focus-visible{ color: var(--blue); } .nav-cta{ background: var(--blue); color: var(--white) !important; padding: 10px 20px; border-radius: 999px; font-weight: 600; font-size: 0.88rem;

transition: background .2s ease, transform .2s ease;

}

.nav-cta:hover{ background: var(--blue-dark); transform: translateY(-1px); } .burger{ display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:6px; } .burger span{ width:24px; height:2px; background: var(--ink); border-radius:2px; transition: all .25s ease; }

/* ---------- HERO ---------- */ .hero{ padding: 120px 0 100px; position: relative; overflow: hidden; } .hero::before{ content:""; position:absolute; top:-180px; right:-180px; width:520px; height:520px; border-radius:50%; background: radial-gradient(circle at 30% 30%, var(--blue-light), transparent 70%); z-index:0; } .hero-grid{ position:relative; z-index:1; display:grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items:center; } .eyebrow{ display:inline-flex; align-items:center; gap:8px; background: var(--blue-light); color: var(--blue-dark); font-size: 0.8rem; font-weight: 600; padding: 7px 14px; border-radius: 999px; margin-bottom: 22px; } .eyebrow .dot{ width:7px; height:7px; border-radius:50%; background: var(--blue); display:inline-block; box-shadow: 0 0 0 4px rgba(37,99,235,0.15); } .hero h1{

font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; color: var(--ink); } .hero h1 .accent{ color: var(--blue); } .hero-role{ font-size: 1.2rem; color: var(--slate); font-weight: 500; margin-top: 14px; } .hero p.lead{ margin-top: 20px; max-width: 520px; color: var(--slate); font-size: 1.02rem; } .hero-actions{ margin-top: 36px;

display:flex; gap: 14px; flex-wrap: wrap; } .btn{ display:inline-flex; align-items:center; gap:8px; padding: 14px 26px; border-radius: 12px; font-weight: 600; font-size: 0.95rem; transition: all .2s ease; border: 1px solid transparent; cursor:pointer; } .btn-primary{ background: var(--blue); color: var(--white); } .btn-primary:hover{ background: var(--blue-dark); transform: translateY(-2px); box-shadow: 0 12px 24px -8px rgba(37,99,235,0.45); } .btn-ghost{ background: var(--white); color: var(--blue);

border: 1.5px solid var(--border); } .btn-ghost:hover{ border-color: var(--blue); background: var(--blue-light); transform: translateY(-2px); } .hero-meta{ margin-top: 40px; display:flex; gap: 32px; flex-wrap: wrap; }

.hero-meta div{ display:flex; flex-direction:column; }

.hero-meta strong{ font-size: 1.4rem; font-weight:700; color: var(--ink); }

.hero-meta span{ font-size: 0.82rem; color: var(--slate-light); font-weight:500; }

/* Monogram card */ .hero-visual{ position: relative; display:flex; justify-content:center; align-items:center; } .avatar-ring{ width: 300px; height: 300px; border-radius: 50%;

background: linear-gradient(150deg, var(--blue), #60A5FA); display:flex; align-items:center; justify-content:center; position: relative;

box-shadow: 0 30px 60px -20px rgba(37,99,235,0.4); } .avatar-inner{ width: 258px; height: 258px; border-radius: 50%; background: var(--white);

display:flex; align-items:center; justify-content:center; font-family:'Poppins', sans-serif; font-weight:700; font-size: 4rem; color: var(--blue); } .float-card{ position:absolute; background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 12px 16px; font-size: 0.82rem; font-weight: 600;

box-shadow: 0 14px 30px -12px rgba(15,23,42,0.15); display:flex; align-items:center; gap:8px; }

.float-card.top{ top: -6px; left: -20px; color: var(--blue-dark); }

.float-card.bottom{ bottom: 4px; right: -30px; color: var(--ink); }

.float-card .icon-dot{ width:8px; height:8px; border-radius:50%; background: var(--blue); } /* ---------- SECTION SHARED ---------- */ section{ padding: 96px 0; } .section-head{ text-align:center; max-width: 620px; margin: 0 auto 56px; }

.section-head .eyebrow{ margin-bottom: 16px; } .section-head h2{ font-size: clamp(1.7rem, 3vw, 2.3rem); font-weight: 700; letter-spacing: -0.02em; } .section-head p{ color: var(--slate); margin-top: 14px; font-size: 1.02rem; }

.alt-bg{ background: var(--blue-light); }

/* ---------- ABOUT ---------- */ .about-grid{ display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 48px; align-items:center; } .about-card{ background: var(--white); border: 1px solid var(--border); border-radius: var(--radius); padding: 36px; box-shadow: 0 20px 40px -24px rgba(15,23,42,0.12); }

.about-card h3{ font-size:1.3rem; margin-bottom: 14px; }

.about-card p{ color: var(--slate); } .info-list{ list-style:none; margin-top: 24px; display:flex; flex-direction:column; gap:14px; } .info-list li{ display:flex; gap:12px; align-items:flex-start; font-size:0.95rem; color: var(--slate); } .info-list strong{ color: var(--ink); min-width: 90px; display:inline-block; }

.about-badges{ display:flex; flex-direction:column; gap:20px; } .badge-card{ background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 22px 24px; display:flex; gap:16px; align-items:flex-start;

transition: transform .2s ease, box-shadow .2s ease; } .badge-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 30px -18px rgba(37,99,235,0.3); } .badge-icon{

width:44px; height:44px; border-radius:12px; background: var(--blue-light); color: var(--blue-dark);

display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0; }

.badge-card h4{ font-size:0.98rem; margin-bottom:4px; }

.badge-card p{ font-size:0.86rem; color: var(--slate); } /* ---------- SKILLS ---------- */ .skills-cols{ display:grid; grid-template-columns: 1fr 1fr; gap: 40px; } .skills-col h3{ font-size: 1rem; color: var(--blue-dark); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 20px;

}

.tag-cloud{ display:flex; flex-wrap:wrap; gap:10px; } .tag{ background: var(--white); border: 1.5px solid var(--border); padding: 9px 16px; border-radius: 10px; font-size: 0.88rem; font-weight: 500; color: var(--ink); transition: all .2s ease; } .tag:hover{ border-color: var(--blue); background: var(--blue-light); color: var(--blue-dark); } .bar-list{ display:flex; flex-direction:column; gap:18px; } .bar-item span{ font-size:0.88rem; font-weight:500; display:flex; justify-content:space-between; margin-bottom:6px; } .bar-track{ height:8px; background: var(--white); border-radius:99px; overflow:hidden; border: 1px solid var(--border); } .bar-fill{ height:100%; background: linear-gradient(90deg, var(--blue), #60A5FA); border-radius:99px; } /* ---------- EDUCATION ---------- */ .timeline{ max-width: 720px; margin: 0 auto; position: relative; padding-left: 32px; } .timeline::before{ content:""; position:absolute; left: 7px; top: 6px; bottom: 6px; width: 2px;

background: var(--border); } .timeline-item{ position:relative; padding-bottom: 40px; }

.timeline-item:last-child{ padding-bottom:0; } .timeline-item::before{ content:""; position:absolute; left: -32px; top: 4px; width: 16px; height:16px; border-radius:50%; background: var(--white); border: 3px solid var(--blue); } .timeline-card{ background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 24px 28px; box-shadow: 0 16px 32px -22px rgba(15,23,42,0.15); } .timeline-card .date{ display:inline-block; background: var(--blue-light); color: var(--blue-dark); font-size:0.78rem; font-weight:700; padding:4px 12px; border-radius:999px; margin-bottom:10px; }

.timeline-card h3{ font-size:1.1rem; } .timeline-card .org{ color: var(--blue); font-weight:600; font-size:0.92rem; margin-top:2px; } .timeline-card p{ color: var(--slate); margin-top:8px; font-size:0.92rem; } /* ---------- PROJECTS ---------- */ .project-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

.project-card{

background: var(--white); border: 1px solid var(--border); border-radius: var(--radius); overflow:hidden; transition: transform .25s ease, box-shadow .25s ease; display:flex; flex-direction:column; } .project-card:hover{ transform: translateY(-6px); box-shadow: 0 24px 44px -20px rgba(37,99,235,0.28); } .project-thumb{ height: 150px; background: linear-gradient(135deg, var(--blue-light), #DBEAFE); display:flex; align-items:center; justify-content:center; font-size: 2.2rem; }

.project-body{ padding: 24px; flex:1; display:flex; flex-direction:column; }

.project-body h3{ font-size:1.05rem; margin-bottom:8px; }

.project-body p{ color: var(--slate); font-size:0.9rem; flex:1; }

.project-tags{ display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; } .project-tags span{ font-size:0.72rem; font-weight:600; background: var(--blue-light); color: var(--blue-dark); padding:4px 10px; border-radius:999px; } .project-note{ text-align:center; margin-top: 32px; font-size: 0.85rem; color: var(--slate-light); }

/* ---------- CONTACT ---------- */ .contact-grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items:start; }

.contact-cards{ display:flex; flex-direction:column; gap:16px; } .contact-card{ display:flex; align-items:center; gap:16px; background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 20px 22px; transition: transform .2s ease, box-shadow .2s ease; } .contact-card:hover{ transform: translateY(-3px); box-shadow: 0 14px 28px -18px rgba(37,99,235,0.3); } .contact-icon{ width:46px; height:46px; border-radius:12px; background: var(--blue-light); color: var(--blue-dark); display:flex; align-items:center; justify-content:center; font-size: 1.2rem; flex-shrink:0; }

.contact-card strong{ display:block; font-size:0.95rem; }

.contact-card span{ color: var(--slate); font-size:0.86rem; } .contact-form{ background: var(--blue-light); border-radius: var(--radius); padding: 32px;

display:flex; flex-direction:column; gap:16px; } .contact-form label{ font-size:0.85rem; font-weight:600; margin-bottom:6px; display:block; } .contact-form input, .contact-form textarea{ width:100%; padding: 12px 14px; border-radius: 10px; border: 1px solid var(--border); font-family:'Inter', sans-serif; font-size:0.9rem; background: var(--white); resize: vertical; } .contact-form input:focus, .contact-form textarea:focus{ outline: none;

border-color: var(--blue);

box-shadow: 0 0 0 3px rgba(37,99,235,0.15); } .contact-form button{ align-self:flex-start; border:none; } .form-status{ font-size:0.85rem; color: var(--blue-dark); font-weight:500; min-height:1.2em; } /* ---------- FOOTER ---------- */ footer{ background: var(--ink); color: #CBD5E1; padding: 40px 0; text-align:center; font-size: 0.85rem; } footer a{ color: #93C5FD; } .back-top{ position: fixed; right: 24px; bottom: 24px; width:46px; height:46px; border-radius:50%; background: var(--blue); color: var(--white); display:flex; align-items:center; justify-content:center; font-size: 1.1rem;

box-shadow: 0 12px 24px -8px rgba(37,99,235,0.5); opacity:0; pointer-events:none; transition: opacity .25s ease, transform .2s ease; z-index: 90; border:none; cursor:pointer; }

.back-top.show{ opacity:1; pointer-events:auto; }

.back-top:hover{ transform: translateY(-3px); } .reveal{ opacity:0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }

.reveal.in{ opacity:1; transform: translateY(0); }

/* ---------- RESPONSIVE ---------- */

@media (max-width: 900px){

.hero-grid{ grid-template-columns: 1fr; }

.hero-visual{ order:-1; margin-bottom: 20px; }

.about-grid{ grid-template-columns: 1fr; }

.skills-cols{ grid-template-columns: 1fr; }

.project-grid{ grid-template-columns: 1fr 1fr; } .contact-grid{ grid-template-columns: 1fr; }

}

@media (max-width: 640px){ .nav-links{ position:absolute; top: 100%; left:0; right:0; background: var(--white); flex-direction:column; padding: 20px 24px; gap: 18px;

border-bottom: 1px solid var(--border); display:none; }

.nav-links.open{ display:flex; }

.nav-cta{ display:none; }

.burger{ display:flex; }

.hero{ padding: 90px 0 60px; }

.avatar-ring{ width:220px; height:220px; } .avatar-inner{ width:186px; height:186px; font-size:2.8rem; }

.float-card{ display:none; }

.project-grid{ grid-template-columns: 1fr; } .hero-meta{ gap:24px; }

}

@media (prefers-reduced-motion: reduce){

*{ transition: none !important; scroll-behavior: auto !important; }

  }
