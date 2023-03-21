// Imports
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { inputProps, selectProps } from '../../utils/formProps';
import FormProvider from '../../providers/FormProvider';
import api from '../../utils/api';
import { HashLink as Link } from 'react-router-hash-link';

// Components
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import Button from '../Button/Button';

// Style
import './AddForm.css';

export default function AddForm() {
  const { isLoggedIn, workers, setWorkers, mapPosition, setAddFormOpen } =
    useContext(AppContext);

  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState({ location: mapPosition });

  function handleAddWorker(evt) {
    evt.preventDefault();
    api.addWorker(inputValues).then((newWorker) => {
      setWorkers([newWorker, ...workers]);
    });
    setInputValues({});
    setAddFormOpen(false);
  }

  function isFormOk() {
    const isInputError = Object.values(errors).some((error) => error);
    return isInputError;
  }

  return (
    <>
      {isLoggedIn ? (
        <FormProvider
          errors={errors}
          setErrors={setErrors}
          inputValues={inputValues}
          setInputValues={setInputValues}
        >
          <form
            className="add-form"
            name="add-form"
            id="add-form"
            onSubmit={handleAddWorker}
          >
            <h2 className="form__title">Agrega un datito</h2>
            <FormInput
              {...inputProps.name}
              label="Nombre de Especialista o Empresa*"
            />
            <FormSelect {...selectProps.area} />
            <FormInput {...inputProps.email} isRequired={false} />
            <FormInput {...inputProps.link} isRequired={false} />
            <FormInput {...inputProps.telephone} isRequired={false} />
            <FormSelect {...selectProps.city} />
            <FormInput {...inputProps.location} value={mapPosition} />

            <Button
              inactive={isFormOk()}
              type="submit"
              color="accent"
              text="Agregar a la comunidad"
            />
          </form>
        </FormProvider>
      ) : (
        <>
          <h2 className="form__title">
            Únete a la comunidad o ingresa para poder agregar datitos
          </h2>
          <Link className="footer__link" to="/#user-form">
            <Button color="accent" text="Ir al formulario" />
          </Link>
        </>
      )}
    </>
  );
}
