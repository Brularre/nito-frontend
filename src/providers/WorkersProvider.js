import { useReducer, useEffect, useRef, useContext, useCallback, useMemo } from 'react';
import { WorkersContext } from '../contexts/WorkersContext';
import { NotificationContext } from '../contexts/NotificationContext';
import api from '../utils/api';

const initialState = {
  map: null,
  isMapActive: false,
  workers: [],
  selectedWorker: null,
  filteredWorkers: [],
  mapPosition: [-33.0153, -71.5505],
  isAddFormOpen: false,
};

function workersReducer(state, action) {
  switch (action.type) {
    case 'SET_MAP':
      return { ...state, map: action.payload };
    case 'SET_MAP_ACTIVE':
      return { ...state, isMapActive: action.payload };
    case 'SET_WORKERS':
      return { ...state, workers: action.payload, filteredWorkers: action.payload };
    case 'SET_FILTERED_WORKERS':
      return { ...state, filteredWorkers: action.payload };
    case 'SET_SELECTED_WORKER':
      return { ...state, selectedWorker: action.payload };
    case 'SET_MAP_POSITION':
      return { ...state, mapPosition: action.payload };
    case 'SET_ADD_FORM_OPEN':
      return { ...state, isAddFormOpen: action.payload };
    case 'ADD_WORKER':
      return {
        ...state,
        workers: [action.payload, ...state.workers],
        filteredWorkers: [action.payload, ...state.filteredWorkers],
      };
    case 'ADD_REVIEW': {
      const { workerId, review } = action.payload;
      const updateWorker = (w) =>
        w._id === workerId ? { ...w, reviews: [...(w.reviews || []), review] } : w;
      return {
        ...state,
        workers: state.workers.map(updateWorker),
        filteredWorkers: state.filteredWorkers.map(updateWorker),
      };
    }
    default:
      return state;
  }
}

export default function WorkersProvider({ handleLoading, children }) {
  const [state, dispatch] = useReducer(workersReducer, initialState);
  const { showOverlay } = useContext(NotificationContext);
  const markerRefs = useRef([]);

  useEffect(() => {
    api
      .getWorkers()
      .then((workerList) => {
        dispatch({ type: 'SET_WORKERS', payload: workerList.data });
        handleLoading(false);
      })
      .catch(() => {
        handleLoading(false);
        showOverlay(false);
      });
  }, [handleLoading, showOverlay]);

  const handleWorkersFilter = useCallback(
    (workerArea) => {
      dispatch({ type: 'SET_MAP_ACTIVE', payload: true });
      dispatch({
        type: 'SET_FILTERED_WORKERS',
        payload:
          workerArea === 'all'
            ? state.workers
            : state.workers.filter((w) => w.area === workerArea),
      });
    },
    [state.workers],
  );

  const showWorkerLocation = useCallback(
    (worker) => {
      dispatch({ type: 'SET_MAP_ACTIVE', payload: true });
      dispatch({ type: 'SET_MAP_POSITION', payload: worker.location });
      if (state.map) state.map.setView(worker.location);
      const markerRef = markerRefs.current[worker._id];
      if (markerRef) markerRef.openPopup();
    },
    [state.map],
  );

  const addWorkerToList = useCallback((worker) => {
    dispatch({ type: 'ADD_WORKER', payload: worker });
  }, []);

  const addReviewToWorker = useCallback((workerId, review) => {
    dispatch({ type: 'ADD_REVIEW', payload: { workerId, review } });
  }, []);

  const setMap = useCallback((map) => dispatch({ type: 'SET_MAP', payload: map }), []);
  const setMapActive = useCallback((val) => dispatch({ type: 'SET_MAP_ACTIVE', payload: val }), []);
  const setMapPosition = useCallback((pos) => dispatch({ type: 'SET_MAP_POSITION', payload: pos }), []);
  const setAddFormOpen = useCallback((val) => dispatch({ type: 'SET_ADD_FORM_OPEN', payload: val }), []);
  const setSelectedWorker = useCallback(
    (worker) => dispatch({ type: 'SET_SELECTED_WORKER', payload: worker }),
    [],
  );

  const value = useMemo(
    () => ({
      map: state.map,
      isMapActive: state.isMapActive,
      workers: state.workers,
      selectedWorker: state.selectedWorker,
      filteredWorkers: state.filteredWorkers,
      mapPosition: state.mapPosition,
      isAddFormOpen: state.isAddFormOpen,
      markerRefs,
      setMap,
      setMapActive,
      setMapPosition,
      setAddFormOpen,
      setSelectedWorker,
      handleWorkersFilter,
      showWorkerLocation,
      addWorkerToList,
      addReviewToWorker,
    }),
    [
      state,
      setMap,
      setMapActive,
      setMapPosition,
      setAddFormOpen,
      setSelectedWorker,
      handleWorkersFilter,
      showWorkerLocation,
      addWorkerToList,
      addReviewToWorker,
    ],
  );

  return (
    <WorkersContext.Provider value={value}>{children}</WorkersContext.Provider>
  );
}
