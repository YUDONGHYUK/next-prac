import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';

// export const revalidate = 3;

export default async function ProductsPage() {
  throw new Error();

  const products = await getProducts();

  return (
    <>
      <h1>Products Page!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
