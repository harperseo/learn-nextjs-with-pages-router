import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
import { deleteCartItem } from '@/api';
import Router from 'next/router';

export default function CartList({ carts }) {
  const totalPrice = carts.reduce((acc, cur) => {
    return acc + Number(cur.price);
  }, 0);
  const removeItem = async id => {
    const res = await deleteCartItem(id);
    if (res) {
      Router.replace(Router.asPath);
    }
  };
  return (
    <div>
      <div>
        <ul>
          {carts.map(c => {
            return (
              <li key={c.id} className={styles.item}>
                <div>
                  <Image src={c.imageUrl} alt={c.name} width={75} height={75} />
                </div>
                <div className={styles.description}>
                  <div>{c.name}</div>
                  <div>{c.price}</div>
                  <button onClick={() => removeItem(c.id)}>delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          <li>total price:{totalPrice}</li>
          <li>total amount:{carts.length}</li>
        </ul>
      </div>
    </div>
  );
}
