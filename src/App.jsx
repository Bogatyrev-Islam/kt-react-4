import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<ProductsList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
