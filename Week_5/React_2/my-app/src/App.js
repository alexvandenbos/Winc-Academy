import React from 'react';
import './App.css';
import products from './Schoolproducts';
import Item from './components/Item'
function App() {
  const productNames = products.map(product => <Item key={product.id} product={product} />)
  return (
    <div className="Schoolproductsummary">
      {productNames}
    </div>
  );
}

export default App;
