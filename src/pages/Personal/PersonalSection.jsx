import Planes from "./Planes";
import Contacto from "./Contacto";
import FooterCV from "./FooterCV";

const PersonalSection = () => {
  return (
    <div>
      
      <section id="contacto">
        <Contacto />
      </section>

      <section id="preguntas">
        <FooterCV />
      </section>
    </div>
  );
};

export default PersonalSection;
