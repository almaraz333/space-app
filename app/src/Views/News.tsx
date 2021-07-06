import { useEffect, useState } from "react";
import { Article } from "../Components/Article";

import { userIdState } from "../atoms";
import { useRecoilValue } from "recoil";

import { useFavoriteArticlesQuery } from "../generated/graphql";

import "../Sass/articles.scss";

export type ArticleProps = {
  author: string;
  description: string;
  publishedAt: string;
  source: { id?: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type Res = {
  articles: ArticleProps[];
};

export const News: React.FC = () => {
  const userId = useRecoilValue(userIdState);
  console.log(userId);
  const { data: favoriteArticlesData } = useFavoriteArticlesQuery({
    variables: { userId: userId ?? 0 },
  });
  const [data, setData] = useState<Res>();
  const apiUrl = `https://newsapi.org/v2/everything?q=astronomy+space&sortBy=publishedAt&apiKey=cf51166c285a415a801148b2f5b41d70`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await (await fetch(apiUrl)).json();

      setData(result);
    };
    fetchData();
  }, [apiUrl]);

  const favoriteArticlesUrls = favoriteArticlesData?.favoriteArticles.map(
    (article) => article.url
  );

  return (
    <div className="articles-container">
      <h1 className="text-grey flex justify-center font-bold mt-10">
        The latest astronomy news from around the world!
      </h1>
      <div className="flex article-container items-center flex-col mt-20">
        {data &&
          data.articles.map((item, key) => (
            <Article
              key={key}
              title={item.title}
              imageUrl={item.urlToImage}
              description={item.description}
              publishedAt={item.publishedAt}
              url={item.url}
              sourceName={item.source.name}
            />
          ))}
      </div>
    </div>
  );
};
