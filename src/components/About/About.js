import './About.css';

export default function About() {
  return (
    <div className="suggested">
      <div className="suggested__header">
        <div>
          <p className="suggested__section-name">─── ¡Saludos!</p>
          <h2 className="suggested__title">Yo soy Bruno</h2>
        </div>
        <p className="about__main-text">
          Este proyecto fue desarrollado en el marco del Proyecto Final de mi
          curso de Desarrollo Web en Practicum para ser Full Stack. Puedes
          encontrar más detalles de mi y mi trabajo en mi Github. Si te interesa
          mi trabajo o quieres preguntarme algo no dudes en contactarme.
        </p>
        <div className="about__contact">
          <button className="about__contact-btn">Repo Front</button>
          <button className="about__contact-btn">Repo Back</button>
          <button className="about__contact-btn">Mi Github</button>
        </div>
      </div>
      <img className="card__container" alt="" />
      <img className="card__container" alt="" />
      <img className="card__container" alt="" />
      <img className="card__container" alt="" />
    </div>
  );
}
