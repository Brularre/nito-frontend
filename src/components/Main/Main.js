import { useContext } from 'react';
import '../App/App.css';

import { WorkerContext } from '../../contexts/WorkerContext';

export default function Main() {
  const { workers } = useContext(WorkerContext);

  // const workerList = [];

  // workers.forEach(
  //   ({
  //     name,
  //     area,
  //     city,
  //     email,
  //     badges,
  //     link,
  //     location,
  //     rating,
  //     telephone,
  //   }) => {
  //     workerList.push(
  //       <li>
  //         Nombre: {name}, Especialización: {area}, Ciudad: {city}, Puntuación:{' '}
  //         {rating}
  //       </li>,
  //     );
  //   },
  // );
  // console.log(workers);

  return (
    <div>
      <h1>Lista de Datos</h1>
      <ul>
        {/* {workerList} */}
        {/* {workers.forEach(
          ({
            name,
            area,
            city,
            email,
            badges,
            link,
            location,
            rating,
            telephone,
          }) => {
            <li>
              `Nombre: ${name}, Especialización: ${area}, Ciudad: ${city},
              Puntuación: ${rating} `
            </li>;
          },
        )} */}
      </ul>
    </div>
  );
}
