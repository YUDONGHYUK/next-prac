import Image from 'next/image';
import Counter from '@/components/Counter';

export default function Home() {
  console.log('Hello! - Server');

  return (
    <>
      <h1>Home Page!</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Clothes"
        width={400}
        height={400}
        priority
      />
    </>
  );
}
