// Imports
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { inputProps, selectProps } from '../../utils/formProps';

// Components
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import Button from '../Button/Button';

// Style
import './AddForm.css';

export default function AddForm() {
  const [inputValues, setInputValues] = useState({});
  const { workers, setWorkers, mapPosition, setAddFormOpen } =
    useContext(AppContext);

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  function handleAddWorker(evt) {
    evt.preventDefault();
    // api.addCard(inputValues.name, inputValues.link).then((newCard) => {
    //   setCards([newCard.data, ...cards]);
    // });
    setWorkers([inputValues, ...workers]);
    setInputValues({});
    setAddFormOpen(false);
  }

  useEffect(() => {
    setInputValues({
      ...inputValues,
      location: mapPosition,
      _id: Math.floor(Math.random() * 99999),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapPosition]);

  return (
    <form
      className="add-form"
      name="add-form"
      id="add-form"
      onSubmit={handleAddWorker}
    >
      <h2 className="form__title">Agrega un datito</h2>
      <FormInput
        {...inputProps.name}
        onChange={handleInputChange}
        value={inputValues.name}
        label="Nombre de Especialista o Empresa*"
      />
      <FormSelect
        {...selectProps.area}
        onChange={handleInputChange}
        value={inputValues.area}
      />
      <FormInput
        {...inputProps.email}
        onChange={handleInputChange}
        value={inputValues.email}
        label="Correo de contacto"
        isRequired={false}
      />
      <FormInput
        {...inputProps.link}
        onChange={handleInputChange}
        value={inputValues.link}
      />
      <FormInput
        {...inputProps.telephone}
        onChange={handleInputChange}
        value={inputValues.telephone}
      />
      <FormSelect
        {...selectProps.city}
        onChange={handleInputChange}
        value={inputValues.city}
      />
      <FormInput
        {...inputProps.location}
        onChange={handleInputChange}
        value={mapPosition}
      />

      <Button type="submit" color="accent" text="Agregar a la comunidad" />
    </form>
  );
}
