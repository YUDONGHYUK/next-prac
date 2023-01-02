import { GetStaticProps, GetStaticPaths } from 'next';
// import { useRouter } from 'next/router';
import { Post } from './index';

type PostDetailProps = {
  post: Post;
};

export default function PostDetail({ post }: PostDetailProps) {
  /* fallback: true
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  */

  return (
    <>
      <h2>
        {post?.id} {post?.title}
      </h2>
      <p>{post?.body}</p>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data = await response.json();
  // const paths = data.map((post: Post) => ({
  //   params: { postId: `${post.id}` },
  // }));

  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (
  context
) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page for /posts/${params?.postId}`);

  return {
    props: { post: data },
  };
};
