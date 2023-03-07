// username requiere un props.value para el label for el name y el id,
// un labelText, un type, un placeholder, un minlength, un maxlength, un required, un value y un onchange

import './FormInput.css';

export default function FormInput(props) {
  return (
    <div className={`form__input ${props.width}`}>
      <label className="form__label" htmlFor={props.value}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.value}
        id={props.value}
        className="form__input-element"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        {...(props.isRequired && { required: true })}
        onChange={props.onChange}
      />
      <span className={`form__error-${props.value}`}></span>
    </div>
  );
}

// <div className="form__input-container">
// <label className="form__label" htmlFor="name">
//   Nombre de Especialista o Empresa*
// </label>
// <input
//   type="text"
//   name="name"
//   id="name"
//   className="form__input"
//   placeholder="Nombre"
//   minLength="4"
//   maxLength="40"
//   required
//   onChange={handleInputChange}
// />
// <span className="form__error-name"></span>
// </div>

// {/* Area de Especialidad */}
// <div className="form__input-container">
// <label className="form__label" htmlFor="area">
//   Área de especialidad*
// </label>
// <select
//   name="area"
//   id="area"
//   className="form__select"
//   required
//   onChange={handleInputChange}
// >
//   <option>Elige una</option>
//   <option value="Automotriz">Automotriz</option>
//   <option value="Pintura">Pintura</option>
//   <option value="Construcción">Construcción</option>
//   <option value="Plomería">Plomería</option>
//   <option value="Electricidad">Electricidad</option>
// </select>
// <span className="form__error-worker-area"></span>
// </div>

// {/* Correo electrónico */}
// <div className="form__input-container">
// <label className="form__label" htmlFor="email">
//   Correo de contacto
// </label>
// <input
//   type="email"
//   name="email"
//   id="email"
//   className="form__input"
//   placeholder="Email"
//   minLength="4"
//   maxLength="254"
//   onChange={handleInputChange}
// />
// <span className="form__error-worker-email"></span>
// </div>

// {/* Teléfono */}
// <div className="form__input-container">
// <label className="form__label" htmlFor="telephone">
//   Número de contacto
// </label>
// <input
//   type="text"
//   name="telephone"
//   id="telephone"
//   className="form__input"
//   placeholder="Teléfono"
//   minLength="8"
//   maxLength="10"
//   onChange={handleInputChange}
// />
// <span className="form__error-telephone"></span>
// </div>

// {/* Ubicación */}
// <div className="form__input-container">
// <label className="form__label" htmlFor="location">
//   Ubicación (rellenada automáticamente)
// </label>
// <input
//   type="text"
//   name="location"
//   id="location"
//   className="form__input"
//   placeholder="Ubicación"
//   value={mapPosition}
//   onChange={handleInputChange}
// ></input>
// <span className="form__error-location"></span>
// </div>
