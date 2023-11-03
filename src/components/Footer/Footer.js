import "./footer.css";

const Footer = () => {
  return (
    <footer id="contact">
      <svg
        className="footer-wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          className="footer-wave-path"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <div className="contact__title">Get In Touch &nbsp;👋</div>

      <div className="contact__social">
        <a
          className="contact__social-link"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vakhtina.yeva@gmail.com&su=Web Resume Response"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a className="contact__social-link" href="https://wa.me/380638686801">
          <i class="fa-brands fa-square-whatsapp"></i>
        </a>
        <a
          className="contact__social-link"
          href="https://github.com/vakhtinayeva"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          className="contact__social-link"
          href="https://www.instagram.com/eve._va/"
        >
          <i class="fa-brands fa-square-instagram"></i>
        </a>
      </div>

      <ul className="contact__nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <div className="copyright">YV © 2023</div>
    </footer>
  );
};

export default Footer;
