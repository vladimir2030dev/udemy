import React from 'react';

const SearchPanel = () => {
  const searchStyle ={
    fontSize: '18px',
    color: 'grey'
  };
  const searchText = 'Введите заметку';

  return (
    <input
      style={searchStyle}
      placeholder={ searchText } />
  );
};

export default SearchPanel;
