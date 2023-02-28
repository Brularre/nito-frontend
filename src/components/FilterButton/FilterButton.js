import './FilterButton.css';

export default function FilterButton({ onClick, value, color, text }) {
  return (
    <button
      onClick={onClick}
      value={value}
      className={`filter-btn filter-btn_${color}`}
    >
      {text}
    </button>
  );
}
