'use client';

import { use } from 'react';
import Link from 'next/link';

// export default async function NewsArticle({
export default function NewsArticle({
  params, // layout.tsx, page.tsx 모두 접근 가능
  searchParams, // 오직 page.tsx에서만 접근 가능
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'ko' | 'en' | 'fr' }>;
}) {
  // async await: Server Components
  // React 'use' hook: Client Components
  const { articleId } = use(params);
  const { lang = 'ko' } = use(searchParams);
  // const { articleId } = await params;
  // const { lang = 'ko' } = await searchParams;

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=ko`}>Korean</Link>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
