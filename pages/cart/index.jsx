import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import React from 'react';

function CartPage({ carts }) {
  console.log(carts);
  return (
    <div>
      CartPage
      {carts &&
        carts.map(c => {
          return <p key={c.id}>{c.name}</p>;
        })}
      <CartHeader></CartHeader>
      <CartList></CartList>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await fetchCarts();
  return {
    props: {
      carts: data,
    },
  };
}

export default CartPage;
