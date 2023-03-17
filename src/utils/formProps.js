const inputProps = {
  name: {
    type: 'text',
    name: 'name',
    placeholder: 'Nombre',
    minLength: '2',
    maxLength: '40',
    isRequired: true,
  },
  email: {
    label: 'Correo electrónico',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    minLength: '4',
    maxLength: '254',
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
    minLength: '6',
    maxLength: '20',
    isRequired: true,
  },
  telephone: {
    label: 'Número de contacto',
    type: 'text',
    name: 'telephone',
    placeholder: 'Teléfono',
    minLength: '8',
    maxLength: '10',
    isRequired: false,
  },
  location: {
    label: 'Ubicación (rellenada automáticamente)',
    type: 'text',
    name: 'location',
    placeholder: 'Ubicación',
    minLength: '2',
    maxLength: '40',
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
        <option value="Construcción">Construcción</option>
        <option value="Electricidad">Electricidad</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Pintura">Pintura</option>
        <option value="Plomería">Plomería</option>
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

const textAreaProps = {
  review: {
    label: 'Reseña',
    name: 'review',
    placeholder: 'Comparte con nosotros tu experiencia',
    minLength: 4,
    maxLength: 200,
    isRequired: true,
  },
};

export { inputProps, selectProps, textAreaProps };
