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

export default function Map() {
  const {
    filteredWorkers,
    mapPosition,
    setMapPosition,
    isAddFormOpen,
    setAddFormOpen,
  } = useContext(AppContext);

  const getWorkerIcon = (area) => {
    return workerIcons[area];
  };

  function AddFormPopup() {
    const map = useMapEvents({
      contextmenu(evt) {
        setMapPosition([evt.latlng.lat, evt.latlng.lng]);
        map.setView(evt.latlng);
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
    <MapContainer center={mapPosition} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredWorkers.map((worker) => (
        <Marker
          position={worker.location}
          key={worker._id}
          icon={getWorkerIcon(worker.area)}
        >
          <Popup>
            <h4>{worker.name}</h4>
            Especialidad: {worker.area} <br />
            Ciudad: {worker.city || 'Viña del Mar'} <br />
            Correo: {worker.email || 'No Ingresado'} <br />
            Teléfono: {worker.telephone || 'No Ingresado'} <br />
          </Popup>
        </Marker>
      ))}
      <AddFormPopup />
    </MapContainer>
  );
}
