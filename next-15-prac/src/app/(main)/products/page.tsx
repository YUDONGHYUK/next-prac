import Link from 'next/link';

export default function ProductList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        {/* replace는 새로운 히스토리를 추가하는 대신 현재의 히스토리 항목을 덮어쓴다.  */}
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h2>
    </>
  );
}
