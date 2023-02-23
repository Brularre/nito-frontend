import './Form.css';
import placeholder from '../../images/card__placeholder.png';

export default function AddForm() {
  return (
    <div className="form">
      <form className="form__element" name="form__add-form" id="form__add-form">
        <div className="form__row">
          <div className="form__column">
            <h2 className="form__title">Agrega un datito</h2>
            <h3 className="form__subtitle">
              ¿Tienes un dato para compartir con la comunidad? ¡No dudes en
              agregarlo con la mayor cantidad de información posible!
            </h3>
            {/* Nombre */}
            <div className="form__input-container">
              <label className="form__label" for="worker-name">
                Nombre de Especialista o Empresa*
              </label>
              <input
                type="text"
                name="worker-name"
                id="worker-name"
                className="form__input"
                placeholder="Nombre Especialista o Empresa"
                minLength="4"
                maxLength="40"
                required
              />
              <span className="form__error-worker-name"></span>
            </div>

            {/* Area de Especialidad */}
            <div className="form__input-container">
              <label className="form__label" for="worker-area">
                Área de especialidad*
              </label>
              <select
                name="worker-area"
                id="worker-area"
                className="form__select"
                required
              >
                <option>Elige una</option>
                <option value="automotriz">Automotriz</option>
                <option value="pintura">Pintura</option>
                <option value="construccion">Construcción</option>
                <option value="plomeria">Plomería</option>
                <option value="electricidad">Electricidad</option>
              </select>
              <span className="form__error-worker-area"></span>
            </div>

            {/* Correo electrónico */}
            <div className="form__input-container">
              <label className="form__label" for="worker-email">
                Correo de contacto
              </label>
              <input
                type="email"
                name="worker-email"
                id="worker-email"
                className="form__input"
                placeholder="Email"
                minLength="4"
                maxLength="254"
              />
              <span className="form__error-worker-email"></span>
            </div>

            {/* Teléfono */}
            <div className="form__input-container">
              <label className="form__label" for="worker-phone">
                Número de contacto
              </label>
              <input
                type="text"
                name="worker-phone"
                id="worker-phone"
                className="form__input"
                placeholder="Teléfono"
                minLength="8"
                maxLength="10"
              />
              <span className="form__error-worker-phone"></span>
            </div>
          </div>
          <div className="form__column">
            {/* Ubicación */}
            <div className="form__map" />
          </div>
        </div>
        <button type="submit" className="form__btn">
          Agregar a la comunidad
        </button>
      </form>
    </div>
  );
}
