import blueIcon from '../images/worker-blue.svg';
import greenIcon from '../images/worker-green.svg';
import violetIcon from '../images/worker-violet.svg';
import yellowIcon from '../images/worker-yellow.svg';
import orangeIcon from '../images/worker-orange.svg';
import redIcon from '../images/worker-red.svg';
import L from 'leaflet';

const BASE_URL = 'https://api.brularre.nito.students.nomoredomainssbs.ru';
// const BASE_URL = 'http://localhost:3000';

const workerStyles = {
  Automotriz: {
    backgroundColor: getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--worker-blue'),
  },
  Construcción: {
    backgroundColor: getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--worker-green'),
  },
  Electricidad: {
    backgroundColor: getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--worker-violet'),
  },
  Limpieza: {
    backgroundColor: getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--worker-yellow'),
  },
  Pintura: {
    backgroundColor: getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--worker-orange'),
  },
  Plomería: {
    backgroundColor: getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--worker-red'),
  },
};

const filters = [
  {
    color: 'primary',
    value: 'all',
    text: 'Todos🤝',
  },
  {
    color: 'blue',
    value: 'Automotriz',
    text: 'Automotriz🚗',
  },
  {
    color: 'green',
    value: 'Construcción',
    text: 'Construcción🚧',
  },
  {
    color: 'violet',
    value: 'Electricidad',
    text: 'Electricidad🔌',
  },
  {
    color: 'yellow',
    value: 'Limpieza',
    text: 'Limpieza🧹',
  },
  {
    color: 'orange',
    value: 'Pintura',
    text: 'Pintura🖌️',
  },
  {
    color: 'red',
    value: 'Plomería',
    text: 'Plomería🔧',
  },
];

const workerIcons = {
  Automotriz: new L.Icon({
    iconUrl: blueIcon,
    iconSize: [45, 45],
  }),
  Construcción: new L.Icon({
    iconUrl: greenIcon,
    iconSize: [45, 45],
  }),
  Electricidad: new L.Icon({
    iconUrl: violetIcon,
    iconSize: [45, 45],
  }),
  Limpieza: new L.Icon({
    iconUrl: yellowIcon,
    iconSize: [45, 45],
  }),
  Pintura: new L.Icon({
    iconUrl: orangeIcon,
    iconSize: [45, 45],
  }),
  Plomería: new L.Icon({
    iconUrl: redIcon,
    iconSize: [45, 45],
  }),
};

export { BASE_URL, workerStyles, filters, workerIcons };
