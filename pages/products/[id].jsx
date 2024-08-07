import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { fetchProductById } from '@/api';
import ProductInfo from '@/components/product-detail/ProductInfo';

export default function ProductDetailPage({ productInfo }) {
  return (
    <div>
      <ProductHeader title="detail"></ProductHeader>
      <ProductInfo productDetail={productInfo}></ProductInfo>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const { data } = await fetchProductById(id);
  return {
    props: { productInfo: data },
  };
}
