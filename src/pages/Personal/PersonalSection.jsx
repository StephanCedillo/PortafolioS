import Planes from "./Planes";
import Contacto from "./Contacto";
import Preguntas from "./Preguntas";

const PersonalSection = () => {
  return (
    <div>
      <section id="planes">
        <Planes />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

      <section id="preguntas">
        <Preguntas />
      </section>
    </div>
  );
};

export default PersonalSection;
