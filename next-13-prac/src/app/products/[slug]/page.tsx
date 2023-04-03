import { notFound } from 'next/navigation';

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
