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
    <h3 className="hero-sub"><i> A Data Analyst</i></h3>

    {/* Resume Button */}
    <a 
  href={require('../assests/resume2026.pdf')} 
  download="resume2026.pdf"
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
    window.open(require('../assests/resume2026.pdf'), '_blank');
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
      I’m <strong>Sudeep Kushwaha</strong>, a passionate <em>Data Analyst</em> and <em>Front-End Developer</em> with expertise in <span style={{ color: "#1E90FF" }}>SQL, Excel, Power BI, Python, and React</span>. I turn raw data into actionable insights and build interactive dashboards that help businesses make smarter decisions.<br></br><br></br>

I’ve worked on front-end projects at Yugox, including a car buying/selling website, and learned API integration during my internship there. I started my journey as a <strong>Web Developer Intern at JOVAC</strong>, creating a Spotify clone with React.<br></br><br></br> 

Since January 2025, I have been working as an <strong>Associate Analyst</strong> at GlobalLogic, where I support data-driven business decisions by creating and maintaining dashboards and reports. My role involves analyzing performance and quality metrics, tracking key trends, and presenting insights that help stakeholders monitor productivity and improve operational efficiency. I regularly work with structured datasets, ensure data accuracy, and collaborate with team members to translate business requirements into meaningful analytical outputs.<br></br><br></br>

Passionate about problem-solving and creating meaningful solutions, I thrive at the intersection of data and technology.
<br></br>
    </p>
  </div>
</section>

<section id="techstack" className="techstack">
  <h2 className="section-title">Tech Stack</h2>
  <div className="techstack-container">
    {/* Priority Skills */}
    <div className="tech-item">
      <img src="https://img.icons8.com/color/48/microsoft-excel-2019.png" alt="MS Excel" />
      <p>MS Excel</p>
    </div>
    <div className="tech-item">
      <img src="https://img.icons8.com/fluency/48/sql.png" alt="SQL" />
      <p>SQL</p>
    </div>
    <div className="tech-item">
      <img src="https://img.icons8.com/color/48/power-bi.png" alt="Power BI" />
      <p>Power BI</p>
    </div>

    {/* Other Skills */}
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
      <h3>Random Choice Picker</h3>
      <p>A web application that allows users to input multiple options and randomly selects one.</p>
      <a href="https://5ucl33p.github.io/randomchoicepicker/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

    <div className="project-item">
      <h3>Expense Tracker</h3>
      <p>A web application that allows users to input multiple options and randomly selects one.</p>
      <a href="https://5ucl33p.github.io/expensetracker/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    {/* <div className="project-item">
      <h3>MEWZIC</h3>
      <p>A web application that mimics Spotify's UI and functionality using React.</p>
      <a href="https://link-to-your-spotify-clone.com" target="_blank" rel="noopener noreferrer">View Project</a>
    </div> */}
    <div className="project-item">
      <h3>Calculator</h3>
      <p>This calculator is a simple, interactive tool built with HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations seamlessly.</p>
      <a href="https://5ucl33p.github.io/CALCULATOR-JS/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project-item">
      <h3>TO-DO-LIST</h3>
      <p>This to-do list application, built with HTML, CSS, and React, allows users to easily add, manage, and delete tasks, enhancing productivity.</p>
      <a href="https://5ucl33p.github.io/TO-DO-LIST/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project-item">
      <h3>MODELING SITE</h3>
      <p>An interface designed with button functionalities for a modeling site using Tailwind CSS majorly</p>
      <a href="https://5ucl33p.github.io/kushwahamodels/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </div>
</section>
      
      
<section className="experience" id="experience">
  <h2>Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-date">JAN 2025 - Present</div>
      <div className="timeline-content">
        <h3>Associate Analyst</h3>
        <h4>at GlobalLogic, Gurugram</h4>
        <p>Developing dashboards and reports, performing data analysis, and providing actionable insights to support business decisions.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">AUG 2024 - DEC 2024</div>
      <div className="timeline-content">
        <h3>Data Analyst Intern</h3>
        <h4>at YUGOX, AGRA</h4>
        <p>Working on front-end projects using React such as frontend for a car buying/selling website.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">JUNE 2022 - JULY 2022</div>
      <div className="timeline-content">
        <h3> Intern at JOVAC</h3>
        <h4>AT JOVAC, MATHURA</h4>
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
