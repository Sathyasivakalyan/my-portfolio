import React, { useEffect, useState,useRef } from "react";
import img from './assets/img.jpg';
import img2 from './assets/img2.jpg';
import emailjs from "@emailjs/browser";

export default function App() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const formRef = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    
    try {
      const response = await fetch("https://getform.io/f/bxoznqza", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();
        setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Try again.");
    }
  };
  const profile = {
    name: "Sathya Siva Kalyan",
    title: "Full-Stack Web Developer",
    tagline: "Transforming Ideas into Digital Experiences",
    email: "sathyasivakalyan0107@gmail.com",
    phone: "+91 93925 99581",
    location: "Bangalore, India",
    about: "I'm a passionate full-stack developer with a love for creating beautiful, functional web applications. My expertise spans across modern JavaScript frameworks, backend technologies, and database management. I believe in writing clean, maintainable code and delivering exceptional user experiences.",
    image: img,
    
    projectsCompleted: "5",
    techStack: ["React", "Node.js", "PostgreSQL", "MongoDB"]
  };

  const skills = [
    { name: "React.js", icon: "⚛️", level: 95, color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", level: 90, color: "#339933" },
    { name: "PostgreSQL", icon: "🐘", level: 85, color: "#336791" },
    { name: "JavaScript", icon: "💛", level: 93, color: "#F7DF1E" },
    { name: "Express.js", icon: "⚡", level: 90, color: "#000000" },
    { name: "Tailwind CSS", icon: "🎨", level: 92, color: "#06B6D4" },
    { name: "Git & GitHub", icon: "📦", level: 91, color: "#F05032" }
  ];

  const projects = [
    {
      title: "Hospital Management System",
      desc: "Comprehensive healthcare platform featuring multi-role dashboards, appointment scheduling, JWT authentication, and real-time analytics with interactive charts.",
      tech: ["React", "Node.js", "PostgreSQL", "JWT", "Chart.js"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "#"
    },
    {
      title: "Weather Forecast App",
      desc: "Beautiful weather application with geolocation support, 5-day forecasts, animated weather icons, and seamless dark mode integration.",
      tech: ["React", "OpenWeather API", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "https://weatherforcasttdashboard.netlify.app/"
    },
    {
      title: "Gencra Corporate Website",
      desc: "Modern marketing website with stunning 3D animations, optimized performance achieving 95+ Lighthouse scores, and engaging user interactions.",
      tech: ["React", "Spline 3D", "GSAP", "Netlify"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      link: "https://gencra.in/"
    }

  ];

  const experience = [
    {
      role: "Freelance Web Developer",
      company: "Gencra Pvt. Ltd.",
      period: "Jul 2025 - Sep 2025",
      type: "Freelance",
      description: "Led the development of a modern corporate website with advanced 3D animations and optimized performance.",
      achievements: [
        "Architected responsive React application with 3D Spline integrations",
        "Optimized bundle size reducing load time by 60%",
        "Achieved good scores across all Lighthouse metrics",
        "Implemented SEO best practices increasing organic traffic"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Hospital Management Project",
      period: "2024 - 2025",
      type: "Personal Project",
      description: "Designed and developed a comprehensive healthcare management system from ground up.",
      achievements: [
        "Built RESTful APIs handling 1000+ daily requests efficiently",
        "Implemented JWT-based authentication with role-based access control",
        "Created interactive dashboards with Chart.js for data visualization",
        "Managed PostgreSQL database with optimized queries"
      ]
    }
  ];

  return (
    <div className={`portfolio-container ${dark ? 'dark-mode' : 'light-mode'}`}>
      {/* NAVIGATION */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo">
            <span className="logo-text">Kalyan Kumar</span>
          </a>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            
            <button className="theme-toggle" onClick={() => setDark(!dark)}>
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for Work
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            
            <p className="hero-subtitle">{profile.title}</p>
            <p className="hero-description">{profile.tagline}</p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <span>Let's Talk</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span>View Work</span>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-border"></div>
              <img src={profile.image} alt={profile.name} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get To Know Me</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-image-section">
              <div className="about-image-wrapper">
                <img src={img2} alt={profile.name} />
                <div className="about-image-decoration"></div>
              </div>
              
              
                
              
              </div>
          

            <div className="about-content-section">
              <h3 className="about-greeting">Hello! I'm Sathya 👋</h3>
              <p className="about-description">{profile.about}</p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">💼</div>
                  <div className="highlight-content">
                    <h4>Professional Approach</h4>
                    <p>Delivering high-quality solutions with attention to detail and best practices</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-content">
                    <h4>Fast Learner</h4>
                    <p>Quick to adapt to new technologies and industry trends</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-content">
                    <h4>Goal Oriented</h4>
                    <p>Focused on delivering results that exceed expectations</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <span className="info-icon">✉</span>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-text">{profile.email}</div>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-text">{profile.phone}</div>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-text">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="about-actions">
                <a href="resume.pdf" className="btn btn-primary" download>
                  <span>Download CV</span>
                  <span>📄</span>
                </a>
                <a href="#contact" className="btn btn-outline">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">My Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-image" style={{ background: project.gradient }}>
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">View Project →</a>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Journey</span>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="experience-timeline">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-type">{exp.type}</span>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-description">Have a project in mind? Let's create something amazing together</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-grid">
              <div className="contact-info-card">
                <div className="contact-card-header">
                  <div className="contact-icon-wrapper">
                    <span className="contact-main-icon">💬</span>
                  </div>
                  <div>
                    <h3 className="contact-heading">Let's Connect</h3>
                    <p className="contact-subheading">I'm just a message away</p>
                  </div>
                </div>

                <p className="contact-text">
                  Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I'm always excited to connect with new people and discuss opportunities.
                </p>

                <div className="contact-methods">
                  <a href={`mailto:${profile.email}`} className="contact-method">
                    <div className="method-icon-circle">
                      <span>✉</span>
                    </div>
                    <div className="method-content">
                      <div className="method-label">Email Me</div>
                      <div className="method-value">{profile.email}</div>
                    </div>
                    <div className="method-arrow">→</div>
                  </a>

                  <a href={`tel:${profile.phone}`} className="contact-method">
                    <div className="method-icon-circle">
                      <span>📞</span>
                    </div>
                    <div className="method-content">
                      <div className="method-label">Call Me</div>
                      <div className="method-value">{profile.phone}</div>
                    </div>
                    <div className="method-arrow">→</div>
                  </a>

                  <div className="contact-method">
                    <div className="method-icon-circle">
                      <span>📍</span>
                    </div>
                    <div className="method-content">
                      <div className="method-label">Location</div>
                      <div className="method-value">{profile.location}</div>
                    </div>
                  </div>
                </div>

                <div className="social-section">
                  <p className="social-heading">Follow Me</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/sathya-siva-kalyan-kumar-dasari-659581371?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FypZLdrGS7KY36iYilDSnQ%3D%3D" className="social-link">
                      <span className="social-icon">💼</span>
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Sathyasivakalyan?tab=repositories" className="social-link">
                      <span className="social-icon">🐙</span>
                      <span>GitHub</span>
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="contact-form-card">
                <div className="form-header">
                  <h3 className="form-title">Send a Message</h3>
                  <p className="form-subtitle">Fill out the form below and I'll get back to you soon</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="John Doe" 
                        required 
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="john@example.com" 
                        required 
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="How can I help you?" 
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell me about your project or inquiry..." 
                      rows="5" 
                      required 
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full btn-submit">
                    <span>Send Message</span>
                    <span className="btn-icon">🚀</span>
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">Sathya Siva Kalyan</h3>
              <p className="footer-tagline">Crafting Digital Excellence</p>
            </div>
            
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-text">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="footer-subtext">Designed & Built with React ⚛️</p>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      {scrolled && (
        <button 
          className="scroll-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          transition: all 0.3s ease;
        }

        .light-mode {
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-tertiary: #f1f5f9;
          --text-primary: #0f172a;
          --text-secondary: #64748b;
          --border-color: #e2e8f0;
          --shadow: rgba(15, 23, 42, 0.08);
          --shadow-lg: rgba(15, 23, 42, 0.12);
          --accent-primary: #6366f1;
          --accent-secondary: #8b5cf6;
        }

        .dark-mode {
          --bg-primary: #0a0e1a;
          --bg-secondary: #111827;
          --bg-tertiary: #1f2937;
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
          --border-color: #334155;
          --shadow: rgba(0, 0, 0, 0.3);
          --shadow-lg: rgba(0, 0, 0, 0.5);
          --accent-primary: #6366f1;
          --accent-secondary: #8b5cf6;
          background: linear-gradient(135deg, #0a0e1a 0%, #111827 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* NAVIGATION */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 24px 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(var(--bg-primary-rgb, 10, 14, 26), 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 24px var(--shadow);
          padding: 16px 0;
        }

        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          text-decoration: none;
        }

        .logo-text {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--accent-primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .theme-toggle {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.05);
          border-color: var(--accent-primary);
        }

        /* HERO SECTION */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 100px;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .blob {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          animation: blob 10s infinite;
        }

        .blob-1 {
          background: var(--accent-primary);
          top: -10%;
          left: -10%;
        }

        .blob-2 {
          background: var(--accent-secondary);
          top: 50%;
          right: -10%;
          animation-delay: 3s;
        }

        .blob-3 {
          background: #ec4899;
          bottom: -10%;
          left: 40%;
          animation-delay: 6s;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 30px) scale(0.9) rotate(240deg); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          color: var(--accent-primary);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hero-title {
          font-size: 64px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--text-primary);
          letter-spacing: -2px;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 28px;
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .hero-description {
          font-size: 20px;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .btn {
          padding: 18px 36px;
          border-radius: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          font-size: 16px;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
        }

        .btn-secondary {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 2px solid var(--border-color);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
        }

        .btn-outline {
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border-color);
        }

        .btn-outline:hover {
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .btn-full {
          width: 100%;
          justify-content: center;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* HERO IMAGE */
        .hero-image {
          position: relative;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .image-border {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), #ec4899);
          border-radius: 32px;
          opacity: 0.3;
          filter: blur(30px);
          z-index: -1;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          border-radius: 32px;
          box-shadow: 0 24px 60px var(--shadow-lg);
          border: 4px solid var(--bg-primary);
        }

        /* SECTIONS */
        section {
          padding: 100px 0;
          background: var(--bg-primary);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-tag {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          color: var(--accent-primary);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: 52px;
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
        }

        .section-description {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ABOUT SECTION */
        .about-section {
          background: var(--bg-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        .about-image-section {
          position: sticky;
          top: 120px;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .about-image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 24px;
        }

        .about-image-decoration {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .about-image-wrapper:hover .about-image-decoration {
          opacity: 1;
        }

        .quick-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .quick-stat {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .quick-stat:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px var(--shadow-lg);
          border-color: var(--accent-primary);
        }

        .stat-number {
          font-size: 36px;
          font-weight: 900;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-text {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .about-content-section {
          padding-top: 20px;
        }

        .about-greeting {
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .about-description {
          font-size: 17px;
          line-height: 1.9;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }

        .about-highlights {
          margin-bottom: 40px;
        }

        .highlight-item {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding: 24px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 24px var(--shadow);
          border-color: var(--accent-primary);
        }

        .highlight-icon {
          font-size: 36px;
          flex-shrink: 0;
        }

        .highlight-content h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .highlight-content p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 4px 16px var(--shadow);
        }

        .info-icon {
          font-size: 28px;
        }

        .info-label {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-text {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .about-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* SKILLS SECTION */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px var(--shadow-lg);
          border-color: var(--accent-primary);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .skill-icon {
          font-size: 40px;
        }

        .skill-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 19px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-size: 15px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .skill-bar {
          height: 10px;
          background: var(--bg-tertiary);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress {
          height: 100%;
          border-radius: 10px;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* PROJECTS SECTION */
        .projects-section {
          background: var(--bg-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px var(--shadow-lg);
          border-color: var(--accent-primary);
        }

        .project-image {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.15);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-link {
          color: white;
          font-weight: 700;
          text-decoration: none;
          padding: 16px 32px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 12px;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .project-link:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.5);
        }

        .project-content {
          padding: 28px;
        }

        .project-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .project-description {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-badge {
          padding: 8px 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        /* EXPERIENCE SECTION */
        .experience-section {
          background: var(--bg-secondary);
        }

        .experience-timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, #ec4899 100%);
          border-radius: 10px;
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
          margin-bottom: 50px;
        }

        .timeline-marker {
          position: absolute;
          left: -10px;
          top: 0;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          border: 4px solid var(--bg-secondary);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
        }

        .timeline-content {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 36px;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(10px);
          box-shadow: 0 12px 36px var(--shadow-lg);
          border-color: var(--accent-primary);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .experience-role {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .experience-company {
          font-size: 17px;
          color: var(--accent-primary);
          font-weight: 700;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .experience-type {
          padding: 6px 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 10px;
          color: var(--accent-primary);
          font-size: 13px;
          font-weight: 700;
        }

        .experience-period {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .experience-description {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .experience-achievements {
          list-style: none;
          padding: 0;
        }

        .experience-achievements li {
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary);
          padding-left: 32px;
          position: relative;
          margin-bottom: 12px;
        }

        .experience-achievements li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-weight: bold;
          font-size: 18px;
        }

        /* CONTACT SECTION */
        .contact-section {
          background: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-heading {
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .contact-text {
          font-size: 17px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 36px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          transform: translateX(10px);
          border-color: var(--accent-primary);
          box-shadow: 0 8px 24px var(--shadow);
          background: rgba(99, 102, 241, 0.05);
        }

        .method-icon {
          font-size: 32px;
        }

        .method-label {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .method-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .social-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-link {
          padding: 14px 28px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px var(--shadow);
        }

        /* CONTACT FORM */
        .contact-form {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 44px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-input {
          width: 100%;
          padding: 18px 20px;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 14px;
          color: var(--text-primary);
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .form-input::placeholder {
          color: var(--text-secondary);
        }

        textarea.form-input {
          resize: vertical;
          min-height: 140px;
        }

        /* FOOTER */
        .footer {
          background: var(--bg-secondary);
          padding: 60px 0 40px;
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          max-width: 1200px;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          font-size: 36px;
          font-weight: 900;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .footer-tagline {
          color: var(--text-secondary);
          font-size: 15px;
        }

        .footer-links {
          display: flex;
          gap: 32px;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }

        .footer-bottom {
          text-align: center;
        }

        .footer-text {
          font-size: 15px;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .footer-subtext {
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* SCROLL TO TOP */
        .scroll-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
          transition: all 0.3s ease;
          z-index: 999;
        }

        .scroll-top:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.6);
        }

        /* RESPONSIVE */
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }

          .hero-image {
            order: -1;
          }

          .image-wrapper {
            max-width: 350px;
          }

          .hero-title {
            font-size: 48px;
          }

          .section-title {
            font-size: 40px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .nav-links {
            gap: 20px;
          }

          .nav-links a {
            font-size: 14px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .about-image-section {
            position: static;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .footer-main {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }

          .footer-brand {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 36px;
          }

          .section-title {
            font-size: 32px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .social-links {
            flex-direction: column;
          }

          .quick-stats {
            grid-template-columns: 1fr;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }

          .contact-form {
            padding: 28px;
          }
        }
          /* ============================================
   CONTACT SECTION STYLES
   ============================================ */

/* Contact Section Container */
.contact-section {
  background: var(--bg-primary);
}

.contact-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 40px;
}

/* ============================================
   CONTACT INFO CARD (LEFT SIDE)
   ============================================ */

.contact-info-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  border: 1px solid var(--border-color);
  border-radius: 28px;
  padding: 40px;
  height: fit-content;
  position: sticky;
  top: 120px;
}

/* Card Header */
.contact-card-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.contact-icon-wrapper {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

.contact-main-icon {
  font-size: 32px;
}

.contact-heading {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.contact-subheading {
  font-size: 14px;
  color: var(--text-secondary);
}

.contact-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

/* Contact Methods */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-method::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-method:hover {
  transform: translateX(8px);
  border-color: var(--accent-primary);
  box-shadow: 0 8px 24px var(--shadow);
}

.contact-method:hover::before {
  opacity: 1;
}

.method-icon-circle {
  width: 48px;
  height: 48px;
  background: var(--bg-secondary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.contact-method:hover .method-icon-circle {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  transform: scale(1.1);
}

.method-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.method-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.method-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.method-arrow {
  font-size: 20px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.contact-method:hover .method-arrow {
  color: var(--accent-primary);
  transform: translateX(4px);
}

/* Social Section */
.social-section {
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.social-heading {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.social-icon {
  font-size: 18px;
}

.social-link:hover {
  border-color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow);
}

/* ============================================
   CONTACT FORM CARD (RIGHT SIDE)
   ============================================ */

.contact-form-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 28px;
  padding: 48px;
  box-shadow: 0 4px 24px var(--shadow);
}

/* Form Header */
.form-header {
  margin-bottom: 36px;
}

.form-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-subtitle {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Form Elements */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-left: 4px;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 14px;
  color: var(--text-primary);
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

.form-input::placeholder {
  color: var(--text-secondary);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
  line-height: 1.6;
}

/* Submit Button */
.btn-submit {
  margin-top: 12px;
  font-size: 16px;
  padding: 18px 36px;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.btn-submit:hover .btn-icon {
  transform: translateX(4px);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info-card {
    position: static;
  }

  .contact-form-card {
    padding: 36px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-info-card {
    padding: 28px;
  }

  .contact-form-card {
    padding: 28px;
  }

  .form-title {
    font-size: 26px;
  }

  .contact-heading {
    font-size: 24px;
  }
}

/* Tablets and smaller laptops (≤ 1024px) */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-subtitle {
    font-size: 22px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 42px;
  }
}

/* Large mobile screens (≤ 768px) */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .nav-links {
    display: none; /* hide default nav on mobile */
  }

  /* Add a mobile menu toggle */
  .navbar {
    padding: 16px 0;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-description {
    font-size: 18px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 12px;
  }

  .about-greeting {
    font-size: 26px;
  }

  .quick-stats {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 220px;
  }
}

/* Small mobile screens (≤ 480px) */
@media (max-width: 480px) {
  .logo-text {
    font-size: 24px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .btn {
    padding: 14px 28px;
    font-size: 14px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-description {
    font-size: 15px;
  }

  .project-title {
    font-size: 20px;
  }

  .about-description {
    font-size: 15px;
  }

  .highlight-item {
    flex-direction: column;
    text-align: center;
  }

  .highlight-icon {
    font-size: 28px;
  }
}

      `}</style>
    </div>
  );
}