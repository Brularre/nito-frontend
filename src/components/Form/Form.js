// Imports
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { inputProps } from '../../utils/formProps';

// Components
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

// Styles
import './Form.css';

export default function Form() {
  const [inputValues, setInputValues] = useState({});

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    <div className="form">
      <form className="user-form" name="form__add-form" id="form__add-form">
        <h2 className="form__title">Regístrate</h2>
        <h3 className="form__subtitle">
          ¡Queremos tus datitos! Únete a nuestra comunidad y empieza a
          compartir.
        </h3>
        {/* Faltan on change */}
        <FormInput
          {...inputProps.name}
          label="Nombre* (aparece en caso que postees una reseña)"
          onChange={handleInputChange}
        />
        <FormInput
          {...inputProps.email}
          label="Correo Electrónico (sólo usado para ingresar)"
          onChange={handleInputChange}
        />
        <FormInput {...inputProps.password} onChange={handleInputChange} />
        <Button type="submit" color="accent" text="Unirse a la comunidad" />
      </form>
    </div>
  );
}
