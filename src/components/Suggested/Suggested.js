import './Suggested.css';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import { filters } from '../../utils/constants';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

export default function Suggested() {
  const { filteredWorkers, handleWorkersFilter } = useContext(AppContext);
  return (
    <div id="suggested" className="suggested">
      <div className="suggested__header">
        <div>
          <p className="suggested__section-name">─── Recomendados</p>
          <h2 className="suggested__title">Datitos en tu Área</h2>
        </div>
        <div className="suggested__filter-container">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => handleWorkersFilter(filter.value)}
              color={filter.color}
              value={filter.value}
              text={filter.text}
            />
          ))}
        </div>
      </div>
      <div className="suggested__list">
        {filteredWorkers.map((worker) => (
          <ListItem listData={worker} key={worker._id} />
        ))}
      </div>
    </div>
  );
}
