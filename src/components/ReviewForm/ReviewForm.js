// Imports
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { WorkersContext } from '../../contexts/WorkersContext';
import { textAreaProps } from '../../utils/formProps';
import api from '../../utils/api';

// Components
import FormProvider from '../../providers/FormProvider';
import StarRating from '../StarRating/StarRating';
import FormTextArea from '../FormTextArea/FormTextArea';
import Button from '../Button/Button';

// Styles
import './ReviewForm.css';

export default function ReviewForm({ worker }) {
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  const { addReviewToWorker } = useContext(WorkersContext);

  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState({
    rating: '',
    review: '',
  });

  function isFormOk() {
    const isInputError = Object.values(errors).some((error) => error);
    return isInputError;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .addReview(worker._id, inputValues, currentUser._id)
      .then((review) => {
        addReviewToWorker(worker._id, review);
        setInputValues({});
      })
      .catch(console.error);
  };

  return (
    <>
      {isLoggedIn && (
        <FormProvider
          errors={errors}
          setErrors={setErrors}
          inputValues={inputValues}
          setInputValues={setInputValues}
        >
          <form
            className="review-form"
            name="review-form"
            id="review-form"
            onSubmit={handleSubmit}
          >
            <h3 className="review-form__title">
              ¿Conoces este datito? ¡Deja una referencia!
            </h3>
            <StarRating />
            <FormTextArea {...textAreaProps.review} />
            <Button
              inactive={isFormOk()}
              type="submit"
              color="primary"
              text="Enviar"
            />
          </form>
        </FormProvider>
      )}
    </>
  );
}
