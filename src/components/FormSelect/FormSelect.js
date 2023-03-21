// Imports
import { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';

// Styles
import './FormSelect.css';

export default function FormInput(props) {
  const { inputValues, setInputValues } = useContext(FormContext);

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    <div className="select">
      <label className="select__label" htmlFor={props.name} required>
        {props.label}
      </label>
      <select
        name={props.name}
        id={props.name}
        className="select__element"
        onChange={handleInputChange}
      >
        {props.options}
      </select>
    </div>
  );
}
