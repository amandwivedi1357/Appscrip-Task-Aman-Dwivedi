import React from 'react';
import '@/styles/productcard.css';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
      </div>
      <div className='product-content'>
        <p className='product-category'> <span style={{textDecoration:"underline"}}>Sign in</span> or Create an account to see pricing</p>
      <Image src='/heart.svg' alt='Heart' width={20} height={20}/>
      </div>
    </div>
  );
};

export default ProductCard;