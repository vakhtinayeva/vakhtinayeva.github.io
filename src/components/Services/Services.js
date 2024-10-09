import "./services.css";
// import ServicesCard from "./ServicesCard";
// import { services } from "../../assets/data/services";

const Services = () => {
  return (
<section class="skills-section">
  <div class="skills-wrapper">
    <div class="skills-description">
      <h2>My Skillset</h2>
      <p>With years of experience, I bring a diverse set of skills to every project, ensuring top-quality design and development.</p>
    </div>
    <div class="skills-grid">
      <div class="skill-item">
        <div class="skill-icon">🎨</div>
        <h3 class="skill-title">UI/UX Design</h3>
        <p class="skill-text">Crafting user-friendly interfaces that enhance user experiences across web and mobile platforms.</p>
      </div>
      <div class="skill-item">
        <div class="skill-icon">🖥️</div>
        <h3 class="skill-title">Web Development</h3>
        <p class="skill-text">Building responsive and dynamic websites with modern technologies and best practices.</p>
      </div>
      <div class="skill-item">
        <div class="skill-icon">📱</div>
        <h3 class="skill-title">Mobile Design</h3>
        <p class="skill-text">Designing intuitive and engaging mobile applications with a focus on usability.</p>
      </div>
      <div class="skill-item">
        <div class="skill-icon">🛠️</div>
        <h3 class="skill-title">Prototyping</h3>
        <p class="skill-text">Creating interactive prototypes to visualize and test design concepts effectively.</p>
      </div>
    </div>
  </div>
</section>


  );
}

export default Services;


{/* <section className="services container section" id="services">
<h2 className="section__title">Services</h2>

<div className="services__container grid">
{services.map((value) => {
return (
  <ServicesCard
    id={value.id}
    image={value.image}
    title={value.title}
    description={value.description}
  ></ServicesCard>
);
})}
</div>
</section> */}