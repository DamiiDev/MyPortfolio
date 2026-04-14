import React, { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="about">
      <div className="about-me">
        <h2>About Me</h2>
        <div className="about-me-tab">
          <button onClick={() => setActiveTab("about")}>MYSELF</button>
          <button onClick={() => setActiveTab("education")}>EDUCATION</button>
          <button onClick={() => setActiveTab("skills")}>SKILLS</button>
        </div>

        <div className="tab-content active">
          {activeTab === "about" && (
            <p>
              Hi, I'm Damilare Festus, a frontend developer passionate about
              transforming ideas into visually engaging and user friendly
              digital experiences. With a keen eye for detail and a deep
              appreciation for clean, purposeful design, I build responsive,
              high-performance web interfaces that don't just look great they
              work beautifully. My core stack includes React.js and Tailwind
              CSS, tools I use to craft modern, scalable UI components and pixel
              perfect layouts that adapt seamlessly across all devices. I take
              pride in writing code that is not only functional but
              maintainable, efficient, and built with the end user in mind.
              Beyond frontend development, I am actively expanding into
              fullstack development deepening my ability to architect scalable,
              future ready solutions from the ground up. This broader
              perspective allows me to think holistically about the products I
              build and the problems they solve. What truly drives me is the
              intersection of technology and impact. I'm committed to helping
              brands and entrepreneurs establish a powerful, effective online
              presence turning digital visions into real, results-driven
              experiences. Whether working independently or alongside a team, I
              bring innovation, precision, and genuine passion to every project
              I take on. Let's build something remarkable together.
            </p>
          )}
          {activeTab === "education" && (
            <p>
              I hold a Bachelor of Engineering in Computer Engineering from
              Ekiti State University, Ado-Ekiti, where I graduated with a Second
              Class Upper Division (2:1). My time at the university gave me a
              rigorous and well-rounded grounding in the principles of
              computing, engineering, and software development. Graduating with
              a 2:1 reflects my academic dedication and my ability to tackle
              complex technical challenges with consistency and discipline.
              Throughout my studies, I gained deep exposure to core areas
              including programming fundamentals, data structures, algorithms,
              computer architecture, and software engineering principles
              knowledge that continues to shape how I approach frontend
              development and problem-solving today. The program challenged me
              to think critically, work collaboratively, and develop solutions
              with both precision and creativity. Following my graduation, I
              successfully completed the National Youth Service Corps (NYSC)
              program, an experience that extended my growth well beyond the
              classroom. It immersed me in diverse environments and strengthened
              my adaptability, teamwork, and leadership skills qualities I bring
              into every professional engagement.
            </p>
          )}
        </div>
        <div className="get-in-touch-button">
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
