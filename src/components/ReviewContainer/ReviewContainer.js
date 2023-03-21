// Imports
import Review from '../Review/Review';

// Styles
import './ReviewContainer.css';

export default function ReviewContainer({ reviews }) {
  return (
    <div className="review-container">
      <h4 className="review-container__title">Reviews</h4>
      {reviews.map((review) => (
        <Review review={review} key={review._id} />
      ))}
    </div>
  );
}
