import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

// Ajuste a URL conforme necessário
const API_URL = '/api/products';

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async (product) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      fetchProducts(); // Recarrega a lista de produtos
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      await fetch(`${API_URL}/${updatedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      fetchProducts(); // Recarrega a lista de produtos
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      fetchProducts(); // Recarrega a lista de produtos
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
