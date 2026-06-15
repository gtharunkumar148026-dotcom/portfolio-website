import React from "react";

function App() {
  return (
    <>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

          <a className="navbar-brand" href="#">
            Tharun Kumar
          </a>

          <button
            className="navbar-toggler bg-light"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            ☰
          </button>

          <div className="collapse navbar-collapse" id="nav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

            </ul>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">

  <div className="container">

    <div className="row align-items-center">

      {/* Left Side */}
      <div className="col-md-6 text-md-start text-center">

        <h1>
          Hi, I'm <span>Gunupuru Tharun Kumar</span>
        </h1>

        <p>
           Web Developer | React | Django | Node.js
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn-custom btn-primary-custom"
          >
            View Projects
          </a>

          {/* Resume View Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-custom btn-outline-custom"
          >
            View Resume
          </a>

        </div>

      </div>

      {/* Right Side */}
      <div className="col-md-6 text-center">

        <img
          src="/myphoto.jpg"
          alt="Tharun Kumar"
          className="profile-image"
        />

      </div>

    </div>

  </div>

</section>
      {/* About */}
      {/* About */}
<section id="about">

  <div className="container">

    <div className="section-title">
      <h2>About Me</h2>
    </div>

    <div className="row justify-content-center">

      <div className="col-lg-9">

        <div className="about-box">

          <p>
            I am a motivated B.Tech Information Technology student
            at ANITS with strong interest in  Web Development,
            Web Security, and Modern Software Technologies.
          </p>

          <p>
            Skilled in building responsive and scalable web applications
            using React.js, Django, Node.js, Express.js, MongoDB,
            JavaScript, Bootstrap, and Python.
          </p>

          <p>
            Developed real-world projects including a Blood Bank
            Management System and Travel Explore platform with
            authentication, database integration, and responsive UI.
          </p>

          <p>
            Passionate about learning new technologies, solving
            real-world problems, and contributing to innovative
            software development projects.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Skills */}
      <section id="skills">

        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row g-4">

            {[
              "React",
              "JavaScript",
              "Node.js",
              "Django",
              "MongoDB",
              "Bootstrap"
            ].map((skill,index)=>(

              <div className="col-md-4" key={index}>

                <div className="skill-card">
                  <h4>{skill}</h4>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects">

        <div className="container">

          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6">

              <div className="project-card">

                <img src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=2070&auto=format&fit=crop" />

                <div className="project-content">

                  <h4>Blood Bank Management</h4>

                  <p>
                    Full-stack Django application with authentication,
                    donor management, and blood tracking.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-6">

              <div className="project-card">

                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop" />

               <div className="project-content">

  <h4>Travel Explore</h4>

  <p>
    Full-stack travel platform with authentication,
    destination search, history tracking, and MongoDB integration.
  </p>

  <a
    href="https://travelexplore.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary-custom me-2"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/gtharunkumar148026-dotcom/travelexplore"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-custom"
  >
    GitHub
  </a>

</div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact">

        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row justify-content-center">

            <div className="col-md-7">

              <div className="contact-form">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />

                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                ></textarea>

                <button className="btn-custom btn-primary-custom w-100">
                  Send Message
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer>
        © 2026 Gunupuru Tharun Kumar | Portfolio Website
      </footer>

    </>
  );
}

export default App;
