import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'Front-End 관련 블로그 글',
};

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((posts) => posts.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
