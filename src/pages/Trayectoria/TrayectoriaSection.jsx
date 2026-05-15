import Habilidades from "./Habilidades";
import Estudios from "./Estudios";
import Proyectos from "./Proyectos";
import Ejemplos from "./Ejemplos"
const TrayectoriaSection = () => {
  return (
    <div>
      <section id="habilidades">
        <Habilidades />
      </section>

     

      <section id="estudios">
        <Estudios />
      </section>

      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="final">
        <p style={{ textAlign: "center", marginTop: "2rem", fontStyle: "italic", color: "#555" }}>
          "Siempre aprendiendo, creando y buscando nuevas formas de superar desafíos."
        </p>
      </section>
    </div>
  );
};

export default TrayectoriaSection;
