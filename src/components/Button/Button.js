import './Button.css';

export default function Button({ type, onClick, value, color, text }) {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      className={`button button_${color}`}
    >
      {text}
    </button>
  );
}
