import React from 'react';
import axios from 'axios';
import ProductList from '@/components/product-list/ProductList';
import ProductHeader from '@/components/ProductHeader';
import { fetchProducts } from '@/api';

export async function getServerSideProps() {
  try {
    const res = await fetchProducts();
    return {
      props: { productInfo: res.data },
    };
  } catch (error) {
    console.error('## Error fetching data:', error.message);
    return {
      props: { productInfo: [] },
    };
  }
}

export default function ProductPage({ productInfo }) {
  console.log('## productInfo response:', productInfo);
  return (
    <div>
      <ProductHeader title="list" />
      <ProductList productInfo={productInfo} />
    </div>
  );
}
