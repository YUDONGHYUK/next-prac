import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

export default async function ProductsPage() {
  // throw new Error();

  const products = await getProducts();

  return (
    <>
      <h1>Products Page!</h1>
      <Image src={clothesImage} alt="Clothes" />
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
