import './App.css'
import EmailList from './components/EmailList';
import ErrorBoundary from './components/ErrorBoundary';
import { useState, lazy, Suspense } from 'react';
import ShowServerConfig from './components/ShowServerConfig';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

const Counter = lazy(() => import('./components/Counter'))

function App() {
  
  const [showCounter, setShowCounter] = useState(false);

  const config = {
    minConnections: 5,
    maxConnections: 20,
    restartAlways: true,
    environment: 'play',
    SSL: false,
  }

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    const newIndexP = {...product, id: generateUniqueId()};
    setCart([...cart, newIndexP]);
  };

  const generateUniqueId = () => {
    return Math.random().toString(16).substring(2, 9);
  };

  const removeProduct = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  }
    
  const totalCost = cart.reduce((total, product) => total + product.price, 0);

  const discountCode = "SAVE10"

  return (
    <>
      <EmailList />
      <hr />
      <button onClick={() => setShowCounter(!showCounter)}>Mostrar contador</button>
      <ErrorBoundary>
        {showCounter &&
          <Suspense fallback={<p>Loading...</p>}>
            <Counter />
          </Suspense>   
        }
      </ErrorBoundary>
      <hr />
      <ShowServerConfig {...config}/>
      <hr />
      <ProductList addToCart={addToCart} />
      <ShoppingCart cart={cart} removeProduct={removeProduct} totalCost={totalCost} discountCode={discountCode}/>

    </>
  );
}

export default App
