import React from 'react';
import ListFilter from "../item-status-filter/item-status-filter";

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '18px',
        fontWeight: '400',
        color: 'grey'
    };
    const searchText = 'Введите заметку';

    return (
        <div className='row mb-3'>
          <input
              style={searchStyle}
              placeholder={searchText} />
          <ListFilter />
        </div>
    );
};

export default SearchPanel;
