const inputProps = {
  name: {
    type: 'text',
    name: 'name',
    placeholder: 'Nombre',
    length: {
      min: '2',
      max: '40',
    },
    isRequired: true,
  },
  email: {
    label: 'Correo electrónico',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    length: {
      min: '4',
      max: '254',
    },
    isRequired: true,
  },
  link: {
    label: 'Dirección Web',
    type: 'url',
    name: 'link',
    placeholder: 'Enlace',
  },
  password: {
    label: 'Contraseña',
    type: 'password',
    name: 'password',
    placeholder: 'Contraseña',
    length: {
      min: '6',
      max: '20',
    },
    isRequired: true,
  },
  telephone: {
    label: 'Número de contacto',
    type: 'text',
    name: 'telephone',
    placeholder: 'Teléfono',
    length: {
      min: '8',
      max: '10',
    },
    isRequired: false,
  },
  location: {
    label: 'Ubicación (rellenada automáticamente)',
    type: 'text',
    name: 'location',
    placeholder: 'Ubicación',
    length: {
      min: '2',
      max: '40',
    },
    isRequired: true,
  },
};

const selectProps = {
  area: {
    label: 'Area de especialidad*',
    name: 'area',
    options: (
      <>
        <option>Elige una</option>
        <option value="Automotriz">Automotriz</option>
        <option value="Pintura">Pintura</option>
        <option value="Construcción">Construcción</option>
        <option value="Plomería">Plomería</option>
        <option value="Electricidad">Electricidad</option>
      </>
    ),
  },
  city: {
    label: 'Ciudad* (por el momento solo una)',
    name: 'city',
    options: (
      <>
        <option>Elige una</option>
        <option value="Viña del Mar">Viña del Mar</option>
      </>
    ),
  },
};

export { inputProps, selectProps };
