import { useContext } from 'react';
import { NotificationContext } from '../../contexts/NotificationContext';

// Styles
import './InfoOverlay.css';

export default function InfoOverlay() {
  const { isSuccess, isOverlayActive } = useContext(NotificationContext);

  return (
    <div
      className={`info-overlay ${isOverlayActive ? 'info-overlay_active' : ''}`}
      id="info-overlay"
    >
      <h2 className="info-overlay__icon">{isSuccess ? '🙌' : '😣'}</h2>
      <h3 className="info-overlay__text">
        {isSuccess ? '¡Exito!' : '¡Oops! Revisa tus datos'}
      </h3>
    </div>
  );
}
