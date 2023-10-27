import "./projects.css";
import Conversion from "../../assets/conversion.png";
import Education from "../../assets/education.jpg";
import Aggregation from "../../assets/aggregation.jpeg";
import JavaProject from "../../assets/java_project.jpg";
import JSProject from "../../assets/js_project.png";
import TSProject from "../../assets/ts_project.png";
import PythonProject from "../../assets/python_project.png";
import ReactProject from "../../assets/react_project.jpg";
import FrontendProject from "../../assets/frontend_project.jpg";

const dataWork = [
    {
        id: 1,
        image: Conversion,
        title: "Conversion system",
        category: "Back-end"
    },
    {
        id: 2,
        image: Education,
        title: "Education platform",
        category: "Back-end"
    },
    {
        id: 3,
        image: Aggregation,
        title: "Aggregation system",
        category: "Back-end"
    },
];

const dataPersonal = [
    {
        id: 1,
        image: JavaProject,
        title: "Multithreading in Java",
        category: "Java",
        link: "https://github.com/vakhtinayeva/Java",
    },
    {
        id: 2,
        image: ReactProject,
        title: "Interactive Quiz with React",
        category: "React",
        link: "https://github.com/vakhtinayeva/React",
    },
    {
        id: 3,
        image: JSProject,
        title: "Cryptography algorithms in JS",
        category: "JS",
        link: "https://github.com/vakhtinayeva/crypto-algorithms",
    },
    {
        id: 4,
        image: PythonProject,
        title: "Intelligent agent with graphs with Python",
        category: "Python",
        link: "https://github.com/vakhtinayeva/Python",
    },
    {
        id: 5,
        image: FrontendProject,
        title: "Minesweeper with HTML/CSS",
        category: "HTML/CSS",
        link: "https://github.com/vakhtinayeva/HTML-CSS",
    },
    {
        id: 6,
        image: TSProject,
        title: "Learning management system in TS",
        category: "TS/Nest",
        link: "https://github.com/vakhtinayeva/TypeScript"
    },
]

const Projects = () => {
    return (
        <section className="projects container section" id="projects">
            <h2 className="section__title">Projects</h2>
            <p className="section__subtitle">
                <span>Commercial</span> projects I have worked on
            </p>

            <div className="projects__container grid">
                {dataWork.map(({id, image, title, category}) => {
                    return (
                        <div className="project__card" key={id}>
                            <div className="project__thumbnail">
                                <img src={image} alt="project" className="project__img"></img>
                                <div className="project__mask"></div>
                            </div>

                            <span className="project__category">{category}</span>
                            <h3 className="project__title">{title}</h3>
                        </div>
                    )
                })}
            </div>

            <p className="section__subtitle">
                <span>Personal</span> projects I have created
            </p>

            <div className="projects__container grid">
                {dataPersonal.map(({id, image, title, category, link}) => {
                    return (
                        <div className="project__card" key={id}>
                            <div className="project__thumbnail">
                                <img src={image} alt="project" className="project__img"></img>
                                <div className="project__mask"></div>
                            </div>

                            <span className="project__category">{category}</span>
                            <h3 className="project__title">{title}</h3>
                            <a href={link} className="project__button">
                                <i className="icon-link project__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;