import Link from 'next/link';

function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Products</Link> | <Link href="/cart">CartPage</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
