import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      {/* <Sidebar></Sidebar> */}
      <main className="main">
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Skills></Skills>
        <Projects></Projects>
        {/* <Technologies></Technologies> */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
