import React, { useState, useEffect } from 'react'
import ProductGrid from './ProductGrid';
import Image from 'next/image';
import FilterBar from './FilterBar';
import { fetchProducts } from '@/utils/api';

const ProductListingPage = () => {
  const [masterProductList, setMasterProductList] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState('Recommended');
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setMasterProductList(fetchedProducts || []);
        setDisplayedProducts(fetchedProducts || []);
        setProductCount(fetchedProducts ? fetchedProducts.length : 0);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setMasterProductList([]);
        setDisplayedProducts([]);
        setProductCount(0);
      }
    };
    loadProducts();
  }, []);

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

  useEffect(() => {
    if (masterProductList.length === 0) {
      setDisplayedProducts([]);
      return;
    }

    let productsToSort = [...masterProductList];
    // console.log("Original products (from masterProductList):", productsToSort);
    // console.log("Sorting by:", selectedRecommendation);

    switch (selectedRecommendation) {
      case 'Price: High to Low':
        productsToSort.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'Price: Low to High':
        productsToSort.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'Recommended':
      case 'Newest First':
      case 'Popular':
        for (let i = productsToSort.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [productsToSort[i], productsToSort[j]] = [productsToSort[j], productsToSort[i]];
        }
        break;
      default:
        break;
    }
    // console.log("Sorted products:", productsToSort);
    setDisplayedProducts(productsToSort);
  }, [selectedRecommendation, masterProductList]);

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

        <FilterBar
          selectedRecommendation={selectedRecommendation}
          isRecommendationOpen={isRecommendationOpen}
          toggleRecommendationDropdown={toggleRecommendationDropdown}
          recommendationOptions={recommendationOptions}
          handleRecommendationSelect={handleRecommendationSelect}
        />
        </div>
        <ProductGrid 
          productsToDisplay={displayedProducts} 
          isFilterVisible={isFilterVisible} 
          onProductCountUpdate={handleProductCountUpdate}
        />
      </div>
    </div>
  );
};

export default ProductListingPage;
