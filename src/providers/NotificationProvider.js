import { useState, useCallback, useMemo } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const OVERLAY_DURATION = 1500;

export default function NotificationProvider({ children }) {
  const [isSuccess, setIsSuccess] = useState(true);
  const [isOverlayActive, setOverlayActive] = useState(false);

  const showOverlay = useCallback((success) => {
    setIsSuccess(success);
    setOverlayActive(true);
    setTimeout(() => setOverlayActive(false), OVERLAY_DURATION);
  }, []);

  const value = useMemo(
    () => ({ isSuccess, isOverlayActive, showOverlay }),
    [isSuccess, isOverlayActive, showOverlay],
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
