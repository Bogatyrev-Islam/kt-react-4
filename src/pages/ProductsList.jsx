import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import './ProductsList.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="products-list">
      <h1>Все товары</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <Link to={`/product/${product.id}`} className="product-title">
                {product.title}
              </Link>
              <div className="product-price">${product.price}</div>
              <StarRating rating={product.rating.rate} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
