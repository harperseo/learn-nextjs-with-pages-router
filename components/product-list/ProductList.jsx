import Image from 'next/image';
import React from 'react';
import styles from '@/components/product-list/ProductList.module.css';
import Link from 'next/link';

export default function ProductList({ productInfo }) {
  const products = Array.isArray(productInfo) ? productInfo : [];
  return (
    <div>
      <ul>
        {products &&
          products.map(product => {
            return (
              <li key={product.id} className={styles.item}>
                <Link href={`/products/${product.id}`}>
                  <Image
                    alt="img"
                    src={product.imageUrl}
                    width={300}
                    height={250}
                  ></Image>
                </Link>
                <div>{product.name}</div>
                <div>{product.price}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
