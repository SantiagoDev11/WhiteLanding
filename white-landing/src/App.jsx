import { useState } from "react";
import "./App.css";

import {
  FaUniversity,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

import { BsPhoneFill } from "react-icons/bs";

function App() {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);

  const toggleProyecto = (id) => {
    setProyectoAbierto(proyectoAbierto === id ? null : id);
  };

  return (
    <div className="app">

      {/* HERO */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
        <img
            src={`${import.meta.env.BASE_URL}logo1.png`}
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

      {/* QUIÉNES SOMOS */}
      <section className="section about">
      <div className="about-image">
        <img
          src="Whitelandig/public/prueba/3.png"
          alt="Fundación White"
          className="about-photo"
        />
      </div>
        <div className="about-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            WHITE es una organización sin ánimo de lucro fundada en
            Manizales, Colombia, con el propósito de expandir el evangelio
            de Jesucristo mediante acciones concretas que transforman vidas.
          </p>
          <p>
            Creemos que la fe cobra vida cuando se traduce en servicio,
            amor y esperanza para las comunidades.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="section">
        <h2 className="title-center">
          Nuestra Misión y Visión
        </h2>
        <div className="cards">
          <div className="card">
            <h3>Misión</h3>
            <p>
              Impactar y transformar vidas mediante el poder de Dios,
              promoviendo la restauración integral de personas y comunidades,
              a través de acciones sociales fundamentadas en principios y valores cristianos.
            </p>
          </div>
          <div className="card">
            <h3>Visión</h3>
            <p>
              Para el 2035, ser una organización de impacto global,
              reconocida por transformar vidas y comunidades en diferentes continentes,
              formando miles de personas como agentes de cambio en sus familias,
              comunidades y naciones.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ HACE WHITE */}
      <section className="section">
        <h2 className="title-center">
          ¿Qué hace WHITE?
        </h2>
        <div className="cards">
          <div className="card">
            <h3>Acompañamiento Espiritual</h3>
            <p>
              Queremos ayudarte en tu desarrollo espiritual y fortalecer
              tu relación con Jesucristo mediante consejería y restauración.
            </p>
          </div>
          <div className="card">
            <h3>Campañas Evangelísticas</h3>
            <p>
              Llevamos las buenas nuevas del evangelio a diferentes
              comunidades en todo el territorio colombiano.
            </p>
          </div>
          <div className="card">
            <h3>Desarrollo Social Integral</h3>
            <p>
              Promovemos iniciativas educativas, sociales, culturales,
              deportivas y ambientales para poblaciones vulnerables.
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="section">
        <h2 className="title-center">
          Conoce Nuestro Equipo
        </h2>
        <div className="cards">
          <div className="card team-card">
        <img
              src="white-landing/public/1.png"
              alt="/public/1.png"
              className="team-photo"
            />
            <h3>Jose Fernando Miranda Gómez</h3>
            <span className="cargo">
              Director General
            </span>
            <p>
              Zootecnista, Administrador Turístico y Guía Profesional de Turismo.
              Cuenta con más de 20 años de experiencia en proyectos sociales,
              turísticos y ambientales enfocados en el desarrollo sostenible.
            </p>
          </div>

          <div className="card team-card">
           <img
              src="/public/2.png"
              alt="/public/2.png"
              className="team-photo"
            />
            <h3>Luz Elena Ortíz Cano</h3>
            <span className="cargo">
              Directora de Proyectos
            </span>
            <p>
              Relacionista pública con más de 15 años de experiencia en
              innovación social y desarrollo comunitario, articulando esfuerzos
              entre entidades públicas y privadas.
            </p>
          </div>

          <div className="card team-card">
            <div className="team-photo"></div>
            <h3>Erika Agelvis</h3>
            <span className="cargo">
              Secretaria General
            </span>
            <p>
              Ingeniera Agroalimentaria y auditora en Sistemas de Gestión de Calidad,
              con amplia experiencia en proyectos comunitarios y administración de recursos.
            </p>
          </div>

          <div className="card team-card">
            <div className="team-photo"></div>
            <h3>Martín Emilio Marulanda</h3>
            <span className="cargo">
              Revisor Fiscal
            </span>
            <p>
              Contador público con más de 15 años de experiencia en revisoría fiscal,
              transparenación y gestión financiera organizacional.
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="section" id="proyectos">
        <h2 className="title-center">
          Nuestros proyectos
        </h2>
        <div className="cards">
          {/* CLÍNICA DEL ALMA */}
          <div className="card">
            <div className="card-image"></div>
            <h3>CLÍNICA DEL ALMA</h3>
            <p>
              Un espacio de fortalecimiento espiritual para el bienestar interior.
            </p>
            <button
              className="btn-proyecto"
              onClick={() => toggleProyecto(1)}
            >
              {proyectoAbierto === 1 ? "Ver menos" : "Ver más"}
            </button>
            {proyectoAbierto === 1 && (
              <div className="contenido-proyecto">
                <p>
                  Programa orientado a brindar acompañamiento espiritual
                  mediante contenidos inspirados en la Palabra de Dios.
                </p>
                <p>
                  Por medio de jornadas de oración, capacitaciones y
                  mensajes de reflexión llegamos diariamente a cientos de personas.
                </p>
                <p>
                  Nuestro propósito es fortalecer la fe, renovar la esperanza
                  y aportar paz en medio de las dificultades.
                </p>
              </div>
            )}
          </div>

          {/* JESÚS SOBRE RUEDAS */}
          <div className="card">
            <div className="card-image"></div>
            <h3>JESÚS SOBRE RUEDAS</h3>
            <p>
              Una travesía por Colombia llevando esperanza y propósito.
            </p>
            <button
              className="btn-proyecto"
              onClick={() => toggleProyecto(2)}
            >
              {proyectoAbierto === 2 ? "Ver menos" : "Ver más"}
            </button>
            {proyectoAbierto === 2 && (
              <div className="contenido-proyecto">
                <p>
                  “Jesús sobre ruedas” es una iniciativa de la Fundación White que recorre en bicicleta los 32 departamentos de Colombia, llevando un mensaje transformador a cada territorio.
                </p>
                <p>
                  A través de esta expedición, desarrollamos charlas, talleres y conferencias pro-vida, fundamentadas en principios y valores cristianos, dirigidas a personas, comunidades y organizaciones que buscan fortalecer su propósito y bienestar integral.
                </p>
                <p>
                  Este proyecto une el deporte, la vocación de servicio y la fe, convirtiendo cada kilómetro en una oportunidad para impactar vidas, inspirar cambios positivos y sembrar esperanza en diferentes contextos sociales.
                </p>
              </div>
            )}
          </div>

          {/* SERES EN EQUILIBRIO */}
          <div className="card">
            <div className="card-image"></div>
            <h3>SERES EN EQUILIBRIO</h3>
            <p>
              Fortalecimiento de la salud mental y bienestar emocional.
            </p>
            <button
              className="btn-proyecto"
              onClick={() => toggleProyecto(3)}
            >
              {proyectoAbierto === 3 ? "Ver menos" : "Ver más"}
            </button>
            {proyectoAbierto === 3 && (
              <div className="contenido-proyecto">
                <p>
                  Programa integral que acompaña procesos de recuperación emocional.
                </p>
                <ul>
                  <li>Fortalecer el bienestar emocional.</li>
                  <li>Promover el autocuidado.</li>
                  <li>Contribuir al equilibrio entre cuerpo y mente.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DONACIONES */}
      <section className="donaciones" id="donaciones">
        <h2>Apoya nuestra misión</h2>
        <p>
          Tu aporte ayuda a transformar vidas.
        </p>
        <div className="donation-box">
          {/* DAVIVIENDA */}
          <div className="payment-card">
            <div className="payment-icon">
              <FaUniversity />
            </div>
            <div style={{ textAlign: "left" }}>
              <h3>Davivienda</h3>
              <p>Cuenta de ahorros: 488413128163</p>
            </div>
          </div>

          {/* NEQUI */}
          <div className="payment-card">
            <div className="payment-icon nequi-icon">
              <BsPhoneFill />
            </div>
            <div style={{ textAlign: "left" }}>
              <h3>Nequi</h3>
              <p>321 616 4309</p>
            </div>
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="social-section">
        <h2>Síguenos en nuestras redes sociales</h2>
        <p className="social-text">
          Conéctate con nuestra comunidad y conoce todas las actividades,
          proyectos y mensajes que compartimos diariamente.
        </p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/fundacionwhiteintministry/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://web.facebook.com/whiteintministry"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card facebook"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.youtube.com/@whiteintministry"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card youtube"
          >
            <FaYoutube />
            <span>YouTube</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h2>Contáctanos</h2>
        <p>Manizales - Caldas - Colombia</p>
        <p>+57 322 613 6237</p>
        <p>whiteinternationalministry@gmail.com</p>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/573126850505"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default App;
