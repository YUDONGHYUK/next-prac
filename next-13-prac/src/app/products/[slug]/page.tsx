import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 3;

type PantsPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: PantsPageProps) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductPage({
  params: { slug },
}: PantsPageProps) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <h1>{product.name} Products Page!</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
