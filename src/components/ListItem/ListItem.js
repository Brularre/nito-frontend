import './ListItem.css';
import { workerStyles } from '../../utils/constants';

export default function Card({ listData }) {
  console.log(listData);

  return (
    <div style={workerStyles[listData.area]} className="list-item">
      <div className="list-item__content-box">
        <h3 className="list-item__title">{listData.name}</h3>
        <div className="list-item__rating">★★★★★</div>
        <div className="list-item__area">{listData.area}</div>
        <div className="list-item__location">{listData.city}</div>
      </div>
    </div>
  );
}
