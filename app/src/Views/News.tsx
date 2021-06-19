import { useEffect, useState } from "react";
import { Article } from "../Components/Article";

import "../Sass/news.scss";

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
  const [data, setData] = useState<Res>();
  const apiUrl = `https://newsapi.org/v2/everything?q=astronomy+space&sortBy=publishedAt&apiKey=cf51166c285a415a801148b2f5b41d70`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await (await fetch(apiUrl)).json();

      setData(result);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="articles-container">
      <h1 className="text-grey flex justify-center font-bold mt-10">
        The latest astronomy news from around the world!
      </h1>
      <div className="flex items-center flex-col mt-20">
        {data &&
          data.articles.map((item, key) => (
            <Article
              key={key}
              title={item.title}
              imgUrl={item.urlToImage}
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
