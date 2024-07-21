import ProduchHeader from '@/components/ProduchHeader';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { fetchProductById } from '@/api';

export default function ProductDetailPage({ msg, productInfo }) {
  return (
    <div>
      <ProduchHeader title="detail"></ProduchHeader>
      <div>ProductDetailPages:{msg}</div>
      <p>{productInfo.name}</p>
      <Image
        alt="img"
        src={productInfo.imageUrl}
        width={300}
        height={250}
      ></Image>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetchProductById(id);
  return {
    props: { msg: context.params.id, productInfo: res.data },
  };
}
