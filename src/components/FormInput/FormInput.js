// Imports
import { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';

// Styles
import './FormInput.css';

export default function FormInput(props) {
  const { inputValues, setInputValues, errors, setErrors } =
    useContext(FormContext);

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  function checkInputValidity(evt) {
    const { name, validity, validationMessage } = evt.target;
    if (validity.valid) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: validationMessage }));
    }
  }

  return (
    <div className={`input`}>
      <label className="input__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className={`input__element ${errors[props.name] && 'input__error'}`}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        {...(props.isRequired && { required: true })}
        onInput={checkInputValidity}
        onChange={handleInputChange}
        value={inputValues[props.name] || ''}
      />
      {errors[props.name] && (
        <span className="input__error-message">{errors[props.name]}</span>
      )}
    </div>
  );
}
