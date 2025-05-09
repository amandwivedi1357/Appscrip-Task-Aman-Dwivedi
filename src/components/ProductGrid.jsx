import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

const ProductGrid = ({ productsToDisplay, isFilterVisible, onProductCountUpdate }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsToDisplay || []);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    let currentProducts = productsToDisplay || [];
    if (selectedCategory) {
      currentProducts = currentProducts.filter(p => p.category === selectedCategory);
    }
    setFilteredProducts(currentProducts);
    onProductCountUpdate(currentProducts.length);
  }, [productsToDisplay, selectedCategory, onProductCountUpdate]);

  const handleCategoryFilter = (category) => {
    const newSelectedCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newSelectedCategory);
  };

  return (
    <div className={`product-grid-container ${isFilterVisible ? 'filter-visible' : 'filter-hidden'}`}>
      {isFilterVisible && (
        <FilterSidebar />
      )}
      <div className={`product-grid ${isFilterVisible ? 'with-sidebar' : ''}`}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;