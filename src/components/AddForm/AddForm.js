import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './AddForm.css';
// import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

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
      {/* Nombre */}

      <div className="form__input-container">
        <label className="form__label" htmlFor="name">
          Nombre de Especialista o Empresa*
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input"
          placeholder="Nombre"
          minLength="4"
          maxLength="40"
          required
          onChange={handleInputChange}
        />
        <span className="form__error-name"></span>
      </div>

      {/* Area de Especialidad */}
      <div className="form__input-container">
        <label className="form__label" htmlFor="area">
          Área de especialidad*
        </label>
        <select
          name="area"
          id="area"
          className="form__select"
          required
          onChange={handleInputChange}
        >
          <option>Elige una</option>
          <option value="Automotriz">Automotriz</option>
          <option value="Pintura">Pintura</option>
          <option value="Construcción">Construcción</option>
          <option value="Plomería">Plomería</option>
          <option value="Electricidad">Electricidad</option>
        </select>
        <span className="form__error-worker-area"></span>
      </div>

      {/* Correo electrónico */}
      <div className="form__input-container">
        <label className="form__label" htmlFor="email">
          Correo de contacto
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input"
          placeholder="Email"
          minLength="4"
          maxLength="254"
          onChange={handleInputChange}
        />
        <span className="form__error-worker-email"></span>
      </div>

      {/* Teléfono */}
      <div className="form__input-container">
        <label className="form__label" htmlFor="telephone">
          Número de contacto
        </label>
        <input
          type="text"
          name="telephone"
          id="telephone"
          className="form__input"
          placeholder="Teléfono"
          minLength="8"
          maxLength="10"
          onChange={handleInputChange}
        />
        <span className="form__error-telephone"></span>
      </div>

      {/* Ubicación */}
      <div className="form__input-container">
        <label className="form__label" htmlFor="location">
          Ubicación (rellenada automáticamente)
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className="form__input"
          placeholder="Ubicación"
          value={mapPosition}
          onChange={handleInputChange}
        ></input>
        <span className="form__error-location"></span>
      </div>
      <Button type="submit" color="accent" text="Agregar a la comunidad" />
    </form>
  );
}
