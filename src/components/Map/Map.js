import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { workerIcons } from '../../utils/constants';
import AddForm from '../AddForm/AddForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewContainer from '../ReviewContainer/ReviewContainer';

export default function Map() {
  const {
    filteredWorkers,
    setMap,
    mapPosition,
    setMapPosition,
    isAddFormOpen,
    setAddFormOpen,
    markerRefs,
  } = useContext(AppContext);

  const getWorkerIcon = (area) => {
    return workerIcons[area];
  };

  function AddFormPopup() {
    const map = useMapEvents({
      contextmenu(evt) {
        setMapPosition([evt.latlng.lat, evt.latlng.lng]);
        map.setView([evt.latlng.lat, evt.latlng.lng]);
        setAddFormOpen(true);
      },
    });
    return (
      isAddFormOpen && (
        <Popup
          position={mapPosition}
          className="popup__add-form"
          onClose={() => setAddFormOpen(false)}
        >
          <AddForm />
        </Popup>
      )
    );
  }

  return (
    <MapContainer
      center={mapPosition}
      zoom={12}
      scrollWheelZoom={true}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredWorkers.map((worker) => (
        <Marker
          position={worker.location}
          key={worker._id}
          icon={getWorkerIcon(worker.area)}
          onClose={() => setAddFormOpen(false)}
          ref={(ref) => {
            markerRefs.current[worker._id] = ref;
          }}
        >
          <Popup className="popup-worker">
            <div className="popup-worker__info">
              <h4 className="popup-worker__title">{worker.name}</h4>
              <b>Especialidad</b>: {worker.area} <br />
              <b>Ciudad</b>: {worker.city || 'Viña del Mar'} <br />
              <b>Correo</b>: {worker.email || 'No Ingresado'} <br />
              <b>Teléfono</b>: {worker.telephone || 'No Ingresado'} <br />
              <b>Web</b>: {worker.link || 'No Ingresado'} <br />
            </div>
            <ReviewForm worker={worker} />
            {worker.reviews.length > 0 && (
              <ReviewContainer reviews={worker.reviews} />
            )}
          </Popup>
        </Marker>
      ))}
      <AddFormPopup />
    </MapContainer>
  );
}
