import React, { useState } from 'react';
import ProductForm from './ProductForm';

const EditProductButton = ({ product }) => {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setFormOpen(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition"
      >
        Edit
      </button>
      {isFormOpen && (
        <ProductForm product={product} onClose={() => setFormOpen(false)} />
      )}
    </>
  );
};

export default EditProductButton;
