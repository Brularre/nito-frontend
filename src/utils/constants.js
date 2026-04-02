import blueIcon from '../images/worker-blue.svg';
import greenIcon from '../images/worker-green.svg';
import violetIcon from '../images/worker-violet.svg';
import yellowIcon from '../images/worker-yellow.svg';
import orangeIcon from '../images/worker-orange.svg';
import redIcon from '../images/worker-red.svg';
import L from 'leaflet';

const BASE_URL = process.env.REACT_APP_API_URL;

const WORKER_CATEGORIES = [
  { value: 'Automotriz',  color: 'blue',   hex: '#3f84e5', icon: blueIcon,   emoji: '🚗' },
  { value: 'Construcción', color: 'green',  hex: '#4b7f52', icon: greenIcon,  emoji: '🚧' },
  { value: 'Electricidad', color: 'violet', hex: '#60435f', icon: violetIcon, emoji: '🔌' },
  { value: 'Limpieza',    color: 'yellow', hex: '#cc8500', icon: yellowIcon, emoji: '🧹' },
  { value: 'Pintura',     color: 'orange', hex: '#d0653e', icon: orangeIcon, emoji: '🖌️' },
  { value: 'Plomería',    color: 'red',    hex: '#ab2a32', icon: redIcon,    emoji: '🔧' },
];

const workerStyles = Object.fromEntries(
  WORKER_CATEGORIES.map(({ value, hex }) => [value, { backgroundColor: hex }])
);

const filters = [
  { color: 'primary', value: 'all', text: 'Todos🤝' },
  ...WORKER_CATEGORIES.map(({ value, color, emoji }) => ({
    color,
    value,
    text: `${value}${emoji}`,
  })),
];

const workerIcons = Object.fromEntries(
  WORKER_CATEGORIES.map(({ value, icon }) => [
    value,
    new L.Icon({ iconUrl: icon, iconSize: [45, 45] }),
  ])
);

export { BASE_URL, WORKER_CATEGORIES, workerStyles, filters, workerIcons };
