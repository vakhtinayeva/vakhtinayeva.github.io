const ProjectsCard = (props) => {
  const description = (
    <span className="project__description">{props.description}</span>
  );
  const link = (
    <a href={props.link} className="project__button">
      <i className="icon-link project__button-icon"></i>
    </a>
  );

  return (
    <div className="project__card" key={props.id}>
      <div className="project__thumbnail">
        <img src={props.image} alt="project" className="project__img"></img>
        <div className="project__mask"></div>
      </div>

      <span className="project__category">{props.category}</span>
      <h3 className="project__title">{props.title}</h3>
      {props.link ? link : description}
    </div>
  );
};

export default ProjectsCard;
