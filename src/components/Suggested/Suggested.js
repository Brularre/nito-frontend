import './Suggested.css';
import FilterButton from '../FilterButton/FilterButton';
import ListItem from '../ListItem/ListItem';
import { filters } from '../../utils/constants';

export default function Suggested(props) {
  return (
    <div id="suggested" className="suggested">
      <div className="suggested__header">
        <div>
          <p className="suggested__section-name">─── Recomendados</p>
          <h2 className="suggested__title">Datitos en tu Área</h2>
        </div>
        <div className="suggested__filter-container">
          {filters.map((filter) => (
            <FilterButton
              key={filter.value}
              onClick={props.filterWorkers}
              color={filter.color}
              value={filter.value}
              text={filter.text}
            />
          ))}
        </div>
      </div>
      <div className="suggested__list">
        {props.filteredWorkers.map((worker) => (
          <ListItem listData={worker} key={worker._id} />
        ))}
      </div>
    </div>
  );
}
