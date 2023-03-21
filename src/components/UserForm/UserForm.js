// Imports
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { inputProps } from '../../utils/formProps';
import FormProvider from '../../providers/FormProvider';

// Components
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

// Styles
import './UserForm.css';

export default function UserForm() {
  const {
    isLoggedIn,
    isRegistered,
    setIsRegistered,
    handleRegister,
    handleLogin,
  } = useContext(AppContext);

  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  function isFormOk() {
    // const isInputEmpty = Object.values(inputValues).some(
    //   (value) => value === '',
    // );
    const isInputError = Object.values(errors).some((error) => error);
    return isInputError;
  }

  const toggleIsRegistered = () => setIsRegistered((value) => !value);

  const handleSubmit = (e) => {
    e.preventDefault();
    !isRegistered ? handleRegister(inputValues) : handleLogin(inputValues);
    setInputValues({ name: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <>
      {!isLoggedIn && (
        <FormProvider
          errors={errors}
          setErrors={setErrors}
          inputValues={inputValues}
          setInputValues={setInputValues}
        >
          <div className="form" onSubmit={handleSubmit}>
            <form className="user-form" name="user-form" id="user-form">
              <h2 className="form__title">
                {!isRegistered
                  ? 'Únete a la comunidad'
                  : 'Ingresa a la comunidad'}
              </h2>
              <h3 className="form__subtitle">
                {!isRegistered
                  ? '¡Queremos tus datitos! Únete a nuestra comunidad y empieza a compartir.'
                  : '¿Ya eres miembro? Ingresa y participa de nuestra comunidad'}
              </h3>
              {!isRegistered && (
                <FormInput
                  {...inputProps.name}
                  label="Nombre* (aparece en caso que postees una reseña)"
                />
              )}
              <FormInput {...inputProps.email} />
              <FormInput {...inputProps.password} />
              <Button
                inactive={isFormOk()}
                type="submit"
                color="accent"
                text="Unirse a la comunidad"
              />
              <p onClick={toggleIsRegistered} className="form__link">
                {!isRegistered
                  ? '¿Ya eres miembro? Ingresa y participa de nuestra comunidad'
                  : '¡Queremos tus datitos! Únete a nuestra comunidad y empieza a compartir.'}
              </p>
            </form>
          </div>
        </FormProvider>
      )}
    </>
  );
}
