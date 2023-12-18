// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange, onReset, onConfirm }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
  };

  const handleReset = () => {
    setTitleFilter('');
    setRateFilter('');
    onReset();
  };

  const handleConfirm = () => {
    onFilterChange({ title: titleFilter, rate: rateFilter });
    onConfirm();
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rateFilter}
        onChange={handleRateChange}
      />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default Filter;
