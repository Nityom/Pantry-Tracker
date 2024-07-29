import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, deleteDoc, doc } from 'firebase/firestore';
import { FaTrash } from 'react-icons/fa';

const PantryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'pantryItems'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArray);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'pantryItems', id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Pantry List</h1>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
            <span className="text-lg text-gray-700">{item.name} - {item.quantity}</span>
            <FaTrash
              className="text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PantryList;