export default function UserForm({ name, title, inputs, submit, isOpen }) {
  return (
    <div className={`popup ${isOpen ? 'popup_active' : ''}`} id={name}>
      <form className="popup__form" name={name} noValidate>
        <button type="button" className="popup__close-btn"></button>
        <h2 className="popup__form-title">{title}</h2>
        {inputs}
        <button type="submit" className="popup__submit-btn">
          {submit}
        </button>
      </form>
    </div>
  );
}
