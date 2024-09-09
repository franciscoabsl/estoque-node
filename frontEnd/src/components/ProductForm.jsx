import React, { useState, useContext } from 'react';
import ProductContext from '../context/ProductContext';

// Função para formatar a data no formato necessário para o campo de entrada
const formatToDateInputValue = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é zero-indexado
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ProductForm = ({ product, onClose }) => {
  const { addProduct, updateProduct } = useContext(ProductContext);
  const [name, setName] = useState(product ? product.name : '');
  const [category, setCategory] = useState(product ? product.category : '');
  const [quantity, setQuantity] = useState(product ? product.quantity : '');
  const [expirationDate, setExpirationDate] = useState(
    product ? formatToDateInputValue(product.expirationDate) : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, category, quantity, expirationDate };
    if (product) {
      updateProduct({ ...newProduct, id: product.id });
    } else {
      addProduct(newProduct);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {product ? 'Edit Product' : 'Add Product'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Expiration Date</label>
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition"
            >
              {product ? 'Update' : 'Add'}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
