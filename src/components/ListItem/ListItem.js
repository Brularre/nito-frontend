import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { workerStyles } from '../../utils/constants';

// Styles
import './ListItem.css';

export default function Card({ listData }) {
  const { showWorkerLocation } = useContext(AppContext);

  return (
    <div
      style={workerStyles[listData.area]}
      onClick={() => showWorkerLocation(listData)}
      className="list-item"
    >
      <div className="list-item__content-box">
        <h3 className="list-item__title">{listData.name}</h3>
        <div className="list-item__rating">★★★★★</div>
        <div className="list-item__area">{listData.area}</div>
        <div className="list-item__location">{listData.city}</div>
      </div>
    </div>
  );
}
