import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
  useMapEvent,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import blueIcon from '../../images/worker-blue.png';
import greenIcon from '../../images/worker-green.png';
import violetIcon from '../../images/worker-violet.png';
import yellowIcon from '../../images/worker-yellow.png';
import orangeIcon from '../../images/worker-orange.png';
import redIcon from '../../images/worker-red.png';

export default function Map() {
  const { filteredWorkers, mapPosition, setMapPosition } =
    useContext(AppContext);

  const workerIcons = {
    construcción: new L.Icon({
      iconUrl: greenIcon,
      iconSize: [32, 46],
    }),
    automotriz: new L.Icon({
      iconUrl: blueIcon,
      iconSize: [32, 46],
    }),
    electricidad: new L.Icon({
      iconUrl: violetIcon,
      iconSize: [32, 46],
    }),
    limpieza: new L.Icon({
      iconUrl: yellowIcon,
      iconSize: [32, 46],
    }),
    pintura: new L.Icon({
      iconUrl: orangeIcon,
      iconSize: [32, 46],
    }),
    plomería: new L.Icon({
      iconUrl: redIcon,
      iconSize: [32, 46],
    }),
  };

  const getWorkerIcon = (area) => {
    return workerIcons[area.toLowerCase()] || new L.Icon.Default();
  };

  const RecenterAutomatically = (mapPosition) => {
    const map = useMap();
    useEffect(() => {
      map.setView(mapPosition);
    }, [mapPosition]);
    return null;
  };
  return (
    <div className="map">
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
            eventHandlers={{ click: setMapPosition(worker.location) }}
          >
            <Popup>
              <h4>{worker.name}</h4>
              Especialidad: {worker.area} <br />
              Ciudad: {worker.city} <br />
              Web: {worker.link} <br />
              Correo: {worker.email} <br />
              Teléfono: {worker.telephone} <br />
            </Popup>
          </Marker>
        ))}
        <RecenterAutomatically mapPosition={mapPosition} />
      </MapContainer>
    </div>
  );
}
