import Avatar from "../../assets/images/avatar1.jpeg";
import AboutCard from "./AboutCard";
import "./about.css";
import { about } from "../../assets/data/about";
import { timeline } from "../../assets/data/timeline";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Avatar} alt="avatar" className="about__img"></img>

        <div className="about__data grid">
          <p className="about__description">
                I am a web developer skilled at creating high-performance,
            user-centric web solutions through innovative development and
            effective collaboration.
          </p>
          {about.map((value, id) => {
            return (
              <AboutCard
                key={id}
                icon={value.icon}
                title={value.title}
                desc={value.desc}
              ></AboutCard>
            );
          })}
        </div>

        <div className="about__timeline grid">
          {timeline.map((value, id) => {
            return (
              <AboutCard
                key={id}
                icon={value.icon}
                title={value.title}
                year={value.year}
                desc={value.desc}
                text={value.text}
              ></AboutCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

