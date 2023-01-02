import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { ProductType } from './index';

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>
        {product?.id} {product?.title} {product?.price}
      </h2>
      <p>{product?.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ product: ProductType }> = async (
  context
) => {
  const { params } = context;
  console.log(`Regenerating product ${params?.productId}`);
  const response = await fetch(
    `http://localhost:4000/products/${params?.productId}`
  );
  const data = await response.json();

  return {
    props: { product: data },
    revalidate: 10,
  };
};
