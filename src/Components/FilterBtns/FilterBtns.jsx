import React from 'react';
import style from './FilterBtns.module.css';

const FilterBtns = ({ datafilter, onFilterChange, activeFilter }) => {
  return (
    <div className={style.btns}>
      {datafilter.map((item, index) => (
        <button 
          key={index} 
          className={`${style.btn} ${activeFilter === item ? style.active_btn : ''}`} 
          onClick={() => onFilterChange(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterBtns;
