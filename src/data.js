export const profile = {
  name: 'Wafae Bouadila',
  email: 'wafaeboadila.of@gmail.com',
  phone: '+212 6 17 03 33 68',
  phoneHref: 'tel:+212617033368',
  location: 'Agadir, Maroc',
  github: 'https://github.com/Bouadila2003',
  cv: '/CV-Wafae-Bouadila.pdf',
}

export const skillGroups = [
  {
    key: 'backend',
    icon: '⚙️',
    items: ['Laravel', 'PHP 8', 'PDO', 'REST API', 'Eloquent ORM', 'Blade', 'Java', 'C'],
  },
  {
    key: 'frontend',
    icon: '⚛️',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    key: 'data',
    icon: '🗄️',
    items: ['MySQL', 'SQL', 'PL/SQL', 'UML', 'StarUML', 'Merise'],
  },
  {
    key: 'tools',
    icon: '🧰',
    items: ['Git & GitHub', 'VS Code', 'XAMPP', 'Composer', 'npm', 'Word / Excel'],
  },
]

export const projects = [
  {
    key: 'devcreativ',
    tags: ['Laravel', 'Blade', 'MySQL', 'MVC'],
    accent: '#ff4d3d',
    emoji: '🏢',
  },
  {
    key: 'ecommerce',
    tags: ['Bootstrap', 'JavaScript', 'Responsive'],
    accent: '#a78bfa',
    emoji: '🛒',
  },
  {
    key: 'rdv',
    tags: ['PHP', 'PDO', 'MySQL', 'Sessions'],
    accent: '#34d399',
    emoji: '🩺',
  },
  {
    key: 'portfolio',
    tags: ['React', 'Vite', 'CSS', 'Vercel'],
    accent: '#4fd8ff',
    emoji: '✨',
  },
]

const fr = {
  nav: { about: 'À propos', skills: 'Compétences', journey: 'Parcours', projects: 'Projets', contact: 'Contact' },
  hero: {
    hello: 'Bonjour, je suis',
    roles: ['Développeuse Full-Stack', 'Laravel Developer', 'React Developer', 'Passionnée d’IA'],
    pitch:
      'Diplômée en Systèmes Informatiques Répartis, je conçois des applications web complètes — du back-end Laravel robuste aux interfaces React modernes et réactives.',
    ctaProjects: 'Voir mes projets',
    ctaCv: 'Télécharger mon CV',
    available: 'Disponible pour un premier emploi',
  },
  about: {
    kicker: 'À propos',
    title: 'Du code propre, des systèmes solides.',
    p1:
      'Passionnée par le développement web, les réseaux et l’architecture des systèmes distribués, j’aime transformer une idée en une application fonctionnelle, sécurisée et agréable à utiliser.',
    p2:
      'Rigoureuse, autonome et motivée, je recherche un premier emploi où mettre mes compétences techniques et humaines au service de projets innovants — avec une curiosité particulière pour l’intelligence artificielle.',
    caption: 'GITEX Africa — Maroc',
    caption2: 'UM6P — Ben Guerir',
    stats: [
      { value: '4+', label: 'Projets web réalisés' },
      { value: '3', label: 'Mois de stage en entreprise' },
      { value: '3', label: 'Langues parlées' },
    ],
    langsTitle: 'Langues',
    langs: [
      { name: 'Arabe', level: 'Maternelle', pct: 100 },
      { name: 'Français', level: 'Intermédiaire', pct: 70 },
      { name: 'Anglais', level: 'Technique', pct: 60 },
    ],
    softTitle: 'Qualités',
    soft: ['Autonomie & initiative', 'Résolution de problèmes', 'Gestion d’équipe', 'Animation de spectacles', 'Lecture', 'Innovation en IA'],
  },
  skills: {
    kicker: 'Stack technique',
    title: 'Les outils avec lesquels je construis.',
    groups: { backend: 'Back-end', frontend: 'Front-end', data: 'Données & Modélisation', tools: 'Outils' },
  },
  journey: {
    kicker: 'Parcours',
    title: 'Expérience & Formation',
    items: [
      {
        type: 'work',
        period: 'Avr. 2025 — Juin 2025',
        title: 'Stagiaire Développeuse Web',
        org: 'OnestEcom · Marrakech',
        desc: 'Réalisation d’une application web complète pour une agence (DevCreativ) avec Laravel côté back-end et Blade côté front-end.',
      },
      {
        type: 'edu',
        period: '2024 — 2025',
        title: 'Licence en Systèmes Informatiques Répartis',
        org: 'Faculté des Sciences et Techniques (FST)',
        desc: 'Systèmes distribués, réseaux, développement web et bases de données.',
      },
      {
        type: 'edu',
        period: '2021 — 2024',
        title: 'DEUST — Filière MIPC',
        org: 'Faculté des Sciences et Techniques',
        desc: 'Formation en Mathématiques, Informatique, Physique et Chimie.',
      },
      {
        type: 'edu',
        period: '2020 — 2021',
        title: 'Baccalauréat Sciences Physiques',
        org: 'Lycée Hassan El Khayat · Agadir',
        desc: '',
      },
    ],
  },
  projects: {
    kicker: 'Projets',
    title: 'Une sélection de mon travail.',
    items: {
      devcreativ: {
        title: 'DevCreativ — Site d’agence',
        desc: 'Application web complète pour une agence digitale : pages vitrines, gestion des services et back-office, construite avec Laravel (MVC, Eloquent) et Blade.',
        badge: 'Stage OnestEcom',
      },
      ecommerce: {
        title: 'Boutique E-commerce responsive',
        desc: 'Site e-commerce responsive intégrant la gestion des produits et du panier, avec une interface utilisateur optimisée pour mobile et desktop.',
        badge: 'Front-end',
      },
      rdv: {
        title: 'Gestion de rendez-vous médicaux',
        desc: 'Application PHP/PDO pour la prise de rendez-vous en ligne, avec interface intuitive et gestion sécurisée des sessions utilisateurs.',
        badge: 'Full-stack PHP',
      },
      portfolio: {
        title: 'Portfolio personnel',
        desc: 'Ce portfolio : application React bilingue, animée et responsive, déployée en continu sur Vercel.',
        badge: 'React',
      },
    },
    code: 'Code',
  },
  contact: {
    kicker: 'Contact',
    title: 'Travaillons ensemble.',
    text: 'Vous recherchez une développeuse Laravel & React motivée ? Je serais ravie d’échanger sur votre projet ou une opportunité.',
    email: 'M’écrire un e-mail',
    copied: 'Copié !',
    copy: 'Copier',
  },
  footer: 'Conçu & développé par Wafae Bouadila',
}

const en = {
  nav: { about: 'About', skills: 'Skills', journey: 'Journey', projects: 'Projects', contact: 'Contact' },
  hero: {
    hello: 'Hi, I’m',
    roles: ['Full-Stack Developer', 'Laravel Developer', 'React Developer', 'AI Enthusiast'],
    pitch:
      'Graduate in Distributed Computer Systems, I build complete web applications — from robust Laravel back-ends to modern, responsive React interfaces.',
    ctaProjects: 'See my projects',
    ctaCv: 'Download my CV',
    available: 'Open to my first full-time role',
  },
  about: {
    kicker: 'About me',
    title: 'Clean code, solid systems.',
    p1:
      'Passionate about web development, networking and distributed systems architecture, I love turning an idea into an application that is functional, secure and pleasant to use.',
    p2:
      'Rigorous, autonomous and motivated, I’m looking for a first role where I can put my technical and human skills to work on innovative projects — with a special curiosity for artificial intelligence.',
    caption: 'GITEX Africa — Morocco',
    caption2: 'UM6P — Ben Guerir',
    stats: [
      { value: '4+', label: 'Web projects built' },
      { value: '3', label: 'Months of internship' },
      { value: '3', label: 'Languages spoken' },
    ],
    langsTitle: 'Languages',
    langs: [
      { name: 'Arabic', level: 'Native', pct: 100 },
      { name: 'French', level: 'Intermediate', pct: 70 },
      { name: 'English', level: 'Technical', pct: 60 },
    ],
    softTitle: 'Strengths',
    soft: ['Autonomy & initiative', 'Problem solving', 'Team management', 'Show hosting', 'Reading', 'AI innovation'],
  },
  skills: {
    kicker: 'Tech stack',
    title: 'The tools I build with.',
    groups: { backend: 'Back-end', frontend: 'Front-end', data: 'Data & Modeling', tools: 'Tools' },
  },
  journey: {
    kicker: 'Journey',
    title: 'Experience & Education',
    items: [
      {
        type: 'work',
        period: 'Apr 2025 — Jun 2025',
        title: 'Web Developer Intern',
        org: 'OnestEcom · Marrakech',
        desc: 'Built a complete web application for an agency (DevCreativ) using Laravel on the back-end and Blade on the front-end.',
      },
      {
        type: 'edu',
        period: '2024 — 2025',
        title: 'Bachelor in Distributed Computer Systems',
        org: 'Faculty of Science and Technology (FST)',
        desc: 'Distributed systems, networking, web development and databases.',
      },
      {
        type: 'edu',
        period: '2021 — 2024',
        title: 'DEUST — MIPC track',
        org: 'Faculty of Science and Technology',
        desc: 'Mathematics, Computer Science, Physics and Chemistry.',
      },
      {
        type: 'edu',
        period: '2020 — 2021',
        title: 'Baccalaureate in Physical Sciences',
        org: 'Hassan El Khayat High School · Agadir',
        desc: '',
      },
    ],
  },
  projects: {
    kicker: 'Projects',
    title: 'A selection of my work.',
    items: {
      devcreativ: {
        title: 'DevCreativ — Agency website',
        desc: 'Complete web application for a digital agency: showcase pages, service management and admin area, built with Laravel (MVC, Eloquent) and Blade.',
        badge: 'OnestEcom internship',
      },
      ecommerce: {
        title: 'Responsive e-commerce store',
        desc: 'Responsive online store with product and cart management, and a user interface optimized for mobile and desktop.',
        badge: 'Front-end',
      },
      rdv: {
        title: 'Medical appointment manager',
        desc: 'PHP/PDO application for booking medical appointments online, with an intuitive interface and secure user session handling.',
        badge: 'Full-stack PHP',
      },
      portfolio: {
        title: 'Personal portfolio',
        desc: 'This portfolio: a bilingual, animated and responsive React app, continuously deployed on Vercel.',
        badge: 'React',
      },
    },
    code: 'Code',
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s work together.',
    text: 'Looking for a motivated Laravel & React developer? I’d be happy to talk about your project or an opportunity.',
    email: 'Send me an email',
    copied: 'Copied!',
    copy: 'Copy',
  },
  footer: 'Designed & built by Wafae Bouadila',
}

export const translations = { fr, en }
