// Styles
import './Review.css';

export default function Review({ review }) {
  console.log(review);
  const MaxRating = 5;
  const filledStars = Math.min(Math.round(review.rating), MaxRating);
  const starString = '★'.repeat(review.rating);
  const emptyStarString = '☆'.repeat(MaxRating - filledStars);

  return (
    <div className="review">
      <div className="review__stars">
        {starString}
        {emptyStarString}
      </div>
      <div className="review__text">{review.text}</div>
    </div>
  );
}
