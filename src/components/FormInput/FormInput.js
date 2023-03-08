// Styles
import './FormInput.css';

export default function FormInput(props) {
  return (
    <div className={`input`}>
      <label className="input__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="input__element"
        placeholder={props.placeholder}
        minLength={props.length && props.length.min}
        maxLength={props.length && props.length.max}
        {...(props.isRequired && { required: true })}
        onChange={props.onChange}
        value={props.value || ''}
      />
      {/* {error && <span className={`form__error-${props.name}`}>{error}</span>} */}
    </div>
  );
}
