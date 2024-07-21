import React from 'react';
import axios from 'axios';
import ProductList from '@/components/ProductList';
import ProduchHeader from '@/components/ProduchHeader';

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:4000/products');
    console.log('## API response:', res.data);

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
      <ProduchHeader title="list" />
      <ProductList productInfo={productInfo} />
    </div>
  );
}
