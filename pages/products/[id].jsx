import ProduchHeader from '@/components/ProduchHeader';
import axios from 'axios';
import React from 'react';

export default function ProductDetailPage({ msg, productInfo }) {
  return (
    <div>
      <ProduchHeader title="detail"></ProduchHeader>
      <div>ProductDetailPages:{msg}</div>
      <p>{productInfo.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.params.id);
  const id = context.params.id;
  const res = await axios.get(`http://localhost:4000/products/${id}`);
  return {
    props: { msg: context.params.id, productInfo: res.data },
  };
}
