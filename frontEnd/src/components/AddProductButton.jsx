import React, { useState } from 'react';
import ProductForm from './ProductForm';

const AddProductButton = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setFormOpen(true)}
        className="bg-green-600 text-white px-5 py-2 rounded-md shadow hover:bg-green-700 transition"
      >
        Add Product
      </button>
      {isFormOpen && <ProductForm onClose={() => setFormOpen(false)} />}
    </div>
  );
};

export default AddProductButton;
