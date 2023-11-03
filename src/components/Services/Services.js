import "./services.css";
import ServicesCard from "./ServicesCard";
import { services } from "../../assets/data/services";

const Services = () => {
    return (
        <section className="services container section" id="services">
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
        </section>
    )
}

export default Services;