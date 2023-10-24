import { useState } from "react";

const Card = (props) => {
    const [hidden, setHidden] = useState(false);

    const hide = () => {
      setHidden(!hidden);
    }

    return (
        <div className="services__card" key={props.id} onClick={hide}>
            <img src={props.image} alt="service" className={hidden ? "services__img hidden" : "services__img"}></img>
            <h3 className="services__title">{props.title}</h3>
            <p className={hidden ? "services__description__full" : "services__description"}>{props.description}</p>
            {hidden ? <></> : <div className="dimmer"></div>}
        </div>
    )
}

export default Card;