import './Form.css';
import FormInput from '../FormInput/FormInput';
import { inputProps } from '../../utils/constants';
import Button from '../Button/Button';

export default function Form() {
  return (
    <div className="form">
      <form className="user-form" name="form__add-form" id="form__add-form">
        <h2 className="form__title">Regístrate</h2>
        <h3 className="form__subtitle">
          ¡Queremos tus datitos! Únete a nuestra comunidad y empieza a
          compartir.
        </h3>
        {/* Faltan on change */}
        <FormInput {...inputProps.userName} />
        <FormInput {...inputProps.userEmail} />
        <FormInput {...inputProps.userPassword} />
        <Button type="submit" color="accent" text="Unirse a la comunidad" />
      </form>
    </div>
  );
}
