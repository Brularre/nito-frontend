import './Suggested.css';
import Card from '../Card/Card';

export default function Suggested({ workers }) {
  return (
    <div className="suggested">
      <div className="suggested__header">
        <div>
          <p className="suggested__section-name">─── Recomendados</p>
          <h2 className="suggested__title">Datitos en tu Área</h2>
        </div>
        <div className="suggested__filter-container">
          <button className="suggested__filter-btn">Automotriz🚗</button>
          <button className="suggested__filter-btn">Construcción🚧</button>
          <button className="suggested__filter-btn">Electricidad🔌</button>
          <button className="suggested__filter-btn">Limpieza🧹</button>
          <button className="suggested__filter-btn">Pintura🖌️</button>
          <button className="suggested__filter-btn">Plomería🔧</button>
          <button className="suggested__position-btn">&gt;</button>
          <button className="suggested__position-btn">&lt;</button>
        </div>
      </div>
      <div className="card__container">
        {/* {workers.map((worker) => (
          <Card cardData={worker} key={worker._id} />
        ))} */}
      </div>
    </div>
  );
}
