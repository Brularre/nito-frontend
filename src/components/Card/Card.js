import './Card.css';

export default function Card({ cardData }) {
  console.log(cardData);
  return (
    <>
      <div className="card">
        <div className="card__badge"></div>
        <div
          className="card__map"
          src="../../images/card__placeholder.png"
        ></div>
        <div className="card__content-box">
          <h3 className="card__title">{cardData.name}</h3>
          <p className="card__area">{cardData.area}</p>
          <div className="card__rating">★★★★★</div>
          <div className="card__location">{cardData.city}</div>
        </div>
      </div>
    </>
  );
}
