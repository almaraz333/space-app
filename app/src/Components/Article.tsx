import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faCheckSquare,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  useAddArticleMutation,
  useRemoveArticleMutation,
} from "../generated/graphql";

import { isLoggedInState, userIdState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export type ArticleProps = {
  title: string;
  imageUrl: string;
  description: string;
  publishedAt: string;
  url: string;
  sourceName: string;
  removeArticleFromArray?: (key: number) => void;
  key: number;
};

export const Article: React.FC<ArticleProps> = ({
  title,
  imageUrl,
  description,
  publishedAt,
  url,
  sourceName,
  removeArticleFromArray,
  key,
}) => {
  const [addArticle] = useAddArticleMutation();
  const [removeArticle] = useRemoveArticleMutation();
  const isLoggedIn = useRecoilState(isLoggedInState);
  const userId = useRecoilValue(userIdState);

  const [added, setAdded] = useState(false);

  const { location } = useHistory();

  const isAccountView = location.pathname.includes("account");

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

  const handleRemoveArticle = (url: string) => {
    if (isLoggedIn) {
      removeArticle({
        variables: {
          url,
        },
      });
      removeArticleFromArray && removeArticleFromArray(key);
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
      <div className="flex justify-end button  ">
        {!isAccountView ? (
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
              setAdded(true);
            }}
          >
            {added ? (
              <FontAwesomeIcon icon={faCheckSquare} color="white" size="lg" />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} color="white" size="lg" />
            )}
          </button>
        ) : (
          <button
            onClick={() => {
              handleRemoveArticle(url);
            }}
          >
            <FontAwesomeIcon icon={faMinusSquare} color="white" size="lg" />
          </button>
        )}
      </div>
      <div className="content">
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
