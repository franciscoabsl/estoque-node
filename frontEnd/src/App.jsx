import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import AddProductButton from './components/AddProductButton';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 p-6">
          <AddProductButton />
          <ProductList />
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
