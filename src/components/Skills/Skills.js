import "./skills.css";
import { experience } from "../../assets/data/experience";
import { knowledge } from "../../assets/data/knowledge";

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>
            <p className="section__subtitle">
                Technologies I have <span>experience</span> with
            </p>
            <div className="skills__container grid">
                {experience.map(({title, content, images}, index) => {
                    return (
                        <div className="skills__item grid">
                            <h3 className="skills__category">{title}</h3>
                            {content.map((item, index) => {
                                return (
                                    <div className="skills__content">
                                        <img src={images[index]} alt="technology" className="skills__img"></img>
                                        <p className="skills__text">{item}</p>
                                    </div>
                                )
                            })}
                        </div>
                    );
                })}
            </div>

            <p className="section__subtitle">
                Technologies I have good <span>understanding</span> of
            </p>
            <div className="skills__container grid">
                {knowledge.map(({title, content, images}, index) => {
                    return (
                        <div className="skills__item grid" key={index}>
                            <h3 className="skills__category">{title}</h3>
                            {content.map((item, index) => {
                                return (
                                    <div className="skills__content">
                                        <img src={images[index]} alt="technology" className="skills__img"></img>
                                        <p className="skills__text">{item}</p>
                                    </div>
                                )
                            })}
                        </div>
                    );

                })}
            </div>


        </section>
    )
}

export default Skills;