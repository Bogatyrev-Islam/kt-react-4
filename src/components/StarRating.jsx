import './StarRating.css';

const StarRating = ({ rating }) => {
  // Округляем рейтинг по математическим правилам
  const roundedRating = Math.round(rating);

  // Создаем массив звезд
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`star ${i <= roundedRating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    );
  }

  return (
    <div className="star-rating">
      {stars}
      <span className="rating-number">({rating.toFixed(1)})</span>
    </div>
  );
};

export default StarRating;
