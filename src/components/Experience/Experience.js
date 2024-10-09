import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h3>WORK EXPERIENCE</h3>
      <h2>Companies I have worked for in the past.</h2>


      <div className="company-container">
        <div className="company">
          <div className="number">01</div>
          <h3>Google, Interaction Designer</h3>
          <p>Lead designer for Google Play's interaction design team.</p>
        </div>
        <div className="company">
          <div className="number">02</div>
          <h3>Facebook, Product Designer</h3>
          <p>Worked on internal tools for Facebook over 6 years.</p>
        </div>
        <div className="company">
          <div className="number">03</div>
          <h3>Dribbble, Graphic Designer</h3>
          <p>Created illustrations for Dribbble.</p>
        </div>
      </div>

    </section>
  );
}

export default Experience;
