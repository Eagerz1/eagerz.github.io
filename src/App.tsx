import { useState, useEffect } from 'react';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-[#0a0a0a] text-white font-['Inter']">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold flex items-center gap-1">
            <span className="text-[#6366f1]">&lt;</span>
            Eagerz
            <span className="text-[#6366f1]">/&gt;</span>
          </a>
          <ul className={`md:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 py-6' : 'hidden'}`}>
            <li><a href="#home" onClick={closeMenu} className="hover:text-[#6366f1] transition-colors">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="hover:text-[#6366f1] transition-colors">About</a></li>
            <li><a href="#services" onClick={closeMenu} className="hover:text-[#6366f1] transition-colors">Services</a></li>
            <li><a href="#portfolio" onClick={closeMenu} className="hover:text-[#6366f1] transition-colors">Portfolio</a></li>
            <li><a href="#reviews" onClick={closeMenu} className="hover:text-[#6366f1] transition-colors">Reviews</a></li>
            <li><a href="#contact" onClick={closeMenu} className="bg-[#6366f1] hover:bg-[#4f46e5] px-5 py-2 rounded-lg transition-colors">Contact</a></li>
          </ul>
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={toggleMenu}>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#6366f1] text-sm">
            ✦ Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">Eagerz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">Minecraft Developer & Web Designer</p>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
            I build custom plugins, skripts, websites, and Tebex stores for Minecraft servers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#services" className="bg-[#6366f1] hover:bg-[#4f46e5] px-8 py-3 rounded-lg font-medium transition-all hover:scale-105">
              View Services
            </a>
            <a href="https://discord.gg/YOURLINK" target="_blank" className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
              <i className="fab fa-discord"></i> Discord
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-1">20+</div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-1">5+</div>
              <div className="text-gray-500 text-sm">Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#6366f1] mb-1">3</div>
              <div className="text-gray-500 text-sm">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#6366f1] text-sm mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">Who am I?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                I'm Eagerz — a passionate Minecraft developer with experience in Java plugin development, Skript, Tebex store design, and web development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I focus on delivering clean, optimized, and professional work for servers of all sizes. Whether you need a simple skript or a full custom plugin, I've got you covered.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Skript', 'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Tebex', 'Spigot API', 'Paper API', 'MySQL', 'Git'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold mb-2">Eagerz</h3>
              <p className="text-gray-400 mb-6">Minecraft Developer</p>
              <div className="flex justify-center gap-4 text-xl">
                <a href="https://discord.gg/YOURLINK" className="hover:text-[#6366f1] transition-colors"><i className="fab fa-discord"></i></a>
                <a href="https://github.com/Eagerz" className="hover:text-[#6366f1] transition-colors"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/Eagerz" className="hover:text-[#6366f1] transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="https://builtbybit.com/members/Eagerz" className="hover:text-[#6366f1] transition-colors"><i className="fas fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-white/[0.02]" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#6366f1] text-sm mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">What I Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📝', title: 'Skript Development', desc: 'Custom skripts tailored to your server\'s needs. Clean, optimized, and configurable.', price: '$3 - $15', delivery: '1-7 days', featured: false },
              { icon: '⚙️', title: 'Java Plugins', desc: 'Custom Spigot/Paper plugins built from scratch. Small to large scale projects.', price: '$5 - $30', delivery: '1-2 weeks', featured: true },
              { icon: '🛍️', title: 'Tebex Setup', desc: 'Professional webstore setup with custom styling, packages, and branding.', price: '$10 - $40', delivery: '2-7 days', featured: false },
              { icon: '🌐', title: 'Web Design', desc: 'Modern, responsive websites for your server, brand, or personal portfolio.', price: '$80 - $200', delivery: '~2 weeks', featured: false },
              { icon: '👨‍💻', title: 'Dedicated Developer', desc: 'Hire me for ongoing development. Weekly or monthly plans available.', price: 'Custom', delivery: 'Ongoing', featured: false },
              { icon: '🔧', title: 'Server Configs', desc: 'Professional configuration for any plugin. Optimized and clean.', price: '$5 - $15', delivery: '1-3 days', featured: false },
            ].map((service, idx) => (
              <div key={idx} className={`relative bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-[#6366f1]/50 transition-all hover:scale-105 ${service.featured ? 'border-[#6366f1]/50' : ''}`}>
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6366f1] px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[#6366f1] font-semibold">{service.price}</span>
                  <span className="text-gray-500 text-sm">{service.delivery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 px-6" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#6366f1] text-sm mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">My Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Twisted SMP', 
                desc: 'Made custom abilites and weapons.',
                tags: ['Java', 'Spigot'],
                image: 'https://i.imgur.com/zStFk93.png'
              },
              { 
                title: 'HelixSMP', 
                desc: 'Made different items called Helixs which grant abilites also made weapons called mythics.',
                tags: ['Java', 'Paper'],
                image: 'https://i.imgur.com/3tOte7A.png'
              },
              { 
                title: 'Crown Evenst', 
                desc: 'Event Skript featured a craftable crown and sword, had grace period and world border.',
                tags: ['Skript'],
                image: 'https://i.imgur.com/SF1UXOH.png'
              },
              { 
                title: 'ERTPs', 
                desc: 'A rtp plugin that could teleport to all 3 dimensions, had settings, config for staff and interactive features.',
                tags: ['Plugin'],
                image: 'https://i.imgur.com/3buIsAk.png'
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-[#6366f1]/50 transition-all hover:scale-105">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 px-6 bg-white/[0.02]" id="reviews">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#6366f1] text-sm mb-4">
              Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Comet__', 
                server: 'HelixSMP', 
                review: 'Amazing work! Delivered fast and exactly what I needed. Will definitely order again.',
                avatar: 'https://placehold.co/100x100/6366f1/ffffff?text=C'
              },
              { 
                name: 'Crimy', 
                server: 'HelixSMP', 
                review: 'Best developer I\'ve worked with. Clean code, great communication, and fair prices.',
                avatar: 'https://placehold.co/100x100/8b5cf6/ffffff?text=C'
              },
              { 
                name: 'Bluetap', 
                server: 'NTwistedSMP', 
                review: 'Made a custom plugin for the server. Couldn\'t be happier with the results.',
                avatar: 'https://placehold.co/100x100/4f46e5/ffffff?text=B'
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-400 mb-6 leading-relaxed">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#6366f1]"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <span className="text-gray-500 text-sm">{review.server}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border border-[#6366f1]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-gray-400 mb-8">Join my Discord server to place an order or ask any questions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/Sxxzh6thDd" target="_blank" className="bg-[#6366f1] hover:bg-[#4f46e5] px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
                <i className="fab fa-discord"></i> Join Discord
              </a>
              <a href="https://builtbybit.com/members/Eagerz" target="_blank" className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
                <i className="fas fa-store"></i> BuiltByBit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-6">
            <span className="text-[#6366f1]">&lt;</span>
            Eagerz
            <span className="text-[#6366f1]">/&gt;</span>
          </div>
          <div className="flex justify-center gap-6 text-xl mb-6">
            <a href="https://discord.gg/Sxxzh6thDd" className="hover:text-[#6366f1] transition-colors"><i className="fab fa-discord"></i></a>
            <a href="https://github.com/Eagerz" className="hover:text-[#6366f1] transition-colors"><i className="fab fa-github"></i></a>
            <a href="https://youtube.com/Eagerz" className="hover:text-[#6366f1] transition-colors"><i className="fab fa-twitter"></i></a>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Eagerz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
