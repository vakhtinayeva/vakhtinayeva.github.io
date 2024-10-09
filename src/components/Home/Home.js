import "./home.css";
// import Me from "../../assets/images/avatar3.jpeg";
// import ScrollDown from "./ScrollDown";
// import Shapes from "./Shapes";
import { useRef, useEffect } from "react";
import setTyper from "./animation";

const words = [
  "CLEAN CODE",
  "RESPONSIVE DESIGN",
  "AGILE ENTWICKLUNG",
  "MODERNE TECHNOLOGIEN"
];

const Home = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      setTyper(inputRef.current, words);
    }
  }, []);

  return (
    <section className="home container" id="home">
      <div className="home__text-heavy">Hallo!</div>
      <div className="home__text-light">Ich bin Yeva</div>
      <div className="home__text-heavy">Fullstack Entwicklerin</div>
      <div className="home__text-light">Etwas mit dem Text und</div>
      <h1 className="home__text-typing" ref={inputRef}></h1>
      {/* <ScrollDown /> */}
      {/* <Shapes /> */}
    </section>
  );
};

export default Home;
