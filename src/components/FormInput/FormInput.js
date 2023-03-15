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
    let errorMessage = '';
    if (validity.valid && !errorMessage) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage || validationMessage,
      }));
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
        minLength={props.length && props.length.min}
        maxLength={props.length && props.length.max}
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
