// Styles
import './FormSelect.css';

export default function FormInput(props) {
  return (
    <div className="select">
      <label className="select__label" htmlFor={props.name} required>
        {props.label}
      </label>
      <select
        name={props.name}
        id={props.name}
        className="select__element"
        onChange={props.onChange}
      >
        {props.options}
      </select>
      {/* <span className={`select__error-${props.name}`}></span> */}
    </div>
  );
}
