import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

// Styles
import './InfoOverlay.css';
// import overlaySuccess from '../images/info-overlay__success.svg';
// import overlayFail from '../images/info-overlay__fail.svg';

export default function InfoOverlay() {
  const { isSuccess, isOverlayActive } = useContext(AppContext);

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
