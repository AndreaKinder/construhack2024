import { useState } from 'react';
import { addInventoryItem } from './api';

const handleAddItem = async (itemData) => {
    const [inventory, setInventory] = useState([]);
    try {
      await addInventoryItem(itemData);
      setInventory([...inventory, itemData]);
    } catch (error) {
      console.error(error);
    }
  };

export default handleAddItem;