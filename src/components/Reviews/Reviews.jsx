import { useEffect, useState } from 'react';
import { fetchReviews } from 'Services/Api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }
  return (
    <div>
      <ul>
        {<p>There is no reviews yet</p> ||
          reviews.map(review => (
            <li key={review.id}>
              <p> Author: {review.author}</p>
              <span>{review.content}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
// export default Reviews;
