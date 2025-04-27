import React, { useState, useEffect } from 'react';
import { fetchProducts } from '@/utils/api';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';


const ProductGrid = ({ isFilterVisible, onProductCountUpdate }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      onProductCountUpdate(fetchedProducts.length);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    onProductCountUpdate(filteredProducts.length);
  }, [filteredProducts, onProductCountUpdate]);

  const handleCategoryFilter = (category) => {
    // If the clicked category is already selected, reset the filter
    const newSelectedCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newSelectedCategory);

    const newFilteredProducts = newSelectedCategory
      ? products.filter(p => p.category === newSelectedCategory)
      : products;

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className={`product-grid-container ${isFilterVisible ? 'filter-visible' : 'filter-hidden'}`}>
      {isFilterVisible && (
        <FilterSidebar 
          products={products} 
          onCategoryFilter={handleCategoryFilter}
          selectedCategory={selectedCategory}
        />
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