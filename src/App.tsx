import { useEffect, useState } from 'react';
import './portfolio.css';

type Page = 'home' | 'projects' | 'services' | 'about' | 'contact';
type Project = {
  name: string;
  category: string;
  subtitle: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  label?: string;
  accent: string;
  number: string;
};

const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const projects: Project[] = [
  {
    number: '01', name: 'CoreMC Skyblock', category: 'Java / Paper',
    subtitle: 'A complete Skyblock gameplay foundation',
    description: 'A from-scratch Paper 1.21.x core plugin featuring player islands, role progression, Omni-Tools, economy, crates, generators, spawners and protection systems. The public repository documents 140+ JUnit tests and an automated live-player test journey.',
    tags: ['Java 21', 'Paper API', 'Maven', 'JUnit', 'YAML persistence'],
    link: 'https://github.com/Eagerz1/coremc1', label: 'View source', accent: 'lime'
  },
  {
    number: '02', name: 'HelixSMP', category: 'Java / Paper',
    subtitle: 'Custom abilities, items and weapons',
    description: 'Minecraft gameplay work featuring Helix items with unique abilities and Mythic weapons. Featured in my earlier development portfolio.',
    tags: ['Java', 'Paper', 'Custom items', 'Abilities'],
    image: 'https://i.imgur.com/3tOte7A.png', accent: 'violet'
  },
  {
    number: '03', name: 'Twisted SMP', category: 'Java / Spigot',
    subtitle: 'Weapons that change how players fight',
    description: 'Custom ability and weapon systems developed for an SMP experience, as documented in my earlier portfolio.',
    tags: ['Java', 'Spigot', 'PvP mechanics', 'Abilities'],
    image: 'https://i.imgur.com/zStFk93.png', accent: 'blue'
  },
  {
    number: '04', name: 'Crown Events', category: 'Skript',
    subtitle: 'An event with its own rules and rewards',
    description: 'A Skript-based event system featuring a craftable crown and sword, grace-period logic and a managed world border.',
    tags: ['Skript', 'Events', 'Game rules', 'Custom crafting'],
    image: 'https://i.imgur.com/SF1UXOH.png', accent: 'amber'
  },
  {
    number: '05', name: 'ERTPs', category: 'Server plugin',
    subtitle: 'Random teleportation across dimensions',
    description: 'A configurable random-teleport plugin supporting the Overworld, Nether and End, with staff settings and interactive features.',
    tags: ['Teleportation', 'Configuration', 'Admin tools'],
    image: 'https://i.imgur.com/3buIsAk.png', accent: 'cyan'
  },
  {
    number: '06', name: 'CoreMC Support Bot', category: 'Discord / Node.js',
    subtitle: 'Community operations, automated',
    description: 'A Discord.js bot project with support-ticket workflows, applications, moderation, giveaways, invite tracking and community utilities.',
    tags: ['Node.js', 'Discord.js', 'Tickets', 'Automation'],
    link: 'https://github.com/Eagerz1/coremc-bot', label: 'View source', accent: 'pink'
  },
];

const services = [
  { n: '01', title: 'Custom Java plugins', note: 'PAPER / SPIGOT', description: 'Purpose-built mechanics for your server, from focused utilities to connected gameplay systems.', bullets: ['Custom items, abilities and weapons', 'GUIs, commands and permissions', 'Economies, crates and progression', 'Configuration and persistent player data'] },
  { n: '02', title: 'Skript development', note: 'FAST, FLEXIBLE SYSTEMS', description: 'Practical event logic, commands and features when a full plugin is not the right fit.', bullets: ['Server events and minigames', 'Custom commands and interactions', 'Gameplay rules and automation', 'Configurable admin controls'] },
  { n: '03', title: 'Discord automation', note: 'COMMUNITY INFRASTRUCTURE', description: 'Bots and tools that make running a Minecraft community less manual.', bullets: ['Ticket and application workflows', 'Moderation utilities', 'Giveaways and member tools', 'Server-specific automations'] },
  { n: '04', title: 'Web & server systems', note: 'BEYOND THE PLUGIN', description: 'Supporting tools and interfaces that help your network feel like one polished product.', bullets: ['Minecraft landing pages', 'Server configuration and setup', 'Panel branding and customization', 'Integrations and technical support'] },
];

const examples = [
  '“The abilities matched the server concept, and the configuration was easy to work with.”',
  '“Clear communication throughout the build and a smooth handover at the end.”',
  '“The new event system gave our players something fresh to come back for.”'
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? '↗' : '→'}</span>;
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function SectionHead({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-head">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  return <article className={'project-card ' + (featured ? 'featured' : '')}>
    <div className={'project-visual accent-' + project.accent}>
      {project.image && !imageFailed ? <img src={project.image} alt={'Screenshot of ' + project.name} loading="lazy" onError={() => setImageFailed(true)} /> : <div className="project-art">
        <div className="art-square one" /><div className="art-square two" /><div className="art-square three" />
        <span className="art-mark">EGRZ / DEV</span>
      </div>}
      <span className="visual-counter">PROJECT / {project.number}</span>
      <span className="visual-category">{project.category}</span>
    </div>
    <div className="project-copy">
      <div className="project-heading"><div><p className="micro-label">{project.subtitle}</p><h3>{project.name}</h3></div><span className="project-arrow"><Arrow diagonal /></span></div>
      <p>{project.description}</p>
      <div className="chip-row">{project.tags.map(t => <Chip key={t}>{t}</Chip>)}</div>
      {project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.label || 'Explore project'} <Arrow diagonal /></a>}
    </div>
  </article>;
}

function Home() {
  return <>
    <section className="hero container">
      <div className="hero-main">
        <p className="eyebrow"><span className="signal-dot" /> INDEPENDENT MINECRAFT DEVELOPER / EAGERZ</p>
        <h1>BUILD A SERVER <span>WORTH</span> PLAYING.</h1>
        <p className="hero-description">Custom Minecraft plugins, unique gameplay systems and community tools — made to fit your server, not the other way around.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#/contact">Start a commission <Arrow diagonal /></a>
          <a className="btn btn-outline" href="#/projects">Explore my work <Arrow /></a>
        </div>
        <div className="hero-proof"><span>JAVA 21 / PAPER 1.21.x</span><span>SKRIPT / DISCORD.JS</span><span>REAL PROJECTS. PUBLIC CODE.</span></div>
      </div>
      <div className="hero-showcase" aria-label="Illustration of CoreMC gameplay systems">
        <div className="showcase-toolbar"><span className="signal-dot" /> <span>COREMC // SYSTEM OVERVIEW</span><span className="toolbar-status">BUILD 0.11</span></div>
        <div className="showcase-center"><div className="block-scene"><div className="voxel v1" /><div className="voxel v2" /><div className="voxel v3" /><div className="voxel v4" /><div className="voxel v5" /></div><div className="showcase-center-text">DESIGNED FOR<br/><strong>THE GAME.</strong></div></div>
        <div className="showcase-footer"><span>ISLANDS</span><span>ECONOMY</span><span>PROGRESSION</span><span>CRATES</span></div>
      </div>
    </section>
    <div className="marquee-line"><div className="container marquee-inner"><span>JAVA DEVELOPMENT</span><span>✳</span><span>PAPER / SPIGOT</span><span>✳</span><span>SKRIPT</span><span>✳</span><span>DISCORD BOTS</span><span>✳</span><span>SERVER SYSTEMS</span></div></div>
    <section className="container section">
      <SectionHead eyebrow="01 / SELECTED WORK" title="PROOF, NOT PROMISES." description="From full-scale Skyblock systems to custom PvP mechanics, here is a look at the kind of work I build." />
      <div className="projects-grid"><ProjectCard project={projects[0]} featured /><ProjectCard project={projects[1]} /></div>
      <div className="section-end"><a className="btn btn-outline" href="#/projects">All projects <Arrow /></a></div>
    </section>
    <section className="section muted-section"><div className="container">
      <SectionHead eyebrow="02 / WHAT I BUILD" title="YOUR IDEA. REAL CODE." description="One developer for the gameplay and the tools around it." />
      <div className="capability-grid">
        {services.map(s => <a key={s.n} className="capability" href="#/services"><span className="capability-n">{s.n}</span><h3>{s.title}</h3><p>{s.description}</p><span className="capability-arrow"><Arrow diagonal /></span></a>)}
      </div>
    </div></section>
    <section className="container section closing-cta"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>LET'S MAKE IT <em>HAPPEN.</em></h2><a className="btn btn-primary" href="#/contact">Discuss your idea <Arrow diagonal /></a></section>
  </>;
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Java', 'Skript', 'Discord'];
  const shown = projects.filter(p => filter === 'All' || (filter === 'Java' && (p.category.includes('Java') || p.name === 'ERTPs')) || (filter === 'Skript' && p.category.includes('Skript')) || (filter === 'Discord' && p.category.includes('Discord')));
  return <><header className="page-intro container"><p className="eyebrow">01 / WORK & CASE STUDIES</p><h1>SELECTED <span>PROJECTS.</span></h1><p>Real Minecraft and community projects from my development portfolio. Some server-specific builds are closed source; public repositories are linked where available.</p></header>
    <section className="container section section-topless">
      <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} className={'filter-btn ' + (filter === f ? 'active' : '')} onClick={() => setFilter(f)} aria-pressed={filter === f}>{f}</button>)}</div>
      <div className="projects-grid">{shown.map((p, i) => <ProjectCard key={p.name} project={p} featured={filter === 'All' && i === 0} />)}</div>
      <div className="project-note"><span>↳</span> Descriptions of Twisted SMP, HelixSMP, Crown Events and ERTPs are drawn from my previous published portfolio. CoreMC source repositories provide more technical detail.</div>
    </section>
    <section className="container section compact-cta"><h2>LIKE WHAT YOU SEE?</h2><a className="btn btn-primary" href="#/contact">Let's talk <Arrow diagonal /></a></section>
  </>;
}

function Services() {
  return <><header className="page-intro container"><p className="eyebrow">02 / COMMISSION SERVICES</p><h1>BUILT FOR <span>YOUR SERVER.</span></h1><p>Whether you need one mechanic or a larger connected system, I can help scope and build it.</p></header>
    <section className="container section section-topless"><div className="services-grid">{services.map(s => <article className="service-card" key={s.n}><div className="service-top"><span>{s.n} /</span><span>{s.note}</span></div><h2>{s.title}</h2><p>{s.description}</p><ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul><a href="#/contact" className="text-link">Request a quote <Arrow diagonal /></a></article>)}</div></section>
    <section className="muted-section section"><div className="container"><SectionHead eyebrow="THE PROCESS" title="SIMPLE. TRANSPARENT." description="Every commission starts with a clear brief, not a surprise invoice."/><div className="steps"><div><span>01</span><h3>Tell me the idea</h3><p>Share the mechanics, server version, examples and must-have features.</p></div><div><span>02</span><h3>Scope & quote</h3><p>We agree on deliverables, a realistic timeline, revisions and price before work starts.</p></div><div><span>03</span><h3>Build & test</h3><p>I develop the feature and test its core behavior against the agreed requirements.</p></div><div><span>04</span><h3>Handover</h3><p>Receive the agreed build, setup notes and support terms.</p></div></div></div></section>
    <section className="container section compact-cta"><div><p className="eyebrow">PRICING</p><h2>QUOTED TO THE SCOPE.</h2><p>Small utilities and complex systems need different estimates. Tell me what you want and I'll help work out the right approach.</p></div><a className="btn btn-primary" href="#/contact">Get a quote <Arrow diagonal /></a></section>
  </>;
}

function About() {
  return <><header className="page-intro container"><p className="eyebrow">03 / THE DEVELOPER</p><h1>HEY, I'M <span>EAGERZ.</span></h1><p>I build Minecraft experiences from both sides: the player-facing mechanics and the behind-the-scenes tools server owners rely on.</p></header>
    <section className="container section section-topless about-layout"><div className="about-manifesto"><span className="large-mark">E//</span><p>GOOD SERVER DEVELOPMENT ISN'T JUST ABOUT ADDING FEATURES. IT'S ABOUT MAKING THEM WORK TOGETHER.</p></div><div className="about-copy"><h2>FROM IDEAS TO WORKING SYSTEMS.</h2><p>My portfolio includes custom SMP abilities, event Skripts, random-teleport utilities and a larger Skyblock core built in Java for Paper. I also work on Discord community automation and supporting web tools.</p><p>Working on server projects has shaped how I approach commissions: think about the player's experience, give administrators useful controls, and keep the code maintainable after launch.</p><div className="skill-cloud">{['Java 21','Paper API','Spigot API','Skript','Maven','JUnit','YAML','Discord.js','Node.js','HTML / CSS','React','Git'].map(t=><Chip key={t}>{t}</Chip>)}</div></div></section>
    <section className="muted-section section"><div className="container"><SectionHead eyebrow="EXPERIENCE" title="MORE THAN A PLUGIN FILE." description="My earlier portfolio lists server ownership, development and management roles across several SMP communities."/><div className="experience-list">{[['SynapticSMP','Owner / Head Developer / Manager'],['EvergreenSMP','Owner / Head Developer'],['MaceSMP','Owner / Developer'],['ApexSMP','Owner / Developer'],['EclipseSMP','Co-owner / Head Developer'],['DuckyMC','Content Manager / Head Developer']].map(([n,r])=><div key={n}><strong>{n}</strong><span>{r}</span></div>)}</div><p className="fine-print">Role information is based on my previously published portfolio; it is not presented as third-party verified employment history.</p></div></section>
    <section className="container section"><SectionHead eyebrow="TECHNICAL DEPTH" title="DETAILS THAT MATTER."/><div className="detail-grid"><div><span className="detail-number">21</span><h3>Java target</h3><p>CoreMC is built for Java 21 and Paper 1.21.x.</p></div><div><span className="detail-number">140+</span><h3>Documented unit tests</h3><p>CoreMC's public README describes JUnit coverage and automated live-player journeys.</p></div><div><span className="detail-number">02</span><h3>Connected ecosystems</h3><p>Minecraft server gameplay and Discord community workflows.</p></div></div></section>
    <section className="container section sample-reviews"><SectionHead eyebrow="CLIENT FEEDBACK" title="LET THE WORK SPEAK." description="Verified client testimonials will be added here when permission is given to publish them."/><details><summary>Preview fictional testimonial examples <span>+</span></summary><p className="sample-disclaimer">DESIGN EXAMPLES ONLY — these are invented quotes, not real reviews or endorsements. Replace them with genuine client feedback before publishing as testimonials.</p><div className="sample-grid">{examples.map((q,i)=><blockquote key={i}><span>SAMPLE 0{i+1} / FICTIONAL</span><p>{q}</p></blockquote>)}</div></details></section>
  </>;
}

function Contact() {
  const [type, setType] = useState('Custom Java plugin');
  const [version, setVersion] = useState('Paper 1.21.x');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const brief = ['Minecraft commission request', 'Project: ' + type, 'Server software / version: ' + version, 'Budget: ' + (budget || 'To discuss'), 'Deadline: ' + (deadline || 'Flexible'), 'Requirements:\n' + (details || '(Add your project description)')].join('\n\n');
  const copyBrief = async () => { try { await navigator.clipboard.writeText(brief); setCopied(true); } catch { setCopied(false); window.prompt('Copy your commission brief:', brief); } };
  return <><header className="page-intro container"><p className="eyebrow">04 / START A COMMISSION</p><h1>LET'S BUILD <span>SOMETHING.</span></h1><p>Have a mechanic, plugin or full system in mind? Tell me what you're making and I'll help figure out the next step.</p></header>
    <section className="container section section-topless contact-grid">
      <div className="contact-form-panel"><div className="contact-panel-head"><h2>PROJECT BRIEF</h2><span>01 / 01</span></div><p className="form-intro">This form creates a message you can copy into Discord. It does not send or store your information.</p>
        <div className="form-grid">
          <label>What do you need?<select value={type} onChange={e=>{setType(e.target.value);setCopied(false);}}><option>Custom Java plugin</option><option>Skript</option><option>Discord bot</option><option>Website / store</option><option>Server configuration</option><option>Not sure yet</option></select></label>
          <label>Server software / version<input value={version} onChange={e=>{setVersion(e.target.value);setCopied(false);}} placeholder="e.g. Paper 1.21.x" /></label>
          <label>Budget (optional)<input value={budget} onChange={e=>{setBudget(e.target.value);setCopied(false);}} placeholder="e.g. $100–$200" /></label>
          <label>Deadline (optional)<input value={deadline} onChange={e=>{setDeadline(e.target.value);setCopied(false);}} placeholder="e.g. Next month" /></label>
          <label className="wide">Describe the idea<textarea rows={7} value={details} onChange={e=>{setDetails(e.target.value);setCopied(false);}} placeholder="What should the plugin do? Commands, GUIs, mechanics, references, permissions, integrations…" /></label>
        </div>
        <button type="button" className="btn btn-primary copy-button" onClick={copyBrief}>{copied ? 'Brief copied ✓' : 'Copy commission brief'} <Arrow /></button>
        <p className="fine-print">After copying, open the Discord server below and paste your brief into the appropriate commission/ticket channel.</p>
      </div>
      <aside className="contact-aside"><p className="eyebrow">PREFER TO TALK FIRST?</p><h2>FIND ME HERE.</h2><p>Send over the idea, examples and your server version. Clear details make quoting faster.</p>
        <a className="contact-link" href="https://discord.gg/Sxxzh6thDd" target="_blank" rel="noopener noreferrer"><span><strong>Discord</strong><small>Discuss a commission</small></span><Arrow diagonal /></a>
        <a className="contact-link" href="https://github.com/Eagerz1" target="_blank" rel="noopener noreferrer"><span><strong>GitHub</strong><small>Browse public code</small></span><Arrow diagonal /></a>
        <a className="contact-link" href="https://builtbybit.com/members/Eagerz" target="_blank" rel="noopener noreferrer"><span><strong>BuiltByBit</strong><small>Marketplace profile</small></span><Arrow diagonal /></a>
        <div className="contact-hint"><span className="signal-dot" /> OPEN TO DISCUSSING NEW PROJECTS <p>Availability, delivery dates and pricing are confirmed individually.</p></div>
      </aside>
    </section>
  </>;
}

function getPage(): Page {
  const value = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return pages.find(p => p.id === value)?.id || 'home';
}

export function App() {
  const [page, setPage] = useState<Page>(getPage);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => { const next = getPage(); setPage(next); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => { document.title = (pages.find(p=>p.id===page)?.label || 'Home') + ' — Eagerz | Minecraft Developer'; }, [page]);
  return <div className="portfolio-site">
    <header className="site-header"><div className="container header-inner">
      <a href="#/home" className="brand" aria-label="Eagerz home"><span className="brand-symbol">E</span><span>EAGERZ<span className="brand-slash">//</span></span></a>
      <nav className={'main-nav ' + (menuOpen ? 'open' : '')} aria-label="Main navigation">{pages.map(p => <a key={p.id} href={'#/' + p.id} className={page === p.id ? 'current' : ''} aria-current={page === p.id ? 'page' : undefined}>{p.label}</a>)}</nav>
      <a className="header-cta" href="#/contact">LET'S TALK <Arrow diagonal /></a>
      <button className="mobile-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>
    </div></header>
    <main key={page}>{page === 'home' ? <Home /> : page === 'projects' ? <Projects /> : page === 'services' ? <Services /> : page === 'about' ? <About /> : <Contact />}</main>
    <footer className="site-footer"><div className="container footer-top"><div><a className="brand" href="#/home"><span className="brand-symbol">E</span><span>EAGERZ<span className="brand-slash">//</span></span></a><p>Custom Minecraft development.<br/>Made for servers with ambition.</p></div><div className="footer-links"><a href="#/projects">Projects</a><a href="#/services">Services</a><a href="#/about">About</a><a href="#/contact">Contact</a></div><div className="footer-links"><a href="https://github.com/Eagerz1" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://discord.gg/Sxxzh6thDd" target="_blank" rel="noopener noreferrer">Discord ↗</a><a href="https://builtbybit.com/members/Eagerz" target="_blank" rel="noopener noreferrer">BuiltByBit ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} EAGERZ. ALL RIGHTS RESERVED.</span><span>CRAFTED WITH PURPOSE / EGRZ</span></div></footer>
  </div>;
}
