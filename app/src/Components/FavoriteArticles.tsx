import { useFavoriteArticlesQuery } from "../generated/graphql";
import { Article } from "./Article";

import { userIdState } from "../atoms";
import { useRecoilValue } from "recoil";

import "../Sass/articles.scss";

export type FavoriteArticlesProps = {};

export const FavoriteArticles: React.FC<FavoriteArticlesProps> = () => {
  const userId = useRecoilValue(userIdState);
  const { data: articlesData } = useFavoriteArticlesQuery({
    variables: { userId: userId ?? 0 },
  });

  const removeArticleFromArray = (key: number) => {
    articlesData?.favoriteArticles.splice(key, 1);
  };

  return (
    <div className="articles-container">
      {articlesData ? (
        articlesData?.favoriteArticles.map((article, key) => (
          <Article
            title={article.title}
            publishedAt={article.publisher}
            url={article.url}
            imageUrl={article.imageUrl}
            description={article.description}
            sourceName={article.sourceName}
            removeArticleFromArray={removeArticleFromArray}
            key={key}
          />
        ))
      ) : (
        <h1>Something went wrong please log in</h1>
      )}
    </div>
  );
};
