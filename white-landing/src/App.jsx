import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";
import "./App.css";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaUniversity,
  FaBars,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa";

import { BsPhoneFill } from "react-icons/bs";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [proyectoAbierto, setProyectoAbierto] = useState(null);
  const [equipoAbierto, setEquipoAbierto] = useState(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [documentoAbierto, setDocumentoAbierto] = useState(null);

const toggleDocumento = (id) => {
  setDocumentoAbierto(documentoAbierto === id ? null : id);
};

  const [listaComentarios, setListaComentarios] = useState([
    {
      id: 1,
      nombre: "Carlos Mendoza",
      texto: "Excelente labor la que hacen en Colombia. ¡Bendiciones!",
      fecha: "15/06/2026"
    },
    {
      id: 2,
      nombre: "Diana Restrepo",
      texto: "Un equipo muy comprometido con el desarrollo sostenible y el apoyo a las comunidades. ¡Sigan adelante!",
      fecha: "18/05/2026"
    },
    {
      id: 3,
      nombre: "Andrés Felipe Ospina",
      texto: "Es inspirador ver proyectos con tanto impacto social y transparencia. Felicitaciones por la gestión.",
      fecha: "21/04/2026"
    },
    {
      id: 4,
      nombre: "María Camila Torres",
      texto: "Tuve la oportunidad de conocer su trabajo de cerca y es impecable. Un fuerte abrazo a todo el equipo.",
      fecha: "04/03/2026"
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleProyecto = (id) => {
    setProyectoAbierto(proyectoAbierto === id ? null : id);
  };

  const toggleEquipo = (id) => {
    setEquipoAbierto(equipoAbierto === id ? null : id);
  };

  const handleEnviarComentario = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !comentario.trim()) {
      alert("Por favor, completa los campos obligatorios (*)");
      return;
    }

    const templateParams = {
      from_name: nombre,
      from_email: correo || "No proporcionado",
      message: comentario,
    };

    emailjs
      .send(
        'service_wa5bs12',     
        'template_d6uhl9a',    
        templateParams,
        'lwcerU__7CCDml_cz'      
      )
      .then((response) => {
        console.log('¡Correo enviado con éxito!', response.status, response.text);
        alert("¡Mensaje enviado correctamente a nuestro correo!");

        const nuevoComentario = {
          id: Date.now(), 
          nombre: nombre,
          texto: comentario,
          fecha: new Date().toLocaleDateString('es-CO') 
        };

        setListaComentarios([nuevoComentario, ...listaComentarios]);
        setNombre("");
        setCorreo("");
        setComentario("");
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
      });
  };

  // 👈 AQUÍ FALTABA EL RETURN QUE ENCAPSULA TODO EL CONTENIDO VISUAL
  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
        <div className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}logo4.png`} alt="WHITE" className="logo-navbar" />
        </div>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#equipo" onClick={() => setMenuOpen(false)}>Equipo</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#donaciones" onClick={() => setMenuOpen(false)}>Donaciones</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="inicio">
        <div className="hero-content">
          <img
            src="/logo1.png"
            alt="WHITE International Ministry"
            className="logo"
          />
          <h1>
            Transformando vidas mediante el amor de Dios
          </h1>
          <p>
            Impactando comunidades mediante acciones sociales,
            acompañamiento espiritual y proyectos que llevan esperanza
            a diferentes lugares del mundo.
          </p>
          <div className="buttons">
            <a href="#proyectos" className="btn">
              Nuestros proyectos
            </a>
            <a href="#donaciones" className="btn-outline">
              Donar
            </a>
          </div>
        </div>
      </header>

      {/* NOSOTROS */}
      <section className="section" id="about">
        <div className="nosotros-grid">
          <div className="nosotros-image">
            <img src={`${import.meta.env.BASE_URL}logo4.png`} alt="Fundación WHITE" />
          </div>
          <div className="nosotros-text">
            <span className="section-tag">NUESTRA HISTORIA</span>
            <h2>Creemos que un acto de amor puede cambiar una historia…y muchas historias pueden transformar el mundo.</h2>
            <p>WHITE International Ministry es una organización sin ánimo de lucro fundada en Manizales, Colombia.</p>
            <p>Nuestro propósito es expandir el evangelio mediante acciones sociales y espirituales. Creeemos que la fe se demuestra a través del amor, el servicio y la esperanza.</p>
          </div>
        </div>
      </section>

      {/* MISION Y VISION */}
      <section className="section">
        <div className="cards">
          <div className="card vision-card">
            {/*<div className="card-number">01</div>*/}
            <h3>Misión</h3>
            <p>Impactar y transformar vidas mediante el poder de Dios, promoviendo la restauración integral de personas y comunidades, a través de acciones sociales fundamentadas en principios y valores cristianos.</p>
          </div>
          <div className="card vision-card">
            {/*<div className="card-number">02</div>*/}
            <h3>Visión</h3>
            <p>Para el 2035, ser una organización de impacto global, reconocida por transformar vidas y comunidades en diferentes continentes, formando miles de personas como agentes de cambio en sus familias, comunidades y naciones; mediante el desarrollo de acciones de asistencia y desarrollo social integral.</p>
          </div>
        </div>
      </section>

      {/* ÁREAS DE IMPACTO */}
      <section className="section">
        <h3 className="title-center">¿Qué hacemos?</h3>
        <div className="cards">
          <div className="card service-card">
            <h3>Acompañamiento Espiritual</h3>
            <p>Queremos ayudarte en tu desarrollo espiritual, a fortalecer tu relación con Jesucristo y a cimentar tu Fe. El equipo WHITE brinda consejería y acompañamiento en sanidad interior, liberación y restauración personal y familiar.</p>
          </div>
          <div className="card service-card">
            <h3>Campañas Evangelísticas</h3>
            <p>Desarrollamos campañas evangelísticas por todo el territorio colombiano. Vamos a donde Dios nos lo indique. Llegamos a tu comunidad para compartir las buenas nuevas del reino de Dios y para ser testigos del poder del Espíritu Santo en miles de personas.</p>
          </div>
          <div className="card service-card">
            <h3>Desarrollo Social Integral</h3>
            <p>Desarrollamos proyectos y actividades de asistencia social integral dirigidos a la población necesitada, sin distinción de raza, género, condición económica o nacionalidad, promoviendo la protección de sus derechos y el mejoramiento de su calidad de vida.</p>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="section" id="equipo">
        <div className="section-header">
          <h2 className="title-center">Nuestro equipo</h2>
        </div>
        <div className="cards">
          {/* JOSE */}
          <div className="card team-card">
        <img
              src="/public/1.png"
              alt="/public/1.png"
              className="team-photo"
            />
            <h3>Jose Fernando Miranda Gómez</h3>
            <p>Líder de proyectos sociales, turísticos y ambientales.</p>
            <button className="btn-proyecto" onClick={() => toggleEquipo(1)}>
              {equipoAbierto === 1 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${equipoAbierto === 1 ? "abierto" : ""}`}>
              <p>Zootecnista, Administrador Turístico y Guía Profesional de Turismo, Especialista en Docencia Universitaria, con más de 20 años de experiencia como docente, asesor y consultor en proyectos sociales, turísticos y ambientales. Ha contribuido al diseño, implementación y evaluación de iniciativas orientadas al desarrollo sostenible, la conservación ambiental y el fortalecimiento de comunidades a través del turismo responsable.</p>
            </div>
          </div>

          {/* ELENA */}
          <div className="card team-card">
            <img src={`${import.meta.env.BASE_URL}Elena.jpeg`} alt="Luz Elena Ortíz Cano" className="team-photo" />
            <span className="cargo">Directora de Proyectos</span>
            <h3>Luz Elena Ortíz Cano</h3>
            <p>Especialista en innovación social y desarrollo comunitario.</p>
            <button className="btn-proyecto" onClick={() => toggleEquipo(2)}>
              {equipoAbierto === 2 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${equipoAbierto === 2 ? "abierto" : ""}`}>
              <p>Relacionista pública con más de 15 años de experiencia en la gestión y ejecución de proyectos de innovación social. Ha liderado iniciativas orientadas al desarrollo comunitario, la inclusión social y la generación de impacto sostenible, articulando esfuerzos entre los sectores público y privado, así como con organizaciones de la sociedad civil.</p>
            </div>
          </div>

          {/* ERIKA */}
          <div className="card team-card">
            <img src={`${import.meta.env.BASE_URL}Erika.jpeg`} alt="Erika Agelvis" className="team-photo" />
            <span className="cargo">Secretaria General</span>
            <h3>Erika Agelvis</h3>
            <p>Ingeniera Agroalimentaria y auditora en calidad.</p>
            <button className="btn-proyecto" onClick={() => toggleEquipo(3)}>
              {equipoAbierto === 3 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${equipoAbierto === 3 ? "abierto" : ""}`}>
              <p>Ingeniera Agroalimentaria y auditora en Sistemas de Gestión de Calidad, con más de 10 años de experiencia en la implementación y gestión documental de procedimientos. Cuenta con manejo del sistema de seguridad alimentaria HACCP (Hazard Analysis and Critical Control Points – Análisis de Peligros y Puntos Críticos de Control), así como experiencia en el seguimiento de la ejecución de proyectos comunitarios con enfoque social y en la administración eficiente de recursos para su desarrollo.</p>
            </div>
          </div>

          {/* MARTIN */}
          <div className="card team-card">
            <img src={`${import.meta.env.BASE_URL}Martin.jpeg`} alt="Martín Emilio Marulanda" className="team-photo" />
            <span className="cargo">Revisor Fiscal</span>
            <h3>Martín Emilio Marulanda</h3>
            <p>Contador público y asesor financiero institucional.</p>
            <button className="btn-proyecto" onClick={() => toggleEquipo(4)}>
              {equipoAbierto === 4 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${equipoAbierto === 4 ? "abierto" : ""}`}>
              <p>Contador público con más de 15 años de experiencia en procesos de acompañamiento en revisoría fiscal, con una sólida trayectoria en el aseguramiento de la transparencia, el cumplimiento normativo y la correcta gestión financiera de las organizaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="section" id="proyectos">
        <div className="section-header">
          <span className="section-tag">NUESTROS PROYECTOS</span>
          <h2 className="title-center">Nuestros proyectos</h2>
          <p className="section-description">Programas diseñados para transformar vidas, fortalecer comunidades y llevar esperanza.</p>
        </div>
        <div className="projects-container">
          {/* CLINICA DEL ALMA */}
          <div className="card project-card">
            <div className="card-image">
              <img src={`${import.meta.env.BASE_URL}Clinica1.png`} alt="Clínica del Alma" />
            </div>
            <h3>Clínica del Alma</h3>
            <p>Programa de fortalecimiento espiritual y restauración interior.</p>
            <button className="btn-proyecto" onClick={() => toggleProyecto(1)}>
              {proyectoAbierto === 1 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${proyectoAbierto === 1 ? "abierto" : ""}`}>
              <p>“Clínica del Alma” es un programa apoyado por la Fundación White; orientado a brindar acompañamiento espiritual a través de contenidos inspirados en la Palabra de Dios.
              Por medio de jornadas de oración, capacitaciones y mensajes de reflexión, compartidos en diferentes plataformas digitales, se llega diariamente a cientos de personas.
              Nuestro propósito es fortalecer la fe, renovar la esperanza y aportar paz en medio de las dificultades, promoviendo una conexión más profunda con Dios como fuente de sanación y guía.
              “Clínica del Alma” es un refugio espiritual donde cada mensaje se convierte en una oportunidad para sanar, crecer y encontrar propósito.
              </p>
            </div>
          </div>

          {/* JESUS SOBRE RUEDAS */}
          <div className="card project-card">
            <div className="card-image">
              <img src={`${import.meta.env.BASE_URL}jesus.png`} alt="Jesús Sobre Ruedas" />
            </div>
            <h3>Jesús Sobre Ruedas</h3>
            <p>Recorremos Colombia llevando esperanza a cada comunidad.</p>
            <button className="btn-proyecto" onClick={() => toggleProyecto(2)}>
              {proyectoAbierto === 2 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${proyectoAbierto === 2 ? "abierto" : ""}`}>
              <p>“Jesús sobre ruedas” es una iniciativa de la Fundación White que recorre en bicicleta los 32 departamentos de Colombia, llevando un mensaje transformador a cada territorio.
                A través de esta expedición, desarrollamos charlas, talleres y conferencias pro-vida, fundamentadas en principios y valores cristianos, dirigidas a personas, comunidades y organizaciones que buscan fortalecer su propósito y bienestar integral.
                Este proyecto une el deporte, la vocación de servicio y la fe, convirtiendo cada kilómetro en una oportunidad para impactar vidas, inspirar cambios positivos y sembrar esperanza en diferentes contextos sociales.
                Más que un recorrido, es una misión: conectar corazones, transformar realidades y llevar un mensaje de vida a cada rincón del país.
              </p>
            </div>
          </div>

          {/* SERES EN EQUILIBRIO */}
          <div className="card project-card">
            <div className="card-image">
              <img src={`${import.meta.env.BASE_URL}seres.png`} alt="Seres en Equilibrio" />
            </div>
            <h3>Seres en Equilibrio</h3>
            <p>Promovemos la salud mental y el bienestar emocional.</p>
            <button className="btn-proyecto" onClick={() => toggleProyecto(3)}>
              {proyectoAbierto === 3 ? "Ver menos" : "Ver más"}
            </button>
            <div className={`contenido-proyecto ${proyectoAbierto === 3 ? "abierto" : ""}`}>
              <p>Seres en Equilibrio acompaña a las personas en su recuperación emocional, fortaleciendo el equilibrio entre cuerpo, mente y bienestar integral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DONACIONES */}
      <section className="donaciones" id="donaciones">
        <h2>Tu aporte hace posible nuestra misión</h2>
        <p>Cada donación se convierte en esperanza.</p>
        <div className="donation-box">
          <div className="payment-card">
            <div className="payment-icon"><FaUniversity /></div>
            <div>
              <h3>Davivienda</h3>
              <strong>488413128163</strong>
            </div>
          </div>
          <div className="payment-card">
            <div className="payment-icon nequi-icon"><BsPhoneFill /></div>
            <div>
              <h3>Nequi</h3>
              <strong>321 616 4309</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section contacto-section" id="contacto">
        <div className="section-header">
          <span className="section-tag">CONTÁCTANOS</span>
          <h2 className="title-center">Queremos escucharte</h2>
          <p className="section-description">Déjanos un mensaje y forma parte de nuestra comunidad.</p>
        </div>
        <div className="contacto-contenedor">
          {/* FORMULARIO */}
          <form onSubmit={handleEnviarComentario} className="contacto-form">
            <div className="form-group">
              <label>Nombre completo *</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="correo@ejemplo.com" />
            </div>
            <div className="form-group">
              <label>Mensaje *</label>
              <textarea rows="5" value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Escribe tu mensaje..." />
            </div>
            <button className="btn-enviar"><FaPaperPlane /> Enviar mensaje</button>
          </form>

          {/* COMUNIDAD */}
          <div className="comentarios-muro">
            <h3>💙 Comunidad WHITE</h3>
            <div className="comentarios-lista">
              {listaComentarios.map((c) => (
                <div key={c.id} className="comentario-item">
                  <div className="comentario-header">
                    <strong>{c.nombre}</strong>
                    <span>{c.fecha}</span>
                  </div>
                  <p>{c.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Documentos */}
    <section className="section" id="documentos">
      <div className="section-header">
        <span className="section-tag">TRANSPARENCIA</span>

        <h2 className="title-center">
          Documentación DIAN
        </h2>

        <p className="section-description">
          En cumplimiento de la normatividad vigente, ponemos a disposición los documentos oficiales de la Fundación WHITE International Ministry.
        </p>
      </div>

      <div className="document-card">

        <button
          className="btn-documento"
          onClick={() => setDocumentosAbiertos(!documentosAbiertos)}
        >
          {documentosAbiertos
            ? "▼ Ocultar documentos"
            : "► Ver documentos"}
        </button>

        <div className={`contenido-documentos ${documentosAbiertos ? "abierto" : ""}`}>

          <a href={`${import.meta.env.BASE_URL}documentos/1_certificado_existencia_representacion_legal.pdf`} target="_blank" rel="noreferrer">
            📄 Certificado de existencia y representación legal
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/2_estatutos_fundacion_white.pdf`} target="_blank" rel="noreferrer">
            📄 Estatutos Fundación White
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/3_acta_constitucion.pdf`} target="_blank" rel="noreferrer">
            📄 Acta de constitución
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/4_certificacion_antecedentes_judiciales.pdf`} target="_blank" rel="noreferrer">
            📄 Certificación antecedentes judiciales
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/5_certificacion_cargos_directivos.pdf`} target="_blank" rel="noreferrer">
            📄 Certificación cargos directivos y gerenciales
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/6_estados_financieros_apertura.pdf`} target="_blank" rel="noreferrer">
            📄 Estados financieros de apertura
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/7_certificacion_cumplimiento_requisitos.pdf`} target="_blank" rel="noreferrer">
            📄 Certificación cumplimiento de requisitos
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/8_acta_autorizacion_representante_legal.pdf`} target="_blank" rel="noreferrer">
            📄 Acta - Autorización representante legal
          </a>

          <a href={`${import.meta.env.BASE_URL}documentos/9_solicitud_dian_rte.pdf`} target="_blank" rel="noreferrer">
            📄 Solicitud DIAN-RTE
          </a>

        </div>
      </div>
    </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <img src={`${import.meta.env.BASE_URL}logo4.png`} alt="WHITE" className="footer-logo" />
          <h2>WHITE International Ministry</h2>
          <p>📍 Manizales · Caldas · Colombia</p>
          <p>📱 +57 322 613 6237</p>
          <p>✉️ whiteinternationalministry@gmail.com</p>
          <div className="footer-redes">
            <a href="https://www.instagram.com/fundacionwhiteintministry/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://web.facebook.com/whiteintministry" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@whiteintministry" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
          <div className="copyright">
            © 2026 WHITE International Ministry<br />Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/573216164309" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
