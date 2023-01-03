import { GetServerSideProps } from 'next';

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  category: string;
};

type NewsArticelListProps = {
  articles: ArticleType[];
};

export default function NewsArticleList({ articles }: NewsArticelListProps) {
  return (
    <>
      <h1>List of News Article</h1>
      {articles.map((article) => (
        <div key={article?.id}>
          <h2>
            {article?.id} {article?.title} | {article?.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();
  console.log('Pre-rendering NewsArticleList');

  return {
    props: { articles: data },
  };
};
