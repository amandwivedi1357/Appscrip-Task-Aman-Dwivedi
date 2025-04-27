import React, { useState } from 'react'
import "@/styles/productlisting.css"
import ProductGrid from './ProductGrid';
import Image from 'next/image';
import FilterBar from './FilterBar';

const ProductListingPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [productCount, setProductCount] = useState(0);
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState('Recommended');

  const recommendationOptions = [
    'Recommended', 
    'Newest First', 
    'Popular', 
    'Price: High to Low', 
    'Price: Low to High'
  ];

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleProductCountUpdate = (count) => {
    setProductCount(count);
  };

  const toggleRecommendationDropdown = () => {
    setIsRecommendationOpen(!isRecommendationOpen);
  };

  const handleRecommendationSelect = (option) => {
    setSelectedRecommendation(option);
    setIsRecommendationOpen(false);
  };

  return (
    <div className='product-listing-page'>
      <div className='product-listing-container'>
        <div className='options'>
          <div className='left-options'>
            <p>{productCount} Items</p>
            <p onClick={toggleFilter}>
              {isFilterVisible ? '< HIDE FILTERS' : 'SHOW FILTER >'}
            </p>
          </div>
          <div className='right-options'>
            <div 
              className='recommendation-dropdown'
              onClick={toggleRecommendationDropdown}
            >
              {selectedRecommendation}
              
            </div>
            {isRecommendationOpen && (
              <div className='recommendation-options'>
                {recommendationOptions.map((option) => (
                  <div 
                    key={option} 
                    className='recommendation-option'
                    onClick={() => handleRecommendationSelect(option)}
                  >
                    {option.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='mobile-filter'>

        <FilterBar/>
        </div>
        <ProductGrid 
          isFilterVisible={isFilterVisible} 
          onProductCountUpdate={handleProductCountUpdate}
        />
      </div>
    </div>
  );
};

export default ProductListingPage;
