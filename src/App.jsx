import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { StockOverviewPage } from './pages/StockOverviewPage';
import { StockDetailPage } from './pages/StockDetailPage';
import { WatchListContextProvider } from './context/WatchListContext';
import { ProductsList } from './pages/Products/ProductsList';
import { ProductDetail } from './pages/ProductDetail';
import { ScrollToTop } from './components/ScrollToTop';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ToastContainer } from 'react-toastify';
import CartPage from './pages/Cart/CartPage';
import { CartProvider } from './context';

function App() {
  return (
    <div className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <ScrollToTop /> {/* Moved inside BrowserRouter */}
     
          <ToastContainer />
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<CartPage />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
