import { petprojects } from "../../assets/data/petprojects";
import { projects } from "../../assets/data/projects";
import ProjectsCard from "./ProjectsCard";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        <span>Commercial</span> projects I have worked on
      </p>

      <div className="projects__container grid">
        {projects.map(({ id, image, title, category, description }) => {
          return (
            <ProjectsCard
              id={id}
              image={image}
              title={title}
              category={category}
              description={description}
            ></ProjectsCard>
          );
        })}
      </div>

      <p className="section__subtitle">
        <span>Personal</span> projects I have created
      </p>

      <div className="projects__container grid">
        {petprojects.map(({ id, image, title, category, link }) => {
          return (
            <ProjectsCard
              key={id}
              id={id}
              image={image}
              title={title}
              category={category}
              link={link}
            ></ProjectsCard>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
