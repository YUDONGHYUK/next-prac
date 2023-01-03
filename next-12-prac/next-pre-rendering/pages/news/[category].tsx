import { GetServerSideProps } from 'next';
import { ArticleType } from './index';

type ArticleListByCategoryProps = {
  articles: ArticleType[];
  category: string;
};

export default function ArticleListByCategory({
  articles,
  category,
}: ArticleListByCategoryProps) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const category = params?.category as string;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Pre-rendering News Articles for category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
};
