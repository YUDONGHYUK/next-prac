import { notFound } from 'next/navigation';

type PantsPageProps = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: PantsPageProps) {
  if (params.slug === 'nothing') notFound();

  return <h1>{params.slug} Products Page!</h1>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirts'];

  return products.map((product) => ({
    slug: product,
  }));
}
