const BASE_URL = 'https://api.brularre.nito.students.nomoredomainssbs.ru';

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

export { BASE_URL, workerStyles, filters };
