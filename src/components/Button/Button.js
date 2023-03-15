// Style
import './Button.css';

export default function Button({ inactive, color, text, ...props }) {
  console.log(inactive);
  return (
    <button {...props} disabled={inactive} className={`button button_${color}`}>
      {text}
    </button>
  );
}
