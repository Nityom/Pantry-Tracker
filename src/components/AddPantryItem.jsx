// src/components/AddPantryItem.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { CoolModeDemo } from './Button';

const AddPantryItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && quantity) {
      try {
        await addDoc(collection(db, 'pantryItems'), {
          name,
          quantity,
          createdAt: new Date()
        });
        setName('');
        setQuantity('');
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <CoolModeDemo
        type="submit"
       
      >
        Add Item
      </CoolModeDemo>
    </form>
  );
};

export default AddPantryItem;