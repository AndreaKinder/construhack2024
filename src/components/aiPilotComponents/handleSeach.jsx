import { useState } from 'react';

const [searchQuery, setSearchQuery] = useState('');
const [filteredInventory, setFilteredInventory] = useState([]);

const handleSearch = (query, inventory) => {
  setSearchQuery(query);
  const filteredItems = inventory.filter((item) => item.name.includes(query));
  setFilteredInventory(filteredItems);
};

export { handleSearch, searchQuery, filteredInventory };
