import "./services.css";
import Design from "../../assets/design1.png";
import Implementation from "../../assets/implementation2.png";
import Integration from "../../assets/integration1.png";
import Testing from "../../assets/testing1.png";
import Card from "./Card"

const data = [
    {
        id: 1,
        image: Design,
        title: "Design",
        description: "I have had hands-on experience with design of software systems by way of structuring their components, deciding how they will interact, and planning their functionality. My tasks involved analyzing requirements, breaking down tasks into smaller, manageable pieces, and organizing them efficiently to ensure the processes ran smoothly."
    },
    {
        id: 2,
        image: Implementation,
        title: "Implementation",
        description: "Software implementation is one of my key skills. I specialize in the practical process of turning software concepts into working applications. During my time as a Node.js developer it involved writing the code and configuring the necessary components to bring software designs to life. With expertise in software implementation, I can efficiently and effectively build the digital solutions envisioned."
    },
    {
        id: 3,
        image: Integration,
        title: "Integration",
        description: "Software integration is one of my core competencies. I was responsible for ensuring various software systems and technologies work seamlessly together. My experience in software integration allows me to connect different components, such as databases, APIs, or third-party services enabling them to communicate and share data, resulting in a more efficient and cohesive digital ecosystem."
    },
    {
        id: 4,
        image: Testing,
        title: "Testing",
        description: "I've worked extensively with software testing, encompassing the systematic process of evaluating and validating software to identify and resolve issues. With proficiency in various testing methods, such as unit, integration, and end to end testing, I ensure that software applications operate flawlessly and enhance the quality and reliability of software products."
    },
]

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
            {data.map((value) => {
            return (
              <Card
                id={value.id}
                image={value.image}
                title={value.title}
                description={value.description}
              ></Card>
            );
          })}
            </div>
        </section>
    )
}

export default Services;