import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <nav className="navbar">
  <div className="navbar-container">
    <a href="#home" className="logo">Sudeep Kushwaha</a>
    <div className="nav-container">
      <ul className="nav-links">
        <a href="#about">About Me</a>
        <a href="#techstack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </ul>
    </div>
  </div>
</nav>
<section className="hero" id="home">
  <div className="hero-content">
    <h1 className="hero-title">HEY!</h1>
    <br />
    <h2 className="hero-subtitle">I'M SUDEEP KUSHWAHA</h2>
    <h3 className="hero-sub"><i>A FRONT-END DEVELOPER</i></h3>

    {/* Resume Button */}
    <a 
  href={require('../assests/resume.pdf')} 
  download="sudeep_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.preventDefault();  // Prevent default anchor behavior
    // Trigger download
    // const link = document.createElement('a');
    // link.href = require('../assests/resume.pdf');
    // link.download = 'sudeep_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    
    // Open in new tab
    window.open(require('../assests/resume.pdf'), '_blank');
  }
  }
>
  <button className="resume-button">RESUME 🚀</button>
</a>
<div className="social-icons">
        <a href="https://www.linkedin.com/in/sudeep-kushwaha-315b94220" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/5ucl33p" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
      </div>

  </div>
</section>
      <section id="about" className="about-section">
  <div className="about-container">
    <h2 className="section-title">About Me</h2>
    <p className="about-description">
      I am a passionate web developer with expertise in HTML, CSS, JavaScript, and React. I love building interactive and user-friendly applications and am always eager to learn new technologies.
    </p>
    <div className="about-cards">
      <div className="about-card">
        <i className="fas fa-code"></i>
        <h3>Development</h3>
        <p>Skilled in front-end development with a focus on responsive and accessible design.</p>
      </div>
      <div className="about-card">
        <i className="fas fa-lightbulb"></i>
        <h3>Creative Solutions</h3>
        <p>I enjoy solving complex problems and finding creative solutions through code.</p>
      </div>
      <div className="about-card">
        <i className="fas fa-rocket"></i>
        <h3>Innovation</h3>
        <p>Constantly exploring new tools and frameworks to stay ahead in the tech world.</p>
      </div>
    </div>
  </div>
</section>

<section id="techstack" className="techstack">
  <h2 className="section-title">Tech Stack</h2>
  <div className="techstack-container">
    <div className="tech-item">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
      <p>HTML</p>
    </div>
    <div className="tech-item">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />
      <p>CSS</p>
    </div>
    <div className="tech-item">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="tech-item">
      <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
      <p>React</p>
    </div>
    <div className="tech-item">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" />
      <p>Bootstrap</p>
    </div>
    <div className="tech-item">
  <img src="https://img.icons8.com/color/48/tailwindcss.png" alt="Tailwind CSS" />
  <p>Tailwind CSS</p>
</div>
<div className="tech-item">
  <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Git" />
  <p>Git</p>

</div>
  </div>
</section>

<section className="projects" id="projects">
  <h2>Projects</h2>
  <div className="projects-container">
    <div className="project-item">
      <h3>RANDOM CHOICE PICKER</h3>
      <p>A web application that allows users to input multiple options and randomly selects one.</p>
      <a href="https://link-to-your-random-choice-picker.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project-item">
      <h3>MEWZIC</h3>
      <p>A web application that mimics Spotify's UI and functionality using React.</p>
      <a href="https://link-to-your-spotify-clone.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project-item">
      <h3>CALCULATOR</h3>
      <p>Description of your third project.</p>
      <a href="https://5ucl33p.github.io/CALCULATOR-JS/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project-item">
      <h3>TO-DO-LIST</h3>
      <p>Description of your fourth project.</p>
      <a href="https://5ucl33p.github.io/TO-DO-LIST/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </div>
</section>


      <section className="experience" id="experience">
  <h2>Experience</h2>
  <div className="timeline">
  <div className="timeline-item">
      <div className="timeline-date">AUG 2024 - Present</div>
      <div className="timeline-content">
        <h3>FRONT-END DEVELOPER </h3>
        <h4>at YUGOX,AGRA</h4>
        <p>Working on front-end projects using React such as frontend for a car buying/selling website</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">MAY 2024 - JULY 2024</div>
      <div className="timeline-content">
        <h3>FRONT-END DEVELOPER (INTERN)</h3>
        <h4>at YUGOX,AGRA</h4>
        <p>Working on front-end projects and learnt integrating APIs via Postman.</p>
      </div>
    </div>
      <div className="timeline-item">
      <div className="timeline-date">JUNE 2022 - JULY 2022</div>
      <div className="timeline-content">
        <h3>Web Developer Intern at JOVAC</h3>
        <h4>AT JOVAC,MATHURA</h4>
        <p>Developed a Spotify clone using HTML, CSS, JavaScript, and React.</p>
      </div>
    </div>
  </div>
</section>

<section className="certificates" id="certificates">
  <h2>Certificates</h2>
  <div className="certificates-container">
    <div className="certificate-item">
      <a href={`${process.env.PUBLIC_URL}/c/sql.pdf`} target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/cimg/sqlimg.png`} alt="Certificate 1" />
        <p>SQL for Beginners: Querying Data</p>
      </a>
    </div>
    <div className="certificate-item">
      <a href={`${process.env.PUBLIC_URL}/c/jovac.pdf`} target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/cimg/jovacimg.png`} alt="Certificate 2" />
        <p>JOVAC- Web Development bootcamp</p>
      </a>
    </div>
    <div className="certificate-item">
      <a href={`${process.env.PUBLIC_URL}/c/cjp.pdf`} target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/cimg/cjpomg.jpg`} alt="Certificate 3" />
        <p>CSS, JavaScript And Python Complete Course</p>
      </a>
    </div>
    <div className="certificate-item">
      <a href={`${process.env.PUBLIC_URL}/c/cloud.pdf`} target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/cimg/cloud.jpg`} alt="Certificate 4" />
        <p>Cloud Computing Training 2022 </p>
      </a>
    </div>
  </div>
</section>

<section className="contact" id="contact">
  <h2>Contact Me</h2>
  <div className="contact-container">
    <div className="contact-item">
      <a href="https://www.linkedin.com/in/sudeep-kushwaha-315b94220" target="_blank" rel="noopener noreferrer" className="contact-link">
        <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" />
        <p>LinkedIn</p>
      </a>
    </div>
    <div className="contact-item">
      <a href="https://github.com/5ucl33p" target="_blank" rel="noopener noreferrer" className="contact-link">
        <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
        <p>GitHub</p>
      </a>
    </div>
    <div className="contact-item">
  <a href="mailto:sksudeep19@gmail.com" className="contact-link">
    <img src="https://img.icons8.com/fluent/48/000000/gmail.png" alt="Gmail" />
    <p>Gmail</p>
  </a>
</div>

  </div>
</section>

<footer className="footer">
  <p>© {new Date().getFullYear()} Sudeep Kushwaha. All rights reserved.</p>
</footer>


</>

);

}
export default Hero;
