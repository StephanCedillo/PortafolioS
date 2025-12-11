import React from "react";
import "./css/Contacto.css";

const Contacto = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* LADO IZQUIERDO: TEXTO Y REDES */}
        <div className="contact-info">
          <h2>
            Hablemos <br />
            <span className="contact-highlight">de Código.</span>
          </h2>
          <p className="contact-desc">
            Estoy disponible para freelance o contrataciones.
          </p>

          <div className="contact-methods">
            {/* Email */}
            <a href="mailto:tuemail@ejemplo.com" className="method-item">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span>stephan.cedillo@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/stephanCedillo" target="_blank" rel="noopener noreferrer" className="method-item">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span>linkedin.com/in/stephanCedillo</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/StephanCedillo" target="_blank" rel="noopener noreferrer" className="method-item">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <span>github.com/StephanCedillo</span>
            </a>

            {/* Ubicación */}
            <div className="method-item" style={{ cursor: 'default' }}>
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span>Cuenca, Ecuador</span>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: FORMULARIO */}
        <div className="contact-form-wrapper">
            {/* NOTA: Para que este formulario funcione sin backend, 
                puedes usar https://formspree.io/
                Solo regístrate gratis, crea un form y pega la URL en action=""
            */}
          <form action="https://formspree.io/f/TU_ID_DE_FORMSPREE" method="POST">
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Tu Nombre</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="Ej. Juan Pérez" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Tu Correo</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="juan@correo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea id="message" name="message" className="form-textarea" placeholder="Hola Stephan, me gustaría cotizar un proyecto..." required></textarea>
            </div>

            <button type="submit" className="send-btn">
              Enviar Mensaje
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacto;