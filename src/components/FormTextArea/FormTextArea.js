// Imports
import { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';

// Styles
import './FormTextArea.css';

export default function FormTextArea(props) {
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
    <div className={`textarea`}>
      <textarea
        name={props.name}
        id={props.name}
        className={`textarea__element ${
          errors[props.name] && 'textarea__error'
        }`}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        {...(props.isRequired && { required: true })}
        onInput={checkInputValidity}
        onChange={handleInputChange}
        value={inputValues[props.name] || ''}
      />
      {errors[props.name] && (
        <span className="textarea__error-message">{errors[props.name]}</span>
      )}
    </div>
  );
}
