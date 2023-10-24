import { useState } from "react";

const Card = (props) => {
  const [readMore, setReadMore] = useState(false);

  const expand = () => {
    setReadMore(!readMore);
  }

  if (props.year) {
    return (
      <div className="card__item">
        <i className={props.icon}></i>
        <span className="card__date">{props.year}</span>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.desc}</p>
        <button className="expand" onClick={expand}>{readMore ? "Read less" : "Read more"}</button>
        <p className={readMore ? "card__fulltext" : "card__empty"} >
          {props.text}
        </p>
      </div>
    );
  } else {
    const content = props.desc.map((value) => {
      return <p className="card__text">{value}</p>;
    });
    return (
      <div className="card__item">
        <i className={props.icon}></i>
        <h3 className="card__title">{props.title}</h3>
        {content}
      </div>
    );
  }
};

export default Card;
