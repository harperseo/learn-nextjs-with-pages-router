import Image from 'next/image';
import React from 'react';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, price, imageUrl } = productDetail;
  const addCart = async () => {
    const res = await createCartItem({ id, name, price, imageUrl });
    console.log(res.data);
    alert('success!');
    router.push('/cart');
  };
  return (
    <div className={styles.container}>
      <div>
        {' '}
        <Image alt="img" src={imageUrl} width={300} height={250}></Image>
      </div>
      <div className={styles.description}>
        <div>{id}</div>
        <div>{name}</div>
        <button onClick={addCart}>Add to Cart</button>
      </div>
    </div>
  );
}
