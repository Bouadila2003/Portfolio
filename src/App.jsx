import { useEffect, useState } from 'react'
import { profile, projects, skillGroups, translations } from './data.js'

function useReveal(lang) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [lang])
}

function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let delay = deleting ? 45 : 90
    if (!deleting && text === word) delay = 1600
    if (deleting && text === '') delay = 300
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI((n) => n + 1)
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return (
    <span className="typewriter">
      {text}
      <span className="caret" />
    </span>
  )
}

function Nav({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about', 'skills', 'journey', 'projects', 'contact']
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">WB</span>
          <span className="logo-text">wafae.dev</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
              {t.nav[l]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="lang" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label="Switch language">
            <span className={lang === 'fr' ? 'on' : ''}>FR</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-head">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="code-file">routes/api.php</span>
      </div>
      <pre>
        <code>
          <span className="c">// Laravel — back-end</span>
          {'\n'}
          <span className="k">Route</span>::<span className="f">get</span>(<span className="s">'/projects'</span>, {'fn () =>'}
          {'\n  '}
          <span className="k">Project</span>::<span className="f">with</span>(<span className="s">'stack'</span>)-&gt;<span className="f">latest</span>()-&gt;<span className="f">get</span>()
          {'\n'});
          {'\n\n'}
          <span className="c">// React — front-end</span>
          {'\n'}
          <span className="k">const</span> projects = <span className="f">useFetch</span>(<span className="s">'/api/projects'</span>);
          {'\n'}
          <span className="k">return</span> &lt;<span className="t">Grid</span> items={'{'}projects{'}'} /&gt;;
        </code>
      </pre>
    </div>
  )
}

function Hero({ t, lang }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill reveal">
            <span className="pulse" /> {t.hero.available}
          </p>
          <h1 className="reveal">
            <span className="hello">{t.hero.hello}</span>
            <span className="name gradient-text">Wafae Bouadila</span>
          </h1>
          <h2 className="role reveal">
            <Typewriter words={t.hero.roles} />
          </h2>
          <p className="pitch reveal">{t.hero.pitch}</p>
          <div className="cta reveal">
            <a href="#projects" className="btn primary">
              {t.hero.ctaProjects} <span aria-hidden>→</span>
            </a>
            <a href={profile.cv[lang]} className="btn ghost" download>
              {t.hero.ctaCv} <span aria-hidden>↓</span>
            </a>
          </div>
          <div className="socials reveal">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
            <a href={profile.phoneHref} aria-label="Phone">
              <PhoneIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
            <img src="/avatar.webp" alt="Wafae Bouadila" className="avatar" />
            <span className="chip chip-laravel">Laravel</span>
            <span className="chip chip-react">React</span>
            <span className="chip chip-sql">MySQL</span>
          </div>
          <CodeCard />
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll">
        <span />
      </a>
    </section>
  )
}

function SectionHead({ kicker, title }) {
  return (
    <div className="section-head reveal">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  )
}

function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead kicker={t.about.kicker} title={t.about.title} />
        <div className="about-grid">
          <div className="about-photos reveal">
            <figure className="about-photo main">
              <img src="/gitex.webp" alt="Wafae Bouadila at GITEX Africa" loading="lazy" />
              <figcaption>📍 {t.about.caption}</figcaption>
            </figure>
            <figure className="about-photo second">
              <img src="/um6p.webp" alt="Wafae Bouadila at UM6P" loading="lazy" />
              <figcaption>🎓 {t.about.caption2}</figcaption>
            </figure>
          </div>
          <div className="about-body">
            <p className="reveal">{t.about.p1}</p>
            <p className="reveal">{t.about.p2}</p>
            <div className="stats reveal">
              {t.about.stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong className="gradient-text">{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="about-cols">
              <div className="card reveal">
                <h3>{t.about.langsTitle}</h3>
                {t.about.langs.map((l) => (
                  <div key={l.name} className="lang-row">
                    <div className="lang-top">
                      <span>{l.name}</span>
                      <span className="muted">{l.level}</span>
                    </div>
                    <div className="bar">
                      <span style={{ '--w': `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="card reveal">
                <h3>{t.about.softTitle}</h3>
                <div className="tags">
                  {t.about.soft.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills({ t }) {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <SectionHead kicker={t.skills.kicker} title={t.skills.title} />
        <div className="skills-grid">
          {skillGroups.map((g, idx) => (
            <div key={g.key} className="card skill-card reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
              <div className="skill-icon">{g.icon}</div>
              <h3>{t.skills.groups[g.key]}</h3>
              <div className="tags">
                {g.items.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...Array(2)].map((_, k) => (
              <span key={k}>
                Laravel ✦ React ✦ PHP ✦ JavaScript ✦ MySQL ✦ REST API ✦ Blade ✦ Bootstrap ✦ Git ✦ UML ✦ Java ✦ PL/SQL ✦&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey({ t }) {
  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHead kicker={t.journey.kicker} title={t.journey.title} />
        <ol className="timeline">
          {t.journey.items.map((it) => (
            <li key={it.title} className={`tl-item reveal ${it.type}`}>
              <span className="tl-dot">{it.type === 'work' ? '💼' : '🎓'}</span>
              <div className="card tl-card">
                <span className="tl-period">{it.period}</span>
                <h3>{it.title}</h3>
                <p className="tl-org">{it.org}</p>
                {it.desc && <p className="muted">{it.desc}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects({ t }) {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <SectionHead kicker={t.projects.kicker} title={t.projects.title} />
        <div className="projects-grid">
          {projects.map((p, idx) => {
            const c = t.projects.items[p.key]
            return (
              <article
                key={p.key}
                className="card project reveal"
                style={{ '--accent': p.accent, transitionDelay: `${idx * 80}ms` }}
              >
                <div className="project-top">
                  <span className="project-emoji">{p.emoji}</span>
                  <span className="badge">{c.badge}</span>
                </div>
                <h3>{c.title}</h3>
                <p className="muted">{c.desc}</p>
                <div className="tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag small">
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="project-link" href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon /> {t.projects.code}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card reveal">
          <p className="kicker">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p className="muted contact-text">{t.contact.text}</p>
          <div className="cta center">
            <a href={`mailto:${profile.email}`} className="btn primary">
              <MailIcon /> {t.contact.email}
            </a>
            <button className="btn ghost" onClick={copy}>
              {copied ? t.contact.copied : `${t.contact.copy} ${profile.email}`}
            </button>
          </div>
          <div className="contact-list">
            <a href={profile.phoneHref}>
              <PhoneIcon /> {profile.phone}
            </a>
            <span>
              <PinIcon /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon /> Bouadila2003
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'fr'
    } catch {
      return 'fr'
    }
  })
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  useReveal(lang)

  return (
    <>
      <div className="bg-glow" aria-hidden>
        <span className="g1" />
        <span className="g2" />
        <span className="grid" />
      </div>
      <Nav t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} lang={lang} />
        <About t={t} />
        <Skills t={t} />
        <Journey t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} · {t.footer}
          </span>
          <span className="muted mono">Laravel ♥ React</span>
        </div>
      </footer>
    </>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
