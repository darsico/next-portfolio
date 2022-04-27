import { Lottie } from "lottie-react";
import Section from "../Section";
import animConnect from "../../src/lotties/connect-lottie.json";
// import { useRef } from "react";

const Contact = () => {
  // const lottieRef = useRef();
  return (
    <Section className="section contact">
      <figure className="contact__img">{/* <Lottie animationData={animConnect} autoplay={true} /> */}</figure>
      <form action="/" className="form" id="form">
        <h3 className="form__title">Póngase en contacto para nuevas oportunidades o solo para saludar :)</h3>
        <div className="form__input-list">
          <input className="form__input" placeholder="Nombre" type="text" id="nombre" required />
          <input className="form__input" placeholder="Email" type="email" name="email" id="email" required />
          <input
            className="form__input form__input--message"
            placeholder="Escribe el mensaje aquí."
            type="text"
            id="message"
            required
          />
        </div>
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </Section>
  );
};

export default Contact;
