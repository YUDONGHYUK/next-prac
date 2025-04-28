// ErrorBoundary는 Client Component이어야 한다.
'use client';

// [reviewId]/page.tsx 에 정의된 컴포넌트를 client 컴포넌트로 바꾸는 것은 과한 접근이므로
// 아래 두 개의 함수(startTransition, useRouter)를 사용한다.
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';

// error.tsx에 정의된 컴포넌트는 error객체와 reset 함수를 props로 받는다.
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reload}>Try Again</button>
    </div>
  );
}
