import { Link } from "react-router-dom";

export type ArticleProps = {
  title: string;
  imgUrl: string;
  description: string;
  publishedAt: string;
  url: string;
  sourceName: string;
};

export const Article: React.FC<ArticleProps> = ({
  title,
  imgUrl,
  description,
  publishedAt,
  url,
  sourceName,
}) => {
  return (
    <div className="article my-5 p-5 border-secondary border-2">
      <div className="article-header">
        <img
          className="image"
          alt="article"
          src={imgUrl}
          height="50%"
          width="50%"
        />
        <h2 className="title mt-3 text-grey">
          <a href={url}>{title}</a>
        </h2>
      </div>
      <div className="content">
        <div className="description">{description}</div>
        <div className="flex">
          <p className="font-bold">
            {Math.floor((Date.now() - Date.parse(publishedAt)) / 3600000)} hours
            ago
          </p>
          <span className="mx-2">|</span>
          <p>{sourceName}</p>
        </div>
      </div>
    </div>
  );
};
