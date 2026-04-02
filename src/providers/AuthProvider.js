import { useReducer, useEffect, useContext, useCallback, useMemo } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';
import * as auth from '../utils/auth';

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  currentUser: {},
};

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isLoggedIn: true,
        isRegistered: true,
        currentUser: action.payload,
      };
    case 'SET_REGISTERED':
      return { ...state, isRegistered: action.payload };
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, currentUser: {} };
    default:
      return state;
  }
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { showOverlay } = useContext(NotificationContext);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getAuthorizedUserData()
        .then((res) => {
          if (res?.data) {
            const { name, email, _id } = res.data;
            dispatch({ type: 'SET_CURRENT_USER', payload: { name, email, _id } });
          }
        })
        .catch(() => {
          // Token expired or invalid — clear it so the user can log in again
          localStorage.removeItem('jwt');
        });
    }
  }, []);

  const handleRegister = useCallback(
    (userData) => {
      auth
        .register(userData)
        .then((user) => {
          if (user.data._id) {
            dispatch({ type: 'SET_REGISTERED', payload: true });
            showOverlay(true);
          } else {
            showOverlay(false);
          }
        })
        .catch(() => showOverlay(false));
    },
    [showOverlay],
  );

  const handleLogin = useCallback(
    (userValues) => {
      auth
        .authorize(userValues)
        .then((data) => {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            dispatch({ type: 'LOGIN' });
            showOverlay(true);
          } else {
            showOverlay(false);
          }
        })
        .catch(() => showOverlay(false));
    },
    [showOverlay],
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem('jwt');
    dispatch({ type: 'LOGOUT' });
  }, []);

  const setIsRegistered = useCallback(
    (value) => {
      dispatch({
        type: 'SET_REGISTERED',
        payload: typeof value === 'function' ? value(state.isRegistered) : value,
      });
    },
    [state.isRegistered],
  );

  const value = useMemo(
    () => ({
      isLoggedIn: state.isLoggedIn,
      isRegistered: state.isRegistered,
      currentUser: state.currentUser,
      setIsRegistered,
      handleLogin,
      handleRegister,
      handleLogout,
    }),
    [state, setIsRegistered, handleLogin, handleRegister, handleLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
