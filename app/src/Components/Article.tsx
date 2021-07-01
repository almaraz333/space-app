import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import { useAddArticleMutation } from "../generated/graphql";

import { isLoggedInState, userIdState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";

export type ArticleProps = {
  title: string;
  imageUrl: string;
  description: string;
  publishedAt: string;
  url: string;
  sourceName: string;
  favoriteArticlesUrls?: string[];
};

export const Article: React.FC<ArticleProps> = ({
  title,
  imageUrl,
  description,
  publishedAt,
  url,
  sourceName,
  favoriteArticlesUrls = [],
}) => {
  const [addArticle] = useAddArticleMutation();
  const isLoggedIn = useRecoilState(isLoggedInState);
  const userId = useRecoilValue(userIdState);

  const { location } = useHistory();

  const handleArticleAdd = (
    url: string,
    publisher: string,
    title: string,
    userId: number,
    imageUrl: string,
    description: string,
    sourceName: string
  ) => {
    if (isLoggedIn) {
      addArticle({
        variables: {
          url,
          title,
          userId,
          publisher,
          imageUrl,
          description,
          sourceName,
        },
      });
    } else {
      alert("Must be logged in to add article to favorites");
    }
  };

  return (
    <div className="article my-5 p-5 border-primary border-2">
      <div className="article-header">
        {
          <img
            className="image"
            alt="article"
            src={imageUrl}
            height="50%"
            width="50%"
          />
        }
        <h2 className="title mt-3 text-grey">
          <a href={url}>
            <p>{title}</p>
          </a>
        </h2>
      </div>
      <div className="content">
        <div className="mb-5 flex justify-end">
          {!location.pathname.includes("account") && (
            <button
              onClick={() => {
                handleArticleAdd(
                  url,
                  sourceName,
                  title,
                  userId ?? 0,
                  imageUrl,
                  description,
                  sourceName
                );
              }}
            >
              {favoriteArticlesUrls.includes(url) ? (
                <FontAwesomeIcon icon={faCheckSquare} color="white" size="lg" />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} color="white" size="lg" />
              )}
            </button>
          )}
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="flex mt-5">
          <p className="font-bold">
            {Math.floor((Date.now() - Date.parse(publishedAt)) / 3600000)} hours
            ago
          </p>
          <span className="mx-2 text-primary">|</span>
          <p>{sourceName}</p>
        </div>
      </div>
    </div>
  );
};
