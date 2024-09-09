import React, { useContext, useState } from 'react';
import ProductContext from '../context/ProductContext';
import EditProductButton from './EditProductButton';

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const ProductList = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleDelete = (id) => {
    setProductToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    deleteProduct(productToDelete);
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Product List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Expiration Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{product.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {formatDate(product.expirationDate)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <EditProductButton product={product} />
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-600 text-white px-5 py-2 rounded-md shadow hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
              >
                Yes
              </button>
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
