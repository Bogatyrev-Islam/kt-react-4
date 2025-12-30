import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Страница не найдена</h2>
        <p className="not-found-text">
          Извините, но запрашиваемая страница не существует.
        </p>
        <Link to="/products" className="home-button">
          Перейти к товарам
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
