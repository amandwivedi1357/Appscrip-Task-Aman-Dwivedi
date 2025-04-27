import React, { useState } from 'react';
import '@/styles/FilterSidebar.css';
import Image from 'next/image';

const FilterSidebar = ({ products, onCategoryFilter, selectedCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const categories = [...new Set(products.map(p => p.category))];

  const categoryDropdowns = {
    'CLOTHING': {
      items: ['Men', 'Women', 'Baby & Kids']
    }
  };

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const handleCheckboxChange = (category, item) => {
    setCheckedItems(prev => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [item]: !(prev[category]?.[item] || false)
      }
    }));
  };

  return (
    <div className="filter-sidebar">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <input type="checkbox" className='checkbox' />
        <h4>CUSTOMIZABLE</h4>
      </div>
      <div className="category-filters">
        {categories.map(category => (
          <div 
            key={category} 
            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryFilter(category)}
          >
            <div className="category-header">
              <span>{category.toUpperCase()}</span>
              {categoryDropdowns[category.toUpperCase()] && (
                <div 
                  className="dropdown-toggle" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(category);
                  }}
                >
                  <Image 
                    src="/down-arrow.svg" 
                    alt="Dropdown" 
                    width={15} 
                    height={15} 
                    className={`dropdown-icon ${openDropdown === category ? 'rotated' : ''}`}
                  />
                </div>
              )}
            </div>
            {openDropdown === category && categoryDropdowns[category.toUpperCase()] && (
              <div className="dropdown-content">
                {categoryDropdowns[category.toUpperCase()].items.map(item => (
                  <div key={item} className="dropdown-item">
                    <input 
                      type="checkbox" 
                      id={`${category}-${item}`}
                      checked={checkedItems[category]?.[item] || false}
                      onChange={() => handleCheckboxChange(category, item)}
                    />
                    <label htmlFor={`${category}-${item}`}>{item}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;