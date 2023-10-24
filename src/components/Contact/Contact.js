import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk!</h3>
          <p className="contact__details">Send me a message [TODO] </p>

          <div className="contact__social">
            <a href="" className="contact__social-link" target="_blank">
              <i class="fa-solid fa-envelope"></i>
              vakhtina.yeva@gmail.com
            </a>
            <a href="" className="contact__social-link" target="_blank">
              <i class="fa-brands fa-square-whatsapp"></i>
              +380638686801
            </a>
            <a href="" className="contact__social-link" target="_blank">
              <i class="fa-brands fa-github"></i>
              vakhtinayeva
            </a>
            <a href="" className="contact__social-link" target="_blank">
              <i class="fa-brands fa-square-instagram"></i>
              @eve._va
            </a>
          </div>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              ></input>
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
              ></input>
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            ></input>
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              row="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
