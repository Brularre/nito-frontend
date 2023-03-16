import { useState } from 'react';
import './StarRating.css';

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`star-rating__btn ${
              index <= (hover || rating) ? 'on' : 'off'
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            <span className="star-rating__icon">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
