import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Товар не найден');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="loading">Загрузка товара...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  if (!product) {
    return <div className="error">Товар не найден</div>;
  }

  return (
    <div className="product-detail">
      <button onClick={handleGoBack} className="back-button">
        ← Назад
      </button>

      <div className="product-content">
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-image"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-price">${product.price}</div>

          <div className="product-rating">
            <StarRating rating={product.rating.rate} />
            <span className="rating-count">
              ({product.rating.count} отзывов)
            </span>
          </div>

          <div className="product-category">
            <strong>Категория:</strong> {product.category}
          </div>

          <div className="product-description">
            <strong>Описание:</strong>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
