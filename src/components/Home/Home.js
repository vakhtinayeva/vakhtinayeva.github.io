import "./home.css";
import Me from "../../assets/images/avatar3.jpeg";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="avatar" className="home__img"></img>
                <h1 className="home__name">Yeva Vakhtina</h1>
                <span className="home__education">I'm a web developer</span> <br></br>
                <a href="#contact" className="btn">Contact Me</a>

                <ScrollDown></ScrollDown>
                <Shapes></Shapes>
            </div>

        </section>
    )
}

export default Home;