function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading product');
  }

  return (
    <>
      {children}
      <h2>Nested Layout</h2>
    </>
  );
}
