import { GetStaticProps } from 'next';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type ProductListProps = {
  products: ProductType[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  products: ProductType[];
}> = async () => {
  console.log('Generating / Regenerating ProductList');
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  return {
    props: { products: data },
    revalidate: 30,
  };
};
