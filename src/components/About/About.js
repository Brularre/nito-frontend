import './About.css';
import aboutMainImage from '../../images/about_main-image.jpg';

export default function About() {
  return (
    <div id="about" className="about">
      <div>
        <div className="about__header">
          <div>
            <p className="about__section-name">─── ¡Saludos!</p>
            <h2 className="about__title">Yo soy Bruno</h2>
          </div>
          <p className="about__description">
            Soy un Desarrollador Full Stack nacido y criado en la Región de
            Valparaíso de Chile. Espero seguir creciendo en el mundo del
            desarrollo y llegar a crear software.
          </p>
          <p className="about__description">
            Nito fue desarrollado en el marco del Proyecto Final de mi curso de
            Desarrollo Web en Practicum para ser Full Stack. Puedes encontrar
            más detalles de mi y mi trabajo en mi Github. Si te interesa mi
            trabajo o quieres preguntarme algo no dudes en contactarme.
          </p>
          <div className="about__contact">
            <a
              href="https://github.com/Brularre/nito-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <button className="about__contact-btn">Repo Front</button>
            </a>
            <a
              href="https://github.com/Brularre/nito-backend"
              target="_blank"
              rel="noreferrer"
            >
              <button className="about__contact-btn">Repo Back</button>
            </a>
            <a
              href="https://github.com/Brularre/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="about__contact-btn">Mi Github</button>
            </a>
          </div>
        </div>
      </div>
      <img
        className="about__image about__main-image"
        src={aboutMainImage}
        alt="Foto del creador del sitio"
      />
    </div>
  );
}
