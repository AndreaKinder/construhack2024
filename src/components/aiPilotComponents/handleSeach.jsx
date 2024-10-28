import {useState} from 'react';

const handleSearch = (query) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredInventory, setFilteredInventory] = useState([]);

    setSearchQuery(query);
    const filteredItems = inventory.filter((item) => item.name.includes(query));
    setFilteredInventory(filteredItems);

    return [searchQuery, setSearchQuery, filteredInventory, setFilteredInventory];
  };

  export default handleSearch