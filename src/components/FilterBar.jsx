import React from 'react';

const FilterBar = ({ 
  selectedRecommendation,
  isRecommendationOpen,
  toggleRecommendationDropdown,
  recommendationOptions,
  handleRecommendationSelect
}) => {
  return (
    <div className="filter-bar-container"> 
      <div className="filter-bar">
        <div className="filter-bar__item">FILTER</div>
        <div className="filter-bar__divider" />
        <div 
          className="filter-bar__item filter-bar__item--right recommendation-trigger" 
          onClick={toggleRecommendationDropdown} 
        >
          {selectedRecommendation ? selectedRecommendation.toUpperCase() : 'RECOMMENDED'} 
          <span className={`filter-bar__chevron ${isRecommendationOpen ? 'open' : ''}`}> 
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>
      {isRecommendationOpen && (
        <div className="filter-bar__dropdown-options">
          {recommendationOptions.map((option) => (
            <div 
              key={option} 
              className={`filter-bar__dropdown-option ${selectedRecommendation === option ? 'selected' : ''}`} 
              onClick={() => handleRecommendationSelect(option)}
            >
              {option.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
